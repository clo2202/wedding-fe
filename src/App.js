import React, { useState } from "react";
import { Navigation, Header, PrivateRoute } from "./components";
import { Welcome, Rsvp, Info, Event, Gallery, Login } from "./pages";
import { AuthContext } from "./context/auth";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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

  const setTokens = data => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data)
  }

  return (
    <ThemeProvider theme={theme}>
      <AuthContext.Provider value={{authTokens, setAuthTokens: setTokens}}>
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
