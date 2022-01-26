import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import Toolbar from "@mui/material/Toolbar";
import PropTypes from "prop-types";
import * as React from "react";
import { Link, Outlet } from "react-router-dom";
import addCourse from "../../../Img/Icons/addCourse.png";
import admin from "../../../Img/Icons/amdin.png";
import Home from "../../../Img/Icons/home.png";
import manageOrder from "../../../Img/Icons/manageOrder.png";
import Payment from "../../../Img/Icons/Payment.png";
import review from "../../../Img/Icons/review.png";
import shop from "../../../Img/Icons/shopping cart.png";
import "./Dashboard.css";

const drawerWidth = 220;

function Nav(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <List sx={{ p: 2, marginTop: "-65px" }}>
        <div className="side_img_wrapper">
          <div className="side_img_span">
            <img
              className="img-fluid side_img"
              width="100px"
              src="https://lh3.googleusercontent.com/a-/AOh14GiidAJL084JQwMtH4Z4hoCUe9j3bC3m7HSiA5-6Mg=s96-c"
              alt=""
            />{" "}
          </div>
        </div>
      </List>
      {/* List of Route */}
      <div className="text-start mx-4 list_of_route">
        <List>
          <Link
            className="text-decoration-none text-white d-flex align-items-center "
            to="/"
          >
            <span className="me-3">
              <img className="img-fluid" width="25px" src={Home} alt="" />
            </span>{" "}
            Home
          </Link>
        </List>{" "}
        <List>
          <Link
            className="text-decoration-none text-white d-flex align-items-center "
            to="/dashboard/admin"
          >
            <span className="me-3">
              <img className="img-fluid" width="25px" src={admin} alt="" />
            </span>{" "}
            Admin
          </Link>
        </List>{" "}
        <List>
          <Link
            className="text-decoration-none text-white d-flex align-items-center "
            to="/dashboard/userOrders"
          >
            <span className="me-3">
              <img className="img-fluid" width="25px" src={shop} alt="" />
            </span>{" "}
            Your Orders
          </Link>
        </List>{" "}
        <List>
          <Link
            className="text-decoration-none text-white d-flex align-items-center "
            to="/dashboard/manageOrders"
          >
            <span className="me-3">
              <img
                className="img-fluid"
                width="25px"
                src={manageOrder}
                alt=""
              />
            </span>{" "}
            Manage Orders
          </Link>
        </List>{" "}
        <List>
          <Link
            className="text-decoration-none text-white d-flex align-items-center "
            to="/dashboard/courses"
          >
            <span className="me-3">
              <img className="img-fluid" width="25px" src={shop} alt="" />
            </span>{" "}
            Courses
          </Link>
        </List>{" "}
        <List>
          <Link
            className="text-decoration-none text-white d-flex align-items-center "
            to="/dashboard/addCourse"
          >
            <span className="me-3">
              <img className="img-fluid" width="25px" src={addCourse} alt="" />
            </span>{" "}
            Add Course
          </Link>
        </List>{" "}
        <List>
          <Link
            className="text-decoration-none text-white d-flex align-items-center "
            to="/dashboard/review"
          >
            <span className="me-3">
              <img className="img-fluid" width="25px" src={review} alt="" />
            </span>{" "}
            Rate us
          </Link>
        </List>{" "}
        <List>
          <Link
            className="text-decoration-none text-white d-flex align-items-center "
            to="/dashboard/payment"
          >
            <span className="me-3">
              <img className="img-fluid" width="25px" src={Payment} alt="" />
            </span>{" "}
            Payment
          </Link>
        </List>{" "}
      </div>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar
          sx={{ backgroundColor: "rgb(0,0,0)", display: { md: "none" } }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon sx={{ color: "#00e1d6" }} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "rgb(0, 0, 0) ;",
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "#343434 ",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          marginTop: "-20px",
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}

Nav.propTypes = {
  window: PropTypes.func,
};

export default Nav;
