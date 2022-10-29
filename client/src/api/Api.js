import axios from "axios";

// let myUrl = "http://localhost:5000/api/"; //development


 const myUrl = "api";

export default axios.create({
  baseURL: myUrl,
});
