import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";

const CustomCard = styled(Card)({
  borderRadius: 16,
});

// const MoneyTypography = styled(Typography)({
//   fontWeight: 800,
// });

const TitleTypography = styled(Typography)({
  fontWeight: 500,
  paddingBottom: 8,
});

const CardDivider = styled(Divider)({
  paddingTop: 16,
});

const MoneyBox = styled(Box)({
  paddingTop: 8,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});
export default function ActionAreaCard(props: {
  id: String;
  image: String;
  title: String;
  description: String;
  createdAt: Date;
}) {
  return (
    <CustomCard>
      <CardActionArea href={"https://google.com/" + props.id}>
        <CardMedia
          component="img"
          height="140"
          image="${props.image}"
          alt="green iguana"
        />
        <CardContent>
          <TitleTypography gutterBottom variant="h5" component="div">
            {props.title}
          </TitleTypography>
          <Typography variant="body2" color="text.secondary">
            {props.description}
          </Typography>
          <CardDivider light />
          <MoneyBox>
            {/* <MoneyTypography variant="h6" display="inline">
              $20,000
            </MoneyTypography> */}
            <Typography
              variant="body1"
              color="text.secondary"
              display="inline"
              align="right"
            >
              {console.log(props.createdAt)}
              {Math.round(
                (props.createdAt.getTime() - new Date().getTime()) /
                  (1000 * 60 * 60 * 24)
              )}{" "}
              days to go
            </Typography>
          </MoneyBox>
        </CardContent>
      </CardActionArea>
    </CustomCard>
  );
}
