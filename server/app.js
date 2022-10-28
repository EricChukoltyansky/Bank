const express = require("express");
const userRouter = require("./routers/user");
require("./db/mongoose");
const cors = require("cors");
const path = require("path");
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
// const contentSecurityPolicy = require("helmet-csp");

const app = express();
const port = process.env.PORT || 5000;

//

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const publicPath = path.join(__dirname, "../client/build");
app.use(express.static(publicPath));
//

app.use(userRouter);

app.get("*", (req, res) => {
  res.sendFile(path.resolve(publicPath, "index.html"));
});

app.listen(port, () => {
  console.log("listening on port " + port);
});
