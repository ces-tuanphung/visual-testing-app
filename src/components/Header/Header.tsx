import useHeaderStyle from "./useHeaderStyle";

const Header = () => {
  const classes = useHeaderStyle();

  return <div className={classes.header}>CES Visual Testing</div>;
};

export default Header;
