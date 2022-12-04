import axios from "axios";
import { getUrl } from "./utils/utils";

export function setAxiosDefault() {
  console.log("api url=", getUrl());
  axios.defaults.timeout = 30 * 1000;
  axios.defaults.baseURL = getUrl();
  axios.defaults.headers.common["Content-Type"] = "application/json";
  axios.defaults.headers.common["Accept"] = "application/json";
}