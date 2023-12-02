import React, { useRef, useState, useEffect } from "react";
import { styled, useTheme } from "@mui/material/styles";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
  useLocation,
  Outlet,
  useOutletContext
} from "react-router-dom";
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
import ForYouPage from "../ForYou/ForYouPage";
import ForYouIcon from "../../../assets/ForYouIcon";
import DosIcon from "../../../assets/DosIcon";
import ContentIcon from "../../../assets/ContentIcon";
import FormatIcon from "../../../assets/FormatIcon";
import VideoIcon from "../../../assets/VideoIcon";
import WebIcon from "../../../assets/WebIcon";
import TemplateIcon from "../../../assets/TemplateIcon";
import MoreIcons from "../../../assets/MoreIcon";
import PageIcon from "../../../assets/PageIcon";
import crownIcon from "../../../assets/crownIcon";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
function Dashboard() {
  const open = useOutletContext();
  const drawerWidth = 240;
  const location = useLocation();
  const linkRefs = useRef({});
  const activePath = location.pathname;
  const network = useSelector((state) => state.network.value);

  const [indicatorPosition, setIndicatorPosition] = useState({
    left: 0,
    bottom: 0,
  });
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.post(`${network}/getTrendProductAPI`, {
          limit: 30,
        });
        if (response && response.data && response.data.listData) {
          // setData(response.data.listData);
        } else {
          console.error("Invalid response format");
        }
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    getData();
  }, []);
  useEffect(() => {
    const activeLink = linkRefs.current[activePath];

    if (activeLink) {
      const rect = activeLink.getBoundingClientRect();
      setIndicatorPosition({
        left: rect.left,
        bottom: rect.bottom - rect.height, // Adjust bottom position if needed
      });
      console.log(activePath);
    }
  }, [activePath]);
  const Main = styled("main")(
    ({ theme }) => ({
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
  return (
    <Main open={open} style={{ paddingTop: "6%" }}>
      {/* <DrawerHeader /> */}

      <Box
        style={{
          background:
            "linear-gradient(63deg, rgba(253,208,46,1) 40%, rgba(250,226,139,1) 100%)",
          width: "100%",
          height: 300,
          borderRadius: 20,
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          position: "relative",
          marginBottom: "10px",
                  animation: "fadeIn 0.5s ease-in-out" 

        }}
      >
        <h1
          style={{
            fontFamily:
              "Noto Sans Vietnamese,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif",
            color: "white",
            fontSize: "2.2rem",
          }}
        >
          Bạn muốn thiết kế gì ?
        </h1>
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 700,
            marginTop: "10px",
          }}
        >
          <IconButton sx={{ p: "10px" }} aria-label="menu" style={{}}>
            <SearchIcon />
          </IconButton>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Tìm kiếm nội dung trên Ezpics"
            // inputProps={{ 'aria-label': 'search google maps' }}
          />
        </Paper>

        <ul
          style={{
            textDecoration: "none",
            listStyleType: "none",
            display: "flex",
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-around",
            paddingTop: "25px",
            paddingLeft: "50px",
            paddingRight: "50px",
            position: "relative",
          }}
        >
          <li style={{}}>
            <Link
              to="/"
              style={{
                display: "flex",
                textDecoration: "none",
                width: "100%",
                alignItems: "center",
                paddingLeft: 10,

                fontSize: "16px",
                color: "rgb(13, 18, 22)",
                lineHeight: "22px",
                flexDirection: "column",
              }}
            >
              {/* <CottageOutlinedIcon style={{ marginRight: 5 }} /> */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 45, // Đặt chiều rộng và chiều cao cùng một giá trị để tạo hình tròn
                  height: 45,
                  borderRadius: "50%", // Đặt border-radius thành 50% để tạo hình tròn
                  padding: 10,
                  backgroundColor: "white",
                }}
              >
                {" "}
                <ForYouIcon color="rgb(69, 86, 239)" />
              </div>
              <span
                style={{
                  marginTop: "5px",
                  fontFamily:
                    "Noto Sans Vietnamese,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif",
                  fontSize: "13px",
                  color: "white",
                  fontWeight: 600,
                }}
              >
                Cho bạn
              </span>
            </Link>
          </li>
          <li style={{}}>
            <Link
              to="/"
              style={{
                display: "flex",
                textDecoration: "none",
                width: "100%",
                alignItems: "center",
                paddingLeft: 10,

                fontSize: "16px",
                color: "rgb(13, 18, 22)",
                lineHeight: "22px",
                flexDirection: "column",
              }}
            >
              {/* <CottageOutlinedIcon style={{ marginRight: 5 }} /> */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 45, // Đặt chiều rộng và chiều cao cùng một giá trị để tạo hình tròn
                  height: 45,
                  borderRadius: "50%", // Đặt border-radius thành 50% để tạo hình tròn
                  padding: 10,
                  backgroundColor: "white",
                }}
              >
                {" "}
                <DosIcon color="rgb(15, 184, 206)" />
              </div>
              <span
                style={{
                  marginTop: "5px",
                  fontFamily:
                    "Noto Sans Vietnamese,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif",
                  fontSize: "13px",
                  color: "white",
                  fontWeight: 600,
                }}
              >
                Banner
              </span>
            </Link>
          </li>
          <li style={{}}>
            <Link
              to="/"
              style={{
                display: "flex",
                textDecoration: "none",
                width: "100%",
                alignItems: "center",
                paddingLeft: 10,

                fontSize: "16px",
                color: "rgb(13, 18, 22)",
                lineHeight: "22px",
                flexDirection: "column",
              }}
            >
              {/* <CottageOutlinedIcon style={{ marginRight: 5 }} /> */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 45, // Đặt chiều rộng và chiều cao cùng một giá trị để tạo hình tròn
                  height: 45,
                  borderRadius: "50%", // Đặt border-radius thành 50% để tạo hình tròn
                  padding: 10,
                  backgroundColor: "white",
                }}
              >
                {" "}
                <ContentIcon color="rgb(33, 166, 99)" />
              </div>
              <span
                style={{
                  marginTop: "5px",
                  fontFamily:
                    "Noto Sans Vietnamese,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif",
                  fontSize: "13px",
                  color: "white",
                  fontWeight: 600,
                }}
              >
                Mạng xã hội
              </span>
            </Link>
          </li>
          <li style={{}}>
            <Link
              to="/"
              style={{
                display: "flex",
                textDecoration: "none",
                width: "100%",
                alignItems: "center",
                paddingLeft: 10,

                fontSize: "16px",
                color: "rgb(13, 18, 22)",
                lineHeight: "22px",
                flexDirection: "column",
              }}
            >
              {/* <CottageOutlinedIcon style={{ marginRight: 5 }} /> */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 45, // Đặt chiều rộng và chiều cao cùng một giá trị để tạo hình tròn
                  height: 45,
                  borderRadius: "50%", // Đặt border-radius thành 50% để tạo hình tròn
                  padding: 10,
                  backgroundColor: "white",
                }}
              >
                <VideoIcon color="rgb(210, 105, 230)" />
              </div>
              <span
                style={{
                  marginTop: "5px",
                  fontFamily:
                    "Noto Sans Vietnamese,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif",
                  fontSize: "13px",
                  color: "white",
                  fontWeight: 600,
                }}
              >
                LiveStream
              </span>
            </Link>
          </li>
          <li style={{}}>
            <Link
              to="/"
              style={{
                display: "flex",
                textDecoration: "none",
                width: "100%",
                alignItems: "center",
                paddingLeft: 10,

                fontSize: "16px",
                color: "rgb(13, 18, 22)",
                lineHeight: "22px",
                flexDirection: "column",
              }}
            >
              {/* <CottageOutlinedIcon style={{ marginRight: 5 }} /> */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 45, // Đặt chiều rộng và chiều cao cùng một giá trị để tạo hình tròn
                  height: 45,
                  borderRadius: "50%", // Đặt border-radius thành 50% để tạo hình tròn
                  padding: 10,
                  backgroundColor: "white",
                }}
              >
                <TemplateIcon color="rgb(165, 72, 255)" />
              </div>
              <span
                style={{
                  marginTop: "5px",
                  fontFamily:
                    "Noto Sans Vietnamese,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif",
                  fontSize: "13px",
                  color: "white",
                  fontWeight: 600,
                }}
              >
                Thẻ quà tặng
              </span>
            </Link>
          </li>
          <li style={{}}>
            <Link
              to="/"
              style={{
                display: "flex",
                textDecoration: "none",
                width: "100%",
                alignItems: "center",
                paddingLeft: 10,

                fontSize: "16px",
                color: "rgb(13, 18, 22)",
                lineHeight: "22px",
                flexDirection: "column",
              }}
            >
              {/* <CottageOutlinedIcon style={{ marginRight: 5 }} /> */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 45, // Đặt chiều rộng và chiều cao cùng một giá trị để tạo hình tròn
                  height: 45,
                  borderRadius: "50%", // Đặt border-radius thành 50% để tạo hình tròn
                  padding: 10,
                  backgroundColor: "white",
                }}
              >
                <PageIcon color="rgb(255, 81, 84)" />
              </div>
              <span
                style={{
                  marginTop: "5px",
                  fontFamily:
                    "Noto Sans Vietnamese,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif",
                  fontSize: "13px",
                  color: "white",
                  fontWeight: 600,
                }}
              >
                Ưu đãi
              </span>
            </Link>
          </li>
          <li style={{}}>
            <Link
              to="/"
              style={{
                display: "flex",
                textDecoration: "none",
                width: "100%",
                alignItems: "center",
                paddingLeft: 10,

                fontSize: "16px",
                color: "rgb(13, 18, 22)",
                lineHeight: "22px",
                flexDirection: "column",
              }}
            >
              {/* <CottageOutlinedIcon style={{ marginRight: 5 }} /> */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 45, // Đặt chiều rộng và chiều cao cùng một giá trị để tạo hình tròn
                  height: 45,
                  borderRadius: "50%", // Đặt border-radius thành 50% để tạo hình tròn
                  padding: 10,
                  backgroundColor: "white",
                }}
              >
                <WebIcon color="rgb(87, 94, 253)" />
              </div>
              <span
                style={{
                  marginTop: "5px",
                  fontFamily:
                    "Noto Sans Vietnamese,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif",
                  fontSize: "13px",
                  color: "white",
                  fontWeight: 600,
                }}
              >
                Thiệp chúc mừng
              </span>
            </Link>
          </li>
          <li style={{}}>
            <Link
              to="/"
              style={{
                display: "flex",
                textDecoration: "none",
                width: "100%",
                alignItems: "center",
                paddingLeft: 10,

                fontSize: "16px",
                color: "rgb(13, 18, 22)",
                lineHeight: "22px",
                flexDirection: "column",
              }}
            >
              {/* <SpaceDashboardOutlinedIcon style={{ marginRight: 5 }} /> */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 45, // Đặt chiều rộng và chiều cao cùng một giá trị để tạo hình tròn
                  height: 45,
                  borderRadius: "50%", // Đặt border-radius thành 50% để tạo hình tròn
                  padding: 10,
                  backgroundColor: "white",
                }}
              >
                <FormatIcon color="rgb(255, 153, 0)" />
              </div>
              <span
                style={{
                  marginTop: "5px",
                  fontFamily:
                    "Noto Sans Vietnamese,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif",
                  fontSize: "13px",
                  color: "white",
                  fontWeight: 600,
                }}
              >
                Sự kiện
              </span>
            </Link>
          </li>
          <li style={{}}>
            <Link
              to="/"
              style={{
                display: "flex",
                textDecoration: "none",
                width: "100%",
                alignItems: "center",
                paddingLeft: 10,

                fontSize: "16px",
                color: "rgb(13, 18, 22)",
                lineHeight: "22px",
                flexDirection: "column",
              }}
            >
              {/* <FolderOutlinedIcon style={{ marginRight: 5 }} /> */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 45, // Đặt chiều rộng và chiều cao cùng một giá trị để tạo hình tròn
                  height: 45,
                  borderRadius: "50%", // Đặt border-radius thành 50% để tạo hình tròn
                  padding: 10,
                  backgroundColor: "white",
                }}
              >
                <MoreIcons color="rgb(104, 62, 212)" />
              </div>
              <span
                style={{
                  marginTop: "5px",
                  fontFamily:
                    "Noto Sans Vietnamese,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif",
                  fontSize: "13px",
                  color: "white",
                  fontWeight: 600,
                }}
              >
                Xem thêm
              </span>
            </Link>
          </li>
        </ul>
        <div
          style={{
            transform:
              "matrix(-0.707107, 0.707107, -0.707107, -0.707107, 40, 2)",
            backgroundColor: "white",
            width: 16,
            height: 16,
            position: "absolute",
            bottom: 0,
            marginBottom: "-7px",
            transition: "left 0.3s",
            left: indicatorPosition.left,
          }}
        ></div>
      </Box>
      <Outlet />
    </Main>
  );
}

export default Dashboard;
