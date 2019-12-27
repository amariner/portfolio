import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ThemeSwitch from "./components/ThemeSwitch/ThemeSwitch";
import ScrollToTop from "./utils/ScrollToTop";
import themeContext from "./context/themeContext";
import Vaiap from "./views/Vaiap";
import Dziecimamy from "./views/Dziecimamy";
import Playlist from "./views/Playlist";
import MyWebsite from "./views/MyWebsite";
import OldWebsite from "./views/OldWebsite";
import PageNotFound from "./views/PageNotFound";
import About from "./views/About";
import Home from "./views/Home";
import Novak from "./views/Novak";
import "./scss/App.scss";

export default function App() {
  const [theme, setTheme] = useState({
    name: "light",
    background: "white",
    color: "black",
    highlight: "#8ed6ff",
    grey: "lightgray"
  });
  useEffect(() => {
    document.body.style.backgroundColor = theme.background;
  }, [theme]);
  return (
    <themeContext.Provider value={{ theme, setTheme }}>
      <div className="App" style={{ color: theme.color }}>
        <div className="wrapper">
          <ThemeSwitch />
          <Router>
            <ScrollToTop />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/vaiap" component={Vaiap} />
              <Route path="/dziecimamy" component={Dziecimamy} />
              <Route path="/playlist" component={Playlist} />
              <Route path="/oldwebsite" component={OldWebsite} />
              <Route path="/mywebsite" component={MyWebsite} />
              <Route path="/novak" component={Novak} />
              <Route path="/about" component={About} />
              <Route component={PageNotFound} />
            </Switch>
          </Router>
        </div>
      </div>
    </themeContext.Provider>
  );
}
