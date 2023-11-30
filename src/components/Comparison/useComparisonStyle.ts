import { makeStyles } from "@mui/styles";

const useComparisonStyle = makeStyles(() => ({
  header: {
    backgroundColor: "#333333",
    padding: "20px",
    marginBottom: "20px",
  },
  navigate: {
    width: "100%",
    height: "10px",
    display: "flex",
    flexWrap: "wrap",
  },
  navigateItem: {
    flex: "1",
    height: "100%",
    backgroundColor: "#e2e8f0",
    borderRadius: "20px",
    cursor: "pointer",
    margin: "0 2px",
    "&&:hover": {
      backgroundColor: "#808080",
    },
  },
  selected: {
    backgroundColor: "#718096",
    "&&:hover": {
      backgroundColor: "#808080",
    },
  },
  approve: {
    backgroundColor: "#9ae6b4",
    "&&:hover": {
      backgroundColor: "#38a169",
    },
  },
  decline: {
    backgroundColor: "#feb2b2",
    "&&:hover": {
      backgroundColor: "#ff0000",
    },
  },
  btnContainer: {
    width: "full",
    display: "flex",
    justifyContent: "space-between",
  },
  toggleOption: {
    margin: "10px 0",
  },
  toggleBtn: {
    border: "1px solid #d6bcfa",
    color: "#d6bcfa",
    margin: "2px",
    height: "25px",
    fontSize: "12px",
    textAlign: "center",
    verticalAlign: "middle",
  },
  activeBtn: {
    backgroundColor: "#d6bcfa",
    color: "#000000",
  },
  btnStack: {
    minWidth: "80px",
    display: "flex",
    justifyContent: "space-between",
    margin: "10px 0",
  },
  btnArrow: {
    width: "15px",
    height: "32px",
    margin: "2px",
    backgroundColor: "#ffffff14",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "&&:disabled": {
      opacity: "0.6",
      cursor: "not-allowed",
    },
  },
  comparison: {
    width: "100vw",
    minHeight: "520px",
  },
  ImageContainer: {
    width: "98vw",
    display: "flex",
    border: "1px dotted #cccccc",
    alignItems: "start",
    flexDirection: "row",
    margin: "auto",
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
