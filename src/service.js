import axios from "axios";
import { useEffect } from "react";

export const BASE_URL = "http://89.169.47.171:1001/api/";

export const Token = localStorage.getItem("token");

export const GetData = async (url) => {
    const response = await axios.get(BASE_URL + url);
    return response.data;
};
