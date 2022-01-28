/* eslint-disable jsx-a11y/anchor-is-valid */
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
import adminUser from "../../../Img/Icons/admin.png";
import adminPic from "../../../Img/Icons/amdin.png";
import Home from "../../../Img/Icons/home.png";
import logoutImg from "../../../Img/Icons/login.png";
import Notification from "../../../Img/Icons/notification.png";
import review from "../../../Img/Icons/review.png";
import shop from "../../../Img/Icons/shopping cart.png";
import normalUser from "../../../Img/Icons/user_icon.png";
import UseAuth from "../../Hooks/UseAuth";
import "./Dashboard.css";

const drawerWidth = 220;

function Nav(props) {
  const { window } = props;
  const { user, admin, logout } = UseAuth();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const [blogPost, setBlogPost] = React.useState([]);
  React.useEffect(() => {
    fetch(`https://peaceful-castle-84704.herokuapp.com/blogs`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.length);
        const remaining = data.result.filter((post) => post.approved === false);
        setBlogPost(remaining);
      });
  }, []);
  const drawer = (
    <div>
      <Toolbar />
      <List sx={{ p: 2, marginTop: "-65px" }}>
        <div className="side_img_wrapper">
          <div className="side_img_span">
            <img
              className="img-fluid side_img"
              width="100px"
              src={user.photoURL}
              alt=""
            />{" "}
          </div>
          <div className="user_name">
            <h6>
              <span className="user_icon_admin_icon">
                {admin ? (
                  <img
                    className="img-fluid me-2"
                    width="20px"
                    src={adminUser}
                    alt=""
                  />
                ) : (
                  <img
                    className="img-fluid me-2"
                    width="20px"
                    src={normalUser}
                    alt=""
                  />
                )}
              </span>
              {user.displayName}{" "}
            </h6>{" "}
          </div>
        </div>
      </List>

      <div className="text-start mx-4 list_of_route">
        <List>
          <Link
            className="text-decoration-none text-white d-flex align-items-center "
            to="/"
          >
            <span className="me-3 dashboard_link_img_icon">
              <img className="img-fluid" width="25px" src={Home} alt="" />
            </span>{" "}
            Home
          </Link>
        </List>{" "}
        {admin && (
          <Box>
            <List>
              <Link
                className="text-decoration-none text-white d-flex align-items-center "
                to="/dashboard/admin"
              >
                <span className="me-3 dashboard_link_img_icon">
                  <img
                    className="img-fluid"
                    width="25px"
                    src={adminPic}
                    alt=""
                  />
                </span>{" "}
                Admin
              </Link>
            </List>
            <List>
              <Link
                className="text-decoration-none text-white d-flex align-items-center "
                to="/dashboard/courses"
              >
                <span className="me-3 dashboard_link_img_icon">
                  <img className="img-fluid" width="25px" src={shop} alt="" />
                </span>{" "}
                Blogs
              </Link>
            </List>{" "}
            <List className="notification">
              <Link
                className="text-decoration-none text-white d-flex align-items-center "
                to="/dashboard/notification"
              >
                <span className="me-3  dashboard_link_img_icon">
                  <img
                    className="img-fluid"
                    width="25px"
                    src={Notification}
                    alt=""
                  />
                </span>{" "}
                Notification{" "}
                <span className="notification_length">
                  <small>{blogPost.length}</small>
                </span>
              </Link>
            </List>{" "}
          </Box>
        )}
        <List>
          <Link
            className="text-decoration-none text-white d-flex align-items-center "
            to="/dashboard/addCourse"
          >
            <span className="me-3 dashboard_link_img_icon">
              <img className="img-fluid" width="25px" src={addCourse} alt="" />
            </span>{" "}
            Add Blogs
          </Link>
        </List>{" "}
        <List>
          <List>
            <Link
              className="text-decoration-none text-white d-flex align-items-center "
              to="/dashboard/userOrders"
            >
              <span className="me-3 dashboard_link_img_icon">
                <img className="img-fluid" width="25px" src={shop} alt="" />
              </span>{" "}
              Your Blogs
            </Link>
          </List>{" "}
          <Link
            className="text-decoration-none text-white d-flex align-items-center "
            to="/dashboard/review"
          >
            <span className="me-3 dashboard_link_img_icon">
              <img className="img-fluid" width="25px" src={review} alt="" />
            </span>{" "}
            Rate us
          </Link>
          <span
            onClick={logout}
            className="text-decoration-none logout text-white d-flex align-items-center "
          >
            <span className="me-3 dashboard_link_img_icon">
              <img className="img-fluid" width="25px" src={logoutImg} alt="" />
            </span>{" "}
            Log out
          </span>
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
            <MenuIcon sx={{ color: "#24cb83" }} />
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
