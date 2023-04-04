import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:4000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export const fetchTrains = async ({
  from,
  to,
  formattedDate,
}: {
  from: string;
  to: string;
  formattedDate?: string;
}) => {
  const response = await axiosInstance.get("/search", {
    params: {
      from,
      to,
      date: formattedDate,
    },
  });
  return response.data;
};

export const loginUser = async (email: string, password: string) => {
  try {
    const response = await axiosInstance.post("/login", {
      email,
      password,
    });

    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const registerUser = async (
  name: string,
  email: string,
  phone: string,
  password: string
) => {
  try {
    const response = await axiosInstance.post("/register", {
      email,
      password,
      name,
      phone,
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
