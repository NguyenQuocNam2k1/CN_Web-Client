import axios from "axios";

export default axios.create({
  // baseURL:"https://cn-web.herokuapp.com"
  baseURL:"http://localhost:5000",
  // baseURL: "https://ebc3-117-7-155-144.ngrok.io", 
  // headers: {
  //   "x-apikey": "59a7ad19f5a9fa0808f11931",
  //   "Access-Control-Allow-Origin": "*",
  //   "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  // },
});
