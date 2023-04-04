import {
  Box,
  Button,
  Card,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import { useTrainStore } from "../state/trainStore";
import { TrainProps } from "../types/trainProps";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";

const Payment = () => {
  const params = useParams();
  const { id } = params;
  const [gender, setGender] = React.useState<string | null>(null);
  const [paymentDetails, setPaymentDetails] = React.useState({
    cvc: "",
    expiry: "",
    focus: "",
    name: "",
    number: "",
  });

  const handleInputFocus = (e: any) => {
    setPaymentDetails({ ...paymentDetails, focus: e.target.name });
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;

    setPaymentDetails({ ...paymentDetails, [name]: value });
  };

  const trainStore: any = useTrainStore();
  const trains = trainStore.trains;
  const train = trains.find((train: any) => train.train_base.train_no === id);

  return (
    <div>
      {/* Train Detail Card */}
      <Typography
        variant="h6"
        mt={3}
        fontWeight={200}
        sx={{ textAlign: "center" }}
      >
        Train Details
      </Typography>
      <Card elevation={3} sx={{ width: "80%", margin: "auto", mt: 3, p: 1 }}>
        {/* Train Detail Card Content */}

        <Typography variant="h6" fontWeight={200}>
          {train?.train_base.train_name} {id}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 2,
            m: 1,
          }}
        >
          <Box>
            {train?.train_base.from_time} | {train?.train_base.from_stn_name}
          </Box>
          <Box>{train?.train_base.travel_time}</Box>
          <Box>
            {train?.train_base.to_time} | {train?.train_base.dstn_stn_name}
          </Box>
        </Box>
        <Box>Borading Station: {train?.train_base.from_stn_code}</Box>
      </Card>
      {/* Passenger Details */}
      <Typography
        variant="h6"
        mt={3}
        fontWeight={200}
        sx={{ textAlign: "center" }}
      >
        Passenger Details
      </Typography>
      {/* make a card to take passenger input */}

      {/* Passenger Details Card */}
      <Box
        component={"form"}
        sx={{
          display: "flex",
          alignItems: "center",
          width: "80%",
          margin: "auto",
        }}
      >
        <TextField label="Name" variant="outlined" sx={{ m: 1 }} type="text" />
        <TextField label="Age" variant="outlined" sx={{ m: 1 }} type="number" />
        <FormControl>
          <InputLabel id="demo-simple-select-label">Gender</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={gender}
            label="Gender"
            sx={{
              width: "10rem",
              height: "3.5rem",
            }}
            onChange={(e) => setGender(e.target.value)}
          >
            <MenuItem value={"Male"}>Male</MenuItem>
            <MenuItem value={"Female"}>Female</MenuItem>
            <MenuItem value={"Other"}>Other</MenuItem>
          </Select>
        </FormControl>
        <IconButton
          sx={{
            width: "2rem",
            height: "2rem",
            m: 1,
            backgroundColor: "primary.main",
            color: "white",
            "&:hover": {
              backgroundColor: "primary.dark",
            },
          }}
        >
          <Typography variant="h6" fontWeight={200}>
            +
          </Typography>
        </IconButton>
      </Box>

      {/* Payment Form */}
      <Typography
        variant="h6"
        mt={3}
        fontWeight={200}
        sx={{ textAlign: "center" }}
      >
        Payment Details
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: "80%",
        }}
      >
        <Cards
          cvc={paymentDetails.cvc}
          expiry={paymentDetails.expiry}
          name={paymentDetails.name}
          number={paymentDetails.number}
        />
        <Box
          component={"form"}
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "30%",
          }}
        >
          <TextField
            label="Card Number"
            variant="outlined"
            sx={{ m: 1 }}
            type="number"
            name="number"
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
          <TextField
            label="Name"
            variant="outlined"
            sx={{ m: 1 }}
            type="text"
            name="name"
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
          <TextField
            label="Expiry"
            variant="outlined"
            sx={{ m: 1 }}
            type="text"
            name="expiry"
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
          <TextField
            label="CVC"
            variant="outlined"
            sx={{ m: 1 }}
            type="number"
            name="cvc"
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
        </Box>
      </Box>
      <Box sx={{
          display: "flex",
          justifyContent: "center",

      }}>
        <Button variant="contained">Book Your Ticket</Button>
      </Box>
    </div>
  );
};

export default Payment;
