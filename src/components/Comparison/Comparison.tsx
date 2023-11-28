import ReactCompareImage from "react-compare-image";
import baseLine from "../../assets/home-expected.png";
import current from "../../assets/home-actual.png";
import diff from "../../assets/home-diff.png";
import { useState } from "react";
import { CardMedia } from "@mui/material";
import useComparisonStyle from "./useComparisonStyle";

const StylesButtonList = [
  { id: 1, name: "Single" },
  { id: 2, name: "Side by Side" },
  { id: 3, name: "Slider" },
];

const Comparison = () => {
  const [option, setOption] = useState("Side by Side");
  const classes = useComparisonStyle();

  const style = () => {
    switch (option) {
      case "Single":
        return (
          <div className={classes.ImageContainer}>
            <CardMedia
              className={classes.SingleImage}
              src={diff}
              component="img"
              height="100%"
            ></CardMedia>
          </div>
        );
      case "Side by Side":
        return (
          <div className={classes.ImageContainer}>
            <div className={classes.SideBySideItem}>
              <CardMedia
                src={baseLine}
                component="img"
                height="100%"
              ></CardMedia>
            </div>
            <div className={classes.SideBySideItem}>
              <CardMedia
                src={current}
                component="img"
                height="100%"
              ></CardMedia>
            </div>
          </div>
        );
      case "Slider":
        return (
          <div className={classes.ImageContainer}>
            <div className={classes.SingleImage}>
              <ReactCompareImage leftImage={baseLine} rightImage={current} />{" "}
            </div>
          </div>
        );
    }
  };

  return (
    <div className={classes.comparison}>
      <div className={classes.toggleOption}>
        {StylesButtonList.map((item) => (
          <button
            className={classes.toggleBtn}
            key={item.id}
            onClick={() => setOption(item.name)}
          >
            {item.name}
          </button>
        ))}
      </div>
      {style()}
    </div>
  );
};

export default Comparison;
