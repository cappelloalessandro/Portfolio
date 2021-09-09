import React from "react";
//Global Style
import GlobalStyle from "./components/GlobalStyle";
//Import Pages
import AboutMe from "./pages/AboutMe";
import ContactMe from "./pages/ContactMe";
import MyWork from "./pages/MyWork";
import Nav from "./components/Nav";
import SiteDetail from "./pages/SiteDetail";
//Router
import { Switch, Route, useLocation } from "react-router-dom";
//Animation
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <GlobalStyle />

      <Nav />

      <AnimatePresence exitBeforeEnter>

        <Switch location={location} key={location.pathname}>
        
          <Route path="/" exact>
            <AboutMe />
          </Route>

          <Route path="/work" exact>  
            <MyWork />
          </Route>

          <Route path="/work/:id">
            <SiteDetail />
          </Route>

          <Route path="/contact">
            <ContactMe />
          </Route>

        </Switch>

      </AnimatePresence>
    </div>
  );
}

export default App;
