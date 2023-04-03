import { Box, Button, Card, Typography } from "@mui/material";
import React from "react";
import TrainIcon from "@mui/icons-material/Train";
import { TrainProps } from "../types/trainProps";
const TrainCard = (props: TrainProps) => {
  console.log(props, "train card");
  return (
    <Card
      elevation={3}
      sx={{
        width: "fit-content",
        margin: "auto",
        mt: 3,
      }}
    >
      <Box
        sx={{
          height: "fit-content",
          p: 2,
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        <TrainIcon />
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <Typography variant="h6" fontWeight={400}>
            Train Name {props.train_name}
          </Typography>
          <Typography variant="subtitle2" fontWeight={400}>
            Train Number {props.train_no}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <Typography variant="h6" fontWeight={400}>
            From {props.from_stn_code}
          </Typography>
          <Typography variant="subtitle2" fontWeight={400}>
            Departure Time {props.to_time}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <Typography variant="h6" fontWeight={400}>
            To {props.to_stn_code}
          </Typography>
          <Typography variant="subtitle2" fontWeight={400}>
            Arrival Time {props.to_time}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <Typography variant="h6" fontWeight={400}>
            Duration {props.travel_time}
          </Typography>
          <Typography variant="subtitle2" fontWeight={400}>
            Distance 250km
          </Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <Typography variant="h6" fontWeight={400}>
            Classes
          </Typography>
          <Typography variant="subtitle2" fontWeight={400}>
            Fare
          </Typography>
        </Box>
        <Button variant="contained">Book</Button>
      </Box>
    </Card>
  );
};

export default TrainCard;
