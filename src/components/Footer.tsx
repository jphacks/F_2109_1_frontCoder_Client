import { VFC, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import getScore from "../api/getScore";
import closeProblem from "../api/closeProblem";
import uploadFile from "../api/uploadFile";

// import htmlFile from "../../public/sample-code/index.html";
//import cssFile from "../../public/sample-code/index.html";

const Footer: VFC = () => {
  const submitCode = async () => {
    console.info("/v0.1.0/upload");
    const req1 = {
      source_code: {
        dirName: "/",
        file: [
          {
            fileName: "index.html",
            code: "<h1>プレビュー</h1>",
          },
        ],
        dir: [
          {
            dirName: "/src",
            file: [
              {
                fileName: "style.css",
                code: "/*cssをここに書いてね*/",
              },
            ],
          },
        ],
      },
    };
    try {
      const { url } = await uploadFile(req1);
      console.info(url);
    } catch (e) {
      console.error(e);
    }

    console.info("/v0.1.0/imgScore");
    const req2 = {
      url: "https://dev.d2evtgvttl8fuv.amplifyapp.com/p1.png",
    };
    try {
      const { imgScore } = await getScore(req2);
      console.info(imgScore);
    } catch (e) {
      console.error(e);
    }

    console.info("/v0.1.0/close");

    const req3 = {
      id: "9a1ics",
    };
    try {
      const { message } = await closeProblem(req3);
      console.info(message);
    } catch (e) {
      console.error(e);
    }
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
