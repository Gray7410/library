import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="a" sx={{ flexGrow: 1 }} href="/">
            <Link to={"/"}>Библиотека</Link>
          </Typography>
          <Link to={"books/add"}>
            <Fab size="small" color="secondary" aria-label="add">
              <AddIcon />
            </Fab>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
