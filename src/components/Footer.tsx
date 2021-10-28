import { VFC, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import getScore from "../api/getScore";
import closeProblem from "../api/closeProblem";

const Footer: VFC = () => {
  const submitCode = async () => {
    console.info("/v0.1.0/imgScore");
    const req = {
      url: "https://dev.d2evtgvttl8fuv.amplifyapp.com/p1.png",
    };
    const { imgScore } = await getScore(req);
    console.info(imgScore);

    console.info("/v0.1.0/close");

    const req2 = {
      id: "9a1ics",
    };
    const { message } = await closeProblem(req2);
    console.info(message);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          top: "auto",
          bottom: 0,
        }}
        style={{
          backgroundColor: "#FFFFFF",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            style={{ backgroundColor: "#F87896", color: "#FFFFFF" }}
            onClick={submitCode}
          >
            提出
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Footer;
