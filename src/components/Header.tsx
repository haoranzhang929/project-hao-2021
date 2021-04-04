import { createStyles, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import logoSvg from "../assets/logo.svg";

const useStyles = makeStyles(({ spacing, typography }) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    menuButton: {
      marginRight: spacing(3)
    },
    logo: {
      maxWidth: "50px",
      minWidth: "50px",
      marginRight: spacing(3)
    },
    title: {
      flexGrow: 1,
      fontSize: typography.h5.fontSize,
      fontWeight: 300,
      letterSpacing: "normal"
    }
  })
);

const Header = () => {
  const { root, menuButton, logo, title } = useStyles();

  return (
    <div className={root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <img src={logoSvg} alt="Logo of Hao" className={logo} />
          <Typography variant="overline" className={title}>
            Hao
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
