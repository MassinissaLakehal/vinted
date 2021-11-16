import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { useState } from "react";
// import Cookies from "js-cookie";

import Header from "./components/Header";
import Home from "./containers/Home";
import Offer from "./containers/Offer";
import Signup from "./containers/Signup";
import Login from "./containers/Login";

const App = () => {
  // const [token, setToken] = useState(null);

  // const setUser = (token) => {
  //   Cookies.set("userToken", token);
  //   setToken(token);
  // };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offer/:id" element={<Offer />} />
        <Route path="/signup" element={<Signup /* setUser={setUser} */ />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
