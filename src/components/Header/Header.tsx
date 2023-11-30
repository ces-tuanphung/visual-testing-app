import useHeaderStyle from "./useHeaderStyle";

const Header = () => {
  const classes = useHeaderStyle();

  return (
    <div className={classes.header}>
      <div className={classes.logo}>CES Visual Testing</div>
    </div>
  );
};

export default Header;
