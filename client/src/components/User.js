import React, { useState } from "react";
// import api from "../api/Api";
import axios from "axios";

const User = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cash, setCash] = useState(0);
  const [credit, setCredit] = useState(0);
  const clickHandle = async () => {
    try {
      await axios.post("http://localhost:5000/api/user", {
        name: name,
        mobile: mobile,
        email: email,
        password: password,
        cash: cash,
        credit: credit,
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      {console.log(name, mobile, email, password)}
      <h1>Create Account</h1>
      <div>
        <label htmlFor="name">Name: </label>
        <input onChange={(e) => setName(e.target.value)} type="text" />
      </div>
      <div>
        <label htmlFor="mobile">Mobile: </label>
        <input onChange={(e) => setMobile(e.target.value)} type="text" />
      </div>
      <div>
        <label htmlFor="name">Email: </label>
        <input onChange={(e) => setEmail(e.target.value)} type="text" />
      </div>
      <div>
        <label htmlFor="name">Password: </label>
        <input onChange={(e) => setPassword(e.target.value)} type="text" />
      </div>
      <div>
        <label htmlFor="name">Cash: </label>
        <input onChange={(e) => setCash(e.target.value)} type="text" />
      </div>
      <div>
        <label htmlFor="name">Credit: </label>
        <input onChange={(e) => setCredit(e.target.value)} type="text" />
      </div>
      <button onClick={clickHandle}>Create</button>
    </>
  );
};

export default User;
