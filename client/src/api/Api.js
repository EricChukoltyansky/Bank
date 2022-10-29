import axios from "axios";

let myUrl = "http://localhost:5000/api/"; //development

if (process.env.NODE_ENV === "production") {
  myUrl = "api";
}

console.log(myUrl);

export default axios.create({
  baseURL: myUrl,
});
