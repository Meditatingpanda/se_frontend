import {
  Box,
  Button,
  Card,
  CircularProgress,
  TextField,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { isLoginRegister } from "../state/auth";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import { useState } from "react";
import useToast from "../hooks/useToast";
import { registerUser } from "../api/axiosInstances";
function Register() {
  const setNavbar = isLoginRegister((state: any) => state.setState);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const [loading, setLoading] = useState(false);
  const { notify, ToastContainer } = useToast();
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const { name, email, phone, password, confirmPassword } = form;
    if (password !== confirmPassword) {
      notify("Passwords do not match", "error");
      return;
    }

    setLoading(true);
    const data = await registerUser(name, email, phone, password);
    console.log("register", data?.response?.status);
    setLoading(false);
    if ( data?.response?.status) {
      notify(data.message, "error");
      return;
    } 
    if (data.message) {
      notify(data.message, "success");
      setForm({
        name: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
      });
      return;
    }

    console.log(data);
  };

  setNavbar(false);
  return (
    <div className="Register">
      <ToastContainer />
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
            width: 300,
            marginLeft: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: 3,
            gap: 4,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
            fontWeight={400}
          >
            Register Here! <VpnKeyIcon />
          </Typography>
          <Box
            onSubmit={(e) => handleSubmit(e)}
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              width: "100%",
            }}
          >
            <TextField
              label="Name"
              type="text"
              name="name"
              onChange={(e) => handleChange(e)}
              variant="outlined"
              required
            />
            <TextField
              label="Email"
              name="email"
              type="email"
              onChange={(e) => handleChange(e)}
              variant="outlined"
              required
            />
            <TextField
              label="Phone"
              type="tel"
              variant="outlined"
              required
              name="phone"
              onChange={(e) => handleChange(e)}
            />
            <TextField
              label="Password"
              type="password"
              name="password"
              onChange={(e) => handleChange(e)}
              variant="outlined"
              required
            />
            <TextField
              label="Confirm Password"
              type="password"
              onChange={(e) => handleChange(e)}
              name="confirmPassword"
              variant="outlined"
              required
            />
            <Button variant="contained" sx={{ width: "100%" }} type="submit">
              {loading ? (
                <CircularProgress
                  size={20}
                  sx={{
                    color: "white",
                  }}
                />
              ) : (
                "Register"
              )}
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
