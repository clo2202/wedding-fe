import React from "react";
import { Navigation, Header } from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Welcome, Rsvp, Info, Event, Gallery } from "./pages";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(",")
  },
  palette: {
    primary: {
      main: "#265b6d",
    },
    secondary: {
      main: '#D3E4D4',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <Navigation />
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route path="/event" component={Event} />
          <Route path="/rsvp" component={Rsvp} />
          <Route path="/info" component={Info} />
          <Route path="/gallery" component={Gallery} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
