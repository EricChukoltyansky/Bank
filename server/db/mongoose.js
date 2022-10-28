const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../../.env") });

const uri = process.env.MONGODB_URI;
console.log(uri);

mongoose.connect(uri, () => console.log("Connected"));
