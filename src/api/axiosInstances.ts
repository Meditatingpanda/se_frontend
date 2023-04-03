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
