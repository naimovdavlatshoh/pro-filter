import axios from "axios";
import { useEffect } from "react";

export const BASE_URL = "https://pro-filter.ibosh-dev.uz/api/";

export const Token = localStorage.getItem("token");

export const GetData = async (url) => {
    const response = await axios.get(BASE_URL + url);
    return response.data;
};
