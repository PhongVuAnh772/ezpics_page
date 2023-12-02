import * as React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
  useLocation,
  Outlet 
} from "react-router-dom";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import Button from "@mui/material/Button";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Tooltip from "@mui/material/Tooltip";
import Avatar from "@mui/material/Avatar";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import MonitorOutlinedIcon from "@mui/icons-material/MonitorOutlined";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import DirectionsIcon from "@mui/icons-material/Directions";
import Dashboard from "../Dashboard/Dashboard";
import CottageOutlinedIcon from "@mui/icons-material/CottageOutlined";
import SpaceDashboardOutlinedIcon from "@mui/icons-material/SpaceDashboardOutlined";
import "./Content.scss";
import CrownIcon from "../../../assets/crownIcon";

const drawerWidth = 240;

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const location = useLocation();

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#1976d2",
      },
    },
  });
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const pages = ["Products", "Pricing", "Blog"];
  const settings = [
    "Cài đặt tài khoản",
    "Tải ứng dụng Ezpics",
    "Giới thiệu bạn bè",
    "Đăng xuất",
  ];
   const textHeader = {
    color: "black",
    fontFamily:
      "Canva Sans,Noto Sans Variable,Noto Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif",
    fontWeight: 500,
    fontSize: "16px",
    paddingLeft: "3%",
  };
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {/* <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem> */}
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );
  const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
    ({ theme, open }) => ({
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      // marginLeft: `-${drawerWidth}px`,
      ...(open && {
        transition: theme.transitions.create("margin", {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: `${drawerWidth}px`,
      }),
    })
  );

  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme, open }) => ({
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
      position: "relative",
      zIndex: theme.zIndex.drawer + 1,
    }),
    ...(open && {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: `${drawerWidth}px`,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      position: "relative",
      zIndex: theme.zIndex.drawer + 1,
    }),
    position: "relative",
    zIndex: theme.zIndex.drawer + 1,
  }));

  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 2),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
    paddingTop: "30%",
  }));
  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <CssBaseline />
      <Box theme={darkTheme} style={{ width: "100%" }}>
        <AppBar
          position="static"
          theme={darkTheme}
          style={{ width: "100%", position: "fixed" }}
        >
          <Toolbar style={{ width: "100%" }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
              onClick={() => setOpen(!open)}
            >
              <MenuIcon />
            </IconButton>

            <img
              alt=""
              src="https://ezpics.vn/wp-content/uploads/2023/05/LOGO-EZPICS-300.png"
              loading="lazy"
              style={{ width: "3%", height: "5%" }}
            />
             <div style={textHeader}>Tính năng</div>
            <div style={textHeader}>Mẫu thiết kế nổi bật</div>
            <div style={textHeader}>Hướng dẫn sử dụng</div>
            <div style={textHeader}>BLOG</div>
            <div style={textHeader}>Liên hệ</div>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="inherit"
              >
                <Badge color="error">
                  <MonitorOutlinedIcon />
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge color="error">
                  <SettingsOutlinedIcon />
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <NotificationsActiveOutlinedIcon />
              </IconButton>
              <Button
                variant="contained"
                size="medium"
                style={{
                  marginLeft: "20px",
                  height: 40,
                  alignSelf: "center",
                  textTransform: "none",
                  color: "white",
                  backgroundColor: "rgb(244, 204, 62)",
                }}
              >
                Tạo thiết kế
              </Button>
            </Box>

            <Box sx={{ flexGrow: 0, marginLeft: "20px" }}>
              <Tooltip title="Cá nhân">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    alt="Remy Sharp"
                    src="https://scontent-hkg4-1.xx.fbcdn.net/v/t39.30808-1/358103027_1331575257782311_1544167027230255153_n.jpg?stp=cp0_dst-jpg_p60x60&_nc_cat=102&ccb=1-7&_nc_sid=5740b7&_nc_eui2=AeEVMLb6SiFEBHfWqACe9T-Rv0J1PzNDDQ6_QnU_M0MNDmGg3bdB_oBgR3MUMeIJYh3f11NcontKc-1pqPZOZO52&_nc_ohc=KE2nAaUPQ5wAX-5exdk&_nc_ht=scontent-hkg4-1.xx&oh=00_AfDGsmGCWD6wrMHtjVQqaE0Pi2ApBNBxYxb1HVE-oBO1yg&oe=656DCE94"
                  />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px",}}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
                style={{ cursor: "pointer" }}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
          style={{ paddingRight: 10 }}
        >
          <DrawerHeader></DrawerHeader>
          <List></List>

          <div style={{}}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                paddingLeft: 15,
                alignItems: "center",
              }}
            >
              <Avatar
                alt="Remy Sharp"
                src="https://scontent-hkg4-1.xx.fbcdn.net/v/t39.30808-1/358103027_1331575257782311_1544167027230255153_n.jpg?stp=cp0_dst-jpg_p60x60&_nc_cat=102&ccb=1-7&_nc_sid=5740b7&_nc_eui2=AeEVMLb6SiFEBHfWqACe9T-Rv0J1PzNDDQ6_QnU_M0MNDmGg3bdB_oBgR3MUMeIJYh3f11NcontKc-1pqPZOZO52&_nc_ohc=KE2nAaUPQ5wAX-5exdk&_nc_ht=scontent-hkg4-1.xx&oh=00_AfDGsmGCWD6wrMHtjVQqaE0Pi2ApBNBxYxb1HVE-oBO1yg&oe=656DCE94"
                style={{ alignSelf: "center" }}
              />
              <div
                style={{
                  // display: "flex",
                  // flexDirection: "column",
                  // justifyContent: "center",
                  paddingLeft: 15,
                  paddingBottom: 15,
                }}
              >
                <p
                  style={{
                    fontFamily:
                      "Noto Sans Vietnamese,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif",
                    color: "rgb(13, 18, 22)",
                    fontWeight: "600",
                    lineHeight: "24px",
                  }}
                >
                  Cá nhân
                </p>
                <p
                  style={{
                    color: "rgba(13, 18, 22, 0.7)",
                    fontSize: "12px",
                    fontFamily:
                      "Noto Sans Vietnamese,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif",
                    lineHeight: "0px",
                  }}
                >
                  Miễn phí
                </p>
              </div>
            </div>
          </div>
          <button
            style={{
              backgroundColor: "#e1e4e7",
              marginLeft: "15px",
              display: "flex",
              textDecoration: "none",
              height: 40,
              alignItems: "center",
              paddingLeft: 10,
              textAlign: "center",
              justifyContent: "center",
              fontSize: "13px",
              color: "rgb(13, 18, 22)",
              lineHeight: "22px",
              fontWeight: "bold",
              border: "none",
              borderRadius: 10,
              marginRight: "12px",
              marginTop: "10px",
              marginBottom: "20px",
            }}
          >
            <CrownIcon style={{ marginLeft: "-10px" }} />
            <span style={{ paddingRight: "10px", paddingLeft: "5px" }}>
              Dùng Ezpics Pro
            </span>
          </button>
          <Divider />
          <ul
            style={{
              textDecoration: "none",
              listStyleType: "none",
              paddingLeft: 15,
              paddingRight: "12px",
            }}
          >
            <li
              style={{
                display: "flex",
                textDecoration: "none",
                width: "100%",
                color: "inherit",
                backgroundColor:
                  location.pathname === "/" ? "#ccc" : "transparent",
                borderRadius: 5,
                marginBottom: 5,

                // paddingTop: 2,
                // paddingBottom: 2,
              }}
            >
              <Link
                to="/"
                style={{
                  display: "flex",
                  textDecoration: "none",
                  width: "100%",
                  height: 40,
                  alignItems: "center",
                  paddingLeft: 10,

                  fontSize: "16px",
                  color: "rgb(13, 18, 22)",
                  lineHeight: "22px",
                }}
              >
                <CottageOutlinedIcon
                  style={{ marginRight: 5, height: 20, width: 20 }}
                />
                Trang chủ
              </Link>
            </li>
            <li
              style={{
                display: "flex",
                textDecoration: "none",
                width: "100%",
                color: "inherit",
                backgroundColor:
                  location.pathname === "/about" ? "#ccc" : "transparent",
                marginBottom: 5,
              }}
            >
              <Link
                to="/"
                style={{
                  display: "flex",
                  textDecoration: "none",
                  width: "100%",
                  height: 40,
                  alignItems: "center",
                  paddingLeft: 10,

                  fontSize: "16px",
                  color: "rgb(13, 18, 22)",
                  lineHeight: "22px",
                }}
              >
                <SpaceDashboardOutlinedIcon
                  style={{ marginRight: 5, height: 20, width: 20 }}
                />
                Mẫu
              </Link>
            </li>
            <li
              style={{
                display: "flex",
                textDecoration: "none",
                width: "100%",
                color: "inherit",
                backgroundColor:
                  location.pathname === "/f" ? "#ccc" : "transparent",
              }}
            >
              <Link
                to="/"
                style={{
                  display: "flex",
                  textDecoration: "none",
                  width: "100%",
                  height: 40,
                  alignItems: "center",
                  paddingLeft: 10,
                  // fontFamily:
                  //   "Noto Sans Vietnamese,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif",
                  fontSize: "16px",
                  color: "rgb(13, 18, 22)",
                  lineHeight: "22px",
                }}
              >
                <FolderOutlinedIcon
                  style={{ marginRight: 5, height: 20, width: 20 }}
                />
                Dự án
              </Link>
            </li>
          </ul>
        </Drawer>
                      <Outlet context={open}/>

      </Box>

    </Box>
  );
}
