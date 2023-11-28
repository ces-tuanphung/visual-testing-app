import { makeStyles } from "@mui/styles";

const useComparisonStyle = makeStyles(() => ({
  toggleOption: {
    margin: "10px 0",
  },
  toggleBtn: {
    border: "1px solid",
    margin: "2px",
  },
  comparison: {
    width: "100vw",
  },
  ImageContainer: {
    width: "100vw",
    display: "flex",
    border: "1px dotted #cccccc",
    alignItems: "start",
    flexDirection: "row",
  },
  SideBySideItem: {
    border: "1px dotted #cccccc",
  },
  SingleImage: {
    width: "80%",
    marginRight: "30%",
  },
}));
export default useComparisonStyle;
