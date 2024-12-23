import axios from "axios";
import { COSBaseURL } from "./API";

// export const BaseURL = "https://cosmos-be.vercel.app/";
// export const BaseURL = "https://be.dunesofcosmos.com/";

export const instance = axios.create({
  baseURL: COSBaseURL,
});

export const clientGET = (url) => {
  return async () => {
    try {
      let response = await instance.get(url);
      return response.data;
    } catch (error) {
      console.log("clienterror", error);
      return error.message;
    }
  };
};
export const clientPOST = (url) => {
  return async (data) => {
    try {
      let response = await instance.post(url, data);
      return response.data;
    } catch (error) {
      return error;
    }
  };
};
