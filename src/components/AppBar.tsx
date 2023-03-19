import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";

import Image from "next/image";
import logo from "../../public/Raggruppa 9035.png";

import avatar from "../../public/avatar.png";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
  return (
    <AppBar elevation={0} position="static" sx={{ bgcolor: "#FFFFFF" }}>
      <Box>
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1 }}>
            <Image src={logo} alt="logo" />
          </Box>
          <Box sx={{ flexGrow: 0, mr: "30px" }}>
            <Stack direction="row" spacing={2}>
              <Stack>
                <Typography color="#2A3948" variant="body2">
                  Alessandro,
                </Typography>
                <Typography color="#2A3948" variant="caption">
                  Admin
                </Typography>
              </Stack>
              <Tooltip title="Apri menù">
                <IconButton sx={{ p: 0 }}>
                  <Avatar />
                </IconButton>
              </Tooltip>
            </Stack>
          </Box>
        </Toolbar>
      </Box>
    </AppBar>
  );
}
export default ResponsiveAppBar;
