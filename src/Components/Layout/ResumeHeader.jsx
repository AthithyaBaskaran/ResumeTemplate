import { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Image from "../../assets/images/athi.png";
import "../../assets/CSS/Header.css";
import HeaderBanner from "./ResumeBanner";
import { useNavigate } from "react-router-dom";

const pages = ["Dashboard", "Resume", "Templates", "Users", "Login", "SignUp"];   // ✅ ADD THIS LINE

const pageRoutes = {
  Dashboard: "/",
  Resume: "/resume_upload",
  Templates: "/resume_info",
  Users: "/user_details",
  Login: "/Login",
  SignUp: "/Register",
};

const settings = [
  { label: "Profile", image: <img src={Image} alt="Profile" width={30} style={{ borderRadius: "50%" }} /> },
  { label: "Account" },
  { label: "Logout" },
];

function ResumeHeader() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const [scrolled, setScrolled] = useState(false);

  const navigate = useNavigate();
  const openNav = (e) => setAnchorElNav(e.currentTarget);
  const openUser = (e) => setAnchorElUser(e.currentTarget);

  const closeNav = () => setAnchorElNav(null);
  const closeUser = () => setAnchorElUser(null);

  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // change color after 50px scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>

      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          width: "100%",
          px: 4,
          transition: "0.4s ease",
          backgroundColor: scrolled ? "#8f81ed" : "transparent",
          backdropFilter: scrolled ? "blur(6px)" : "none",
        }}
      >

        <Toolbar>

          {/* Desktop Logo */}
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 2 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              display: { xs: "none", md: "flex" },
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
              mr: 4,
            }}
          >
            Resume Builder
          </Typography>

          {/* Mobile Menu Button */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton size="large" color="inherit" onClick={openNav}>
              <MenuIcon />
            </IconButton>

            <Menu
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={closeNav}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              transformOrigin={{ vertical: "top", horizontal: "left" }}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={closeNav}
                  className={page === "Login" || page === "SignUp" ? "auth-menu-item" : ""}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              ))}

            </Menu>
          </Box>

          {/* Mobile Logo */}
          <Typography
            variant="h6"
            noWrap
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              fontWeight: 700,
            }}
          >
            Resume Builder
          </Typography>

          {/* Desktop Menu */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
            }}
          >

            {pages.map((page) => {
              const isAuth = page === "Login" || page === "SignUp";

              return (
                <Button
                  key={page}
                  onClick={() => {
                    closeNav();
                    navigate(pageRoutes[page]);   // ⭐ navigate to actual path
                  }}
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    paddingLeft: "40px",
                    ...(isAuth && {
                      background: "linear-gradient(135deg, #8f81ed, #b19bff)",
                      border: "none",
                      padding: "6px 18px",
                      borderRadius: "20px",
                      fontWeight: 600,
                      mx: 1,
                      boxShadow: "0px 3px 10px rgba(150, 120, 255, 0.4)",
                      transition: "0.3s",
                      "&:hover": {
                        transform: "translateY(-3px)",
                        boxShadow: "0px 6px 18px rgba(150, 120, 255, 0.6)",
                      },
                    }),
                  }}
                >
                  {page}
                </Button>
              );
            })}
          </Box>

          {/* Avatar Menu */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open Settings">
              <IconButton onClick={openUser} sx={{ p: 0 }}>
                <Avatar alt="User" src={Image} />
              </IconButton>
            </Tooltip>

            <Menu
              anchorEl={anchorElUser}
              open={Boolean(anchorElUser)}
              onClose={closeUser}
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              transformOrigin={{ vertical: "top", horizontal: "right" }}
            >
              {settings.map((item, index) => (
                <MenuItem key={index} onClick={closeUser}>
                  {item.image && (
                    <span style={{ marginRight: "10px" }}>
                      {item.image}
                    </span>
                  )}

                  <Typography textAlign="center">{item.label}</Typography>
                </MenuItem>
              ))}

            </Menu>
          </Box>

        </Toolbar>
      </AppBar>
      <HeaderBanner
        title="Our Cover Letter"
        subtitle="OUR COVER LETTER"
      />

    </>
  );
}

export default ResumeHeader;
