import React, { useState, useEffect } from "react";
import { Navigation, Header, PrivateRoute } from "./components";
import { Welcome, Rsvp, Info, Event, Gallery, Login } from "./pages";
import { AuthContext } from "./context/auth";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(",")
  },
  palette: {
    primary: {
      main: "#265b6d"
    },
    secondary: {
      main: "#D3E4D4"
    }
  }
});

function App() {
  const existingTokens = JSON.parse(localStorage.getItem("tokens"));
  const [authTokens, setAuthTokens] = useState(existingTokens);

  useEffect(() => {
    if (existingTokens) {
      const { exp } = jwtDecode(existingTokens);
      const current_time = Date.now() / 1000;
      if (exp < current_time) {
        localStorage.clear();
        setAuthTokens(null);
      } 
    }
  }, []);

  const setTokens = data => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  };

  return (
    <ThemeProvider theme={theme}>
      <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
        <Router>
          <Header />
          <Navigation />
          <Switch>
            <Route path="/login" component={Login} />
            <PrivateRoute exact path="/" component={Welcome} />
            <PrivateRoute path="/event" component={Event} />
            <PrivateRoute path="/rsvp" component={Rsvp} />
            <PrivateRoute path="/info" component={Info} />
            <PrivateRoute path="/gallery" component={Gallery} />
          </Switch>
        </Router>
      </AuthContext.Provider>
    </ThemeProvider>
  );
}

export default App;
