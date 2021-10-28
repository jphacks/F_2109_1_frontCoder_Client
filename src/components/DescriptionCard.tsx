import React, { VFC } from "react";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";

const DescriptionCard: VFC = () => {
  const drawerWidth = 240;

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: "auto" }}>
        <h1>概要</h1>
        <Divider />
        <h3>メメメメめっメメめっめめっめめっめ</h3>
      </Box>
    </Drawer>
  );
};

export default DescriptionCard;
