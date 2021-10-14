import React, { useEffect, useState } from "react";
import Router from "./Router";
import { useHistory } from "react-router-dom";
function App() {
  const [JwtToken, setJwtToken] = useState("");

  const history = useHistory();

  useEffect(() => {
    const checkLoginuser = () => {
      let token = window.localStorage.getItem("authorization");
      if (!token) {
        window.localStorage.setItem("authorization", false);
      }
    };
    checkLoginuser();
  }, []);
  return <Router />;
}

export default App;
