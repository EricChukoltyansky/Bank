import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Client from "./Clients";
import Nav from "./Nav";
import Transactions from "./Transactions";
import User from "./User";

const App = () => {
  console.log(process.env.NODE_ENV);
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Client />} />
          <Route exact path="/create" element={<User />} />
          <Route exact path="/:id" element={<Transactions />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
