import { Box, Button, Card, TextField, Typography } from "@mui/material";

import LoginIcon from "@mui/icons-material/Login";
import { Link } from "react-router-dom";
import { isLoginRegister } from "../state/auth";
function Login() {
 const setNavbar=isLoginRegister((state:any)=>state.setState)
 setNavbar(false)
  return (
    <div className="Login">
      {/* <Navbar /> */}
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
            Login <LoginIcon />
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
            <TextField label="Email" type="email" variant="outlined" required />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              required
            />

            <Button variant="contained" sx={{ width: "100%" }} type="submit">
              Login
            </Button>
          </Box>
          <Typography variant="body2" fontWeight={400}>
            Don't have an account? <Link to="/register">Register</Link>
          </Typography>
        </Card>
      </Box>
    </div>
  );
}

export default Login;
