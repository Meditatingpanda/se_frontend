import { Box, Button, Card, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { isLoginRegister } from "../state/auth";

function Register() {
  const setNavbar = isLoginRegister((state: any) => state.setState);
  setNavbar(false);
  return (
    <div className="Register">
      <Box
        sx={{
          minHeight: "calc(100vh - 64px)",
          backgroundImage:
            "url(https://www.newsclick.in/sites/default/files/2019-06/ir_0.PNG)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Card
          sx={{
            height: "fit-content",
            width: 400,
            marginLeft: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: 3,
            gap: 4,
          }}
        >
          <Typography variant="h4" fontWeight={400}>
            Register Here!
          </Typography>
          <Box
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              width: "100%",
            }}
          >
            <TextField label="Name" type="text" variant="outlined" required />
            <TextField label="Email" type="email" variant="outlined" required />
            <TextField label="Phone" type="tel" variant="outlined" required />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              required
            />
            <TextField
              label="Confirm Password"
              type="password"
              variant="outlined"
              required
            />
            <Button variant="contained" sx={{ width: "100%" }} type="submit">
              Register
            </Button>
          </Box>
          <Typography variant="body2" fontWeight={400}>
            Already have an account? <Link to="/login">Login</Link>
          </Typography>
        </Card>
      </Box>
    </div>
  );
}

export default Register;
