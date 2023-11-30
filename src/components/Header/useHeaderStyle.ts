import { makeStyles } from "@mui/styles";

const useHeaderStyle = makeStyles(() => ({
  header: {
    height: "10%",
    width: "100vw",
    backgroundColor: "#333333",
    display: "flex",
    alignItems: "center"
  },
  logo: {
    padding: "10px",
    fontSize: "30px",
  }
}));
export default useHeaderStyle;
