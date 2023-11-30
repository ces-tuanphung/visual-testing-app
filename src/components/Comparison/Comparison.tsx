import ReactCompareImage from "react-compare-image";
import baseLine from "../../assets/home-expected.png";
import current from "../../assets/home-actual.png";
import diff from "../../assets/home-diff.png";
import { useState } from "react";
import { CardMedia } from "@mui/material";
import useComparisonStyle from "./useComparisonStyle";
import clsx from "clsx";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

type Comparison = {
  id: number;
  beforeImageUrl: string | null;
  afterImageUrl: string | null;
  differenceImageUrl: string | null;
  status: string;
  type: string;
};

const comparison = [
  {
    id: 1,
    beforeImageUrl: baseLine,
    afterImageUrl: current,
    differenceImageUrl: diff,
    status: "PENDING",
    type: "DIFFERENCE",
  },
  {
    id: 2,
    beforeImageUrl: null,
    afterImageUrl: current,
    differenceImageUrl: null,
    status: "APPROVED",
    type: "ADDITION",
  },
  {
    id: 3,
    beforeImageUrl: baseLine,
    afterImageUrl: null,
    differenceImageUrl: null,
    status: "DECLINED",
    type: "DELETION",
  },
  {
    id: 4,
    beforeImageUrl: baseLine,
    afterImageUrl: current,
    differenceImageUrl: diff,
    status: "PENDING",
    type: "DIFFERENCE",
  },
];

const StylesButtonList = [
  { id: 1, name: "Single" },
  { id: 2, name: "Side by Side" },
  { id: 3, name: "Slider" },
];

const getIndex = (listItem: Comparison[], id: number) => {
  return listItem.findIndex((item) => item.id === id);
};

const Comparison = ({
  comparisons = comparison,
  itemSelector = comparison[0],
}: {
  comparisons?: Comparison[];
  itemSelector?: Comparison;
}) => {
  const [option, setOption] = useState("Side by Side");
  const classes = useComparisonStyle();
  const [item, setItem] = useState(itemSelector);

  const style = () => {
    switch (option) {
      case "Single":
        return (
          <div className={classes.ImageContainer}>
            <CardMedia
              className={classes.SingleImage}
              src={String(item.differenceImageUrl)}
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
                src={String(item.beforeImageUrl)}
                component="img"
                height="100%"
              ></CardMedia>
            </div>
            <div className={classes.SideBySideItem}>
              <CardMedia
                src={String(item.afterImageUrl)}
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
              <ReactCompareImage
                leftImage={String(item.afterImageUrl)}
                rightImage={String(item.beforeImageUrl)}
              />{" "}
            </div>
          </div>
        );
    }
  };

  return (
    <div className={classes.comparison}>
      <div className={classes.header}>
        <div className={classes.navigate}>
          {comparisons.map((compare) => (
            <div
              key={compare.id}
              className={clsx(
                compare.id === item.id ? classes.selected : null,
                classes.navigateItem
              )}
              onClick={() => {
                setItem(compare);
                setOption("Side by Side");
              }}
            />
          ))}
        </div>
        <div className={classes.btnContainer}>
          <div className={classes.toggleOption}>
            {StylesButtonList.map((item) => (
              <button
                className={clsx(
                  classes.toggleBtn,
                  item.name === option ? classes.activeBtn : ""
                )}
                key={item.id}
                onClick={() => setOption(item.name)}
              >
                {item.name}
              </button>
            ))}
          </div>
          <div className={classes.btnStack}>
            <button
              className={classes.btnArrow}
              disabled={getIndex(comparisons, item.id) === 0 ? true : false}
              onClick={() => {
                setItem(comparisons[getIndex(comparisons, item.id) - 1]);
              }}
            >
              <KeyboardDoubleArrowLeftIcon />
            </button>
            <button
              className={classes.btnArrow}
              disabled={
                getIndex(comparisons, item.id) === comparisons.length - 1
                  ? true
                  : false
              }
              onClick={() => {
                setItem(comparisons[getIndex(comparisons, item.id) + 1]);
              }}
            >
              <KeyboardDoubleArrowRightIcon />
            </button>
          </div>
        </div>
      </div>
      {style()}
    </div>
  );
};

export default Comparison;
