import axios from "axios";

export const BaseURL = "http://localhost:3000/";

export const instance = axios.create({
  baseURL: BaseURL,
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
