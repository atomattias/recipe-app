import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbars/Navbar.js";
import Login from "./pages/Login";
// config
import ROUTES from "./config/routes.js";
import Registration from "./pages/Registration.jsx";

function removeToken() {
  sessionStorage.removeItem("token");
}
// removeToken();
function setToken(userToken) {
  sessionStorage.setItem("token", JSON.stringify(userToken));
}

function getToken() {
  const tokenString = sessionStorage.getItem("token");
  const userToken = JSON.parse(tokenString);
  return userToken;
}

function App(props) {
  // const [token, setToken] = useState();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  let routes = null;
  const token = getToken();
  if (!token) {
    //   return <Login setToken={setToken} />;
    // }
    console.log("token", token);
    routes = (
      <Route>
        {/* <Login setToken={() => setIsAuthenticated(true)} /> */}
        <Switch>
          <Login
            setToken={(token) => setToken(token)}
            onLogin={() => {
              setIsAuthenticated(true);
            }}
          />
          <Registration />
        </Switch>
      </Route>
    );
  } else if (token) {
    routes = (
      <>
        {ROUTES.map((route) => (
          <Route path={route.path} exact component={route.component} />
        ))}
      </>
    );
  }

  return (
    <div className="wrapper bg-light pt-5">
      <Navbar {...props} />
      <div className="content">
        <Switch>{routes}</Switch>
      </div>
    </div>
  );
}

export default App;
