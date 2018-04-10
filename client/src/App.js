import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from "./pages/Home"
import Jobs from "./pages/Jobs"
import Network from "./pages/Network"
import Submit from "./pages/Submit"
// import Edit from "./pages/Edit"
import Footer from './components/Footer'
import Navigation from "./components/Navigation"
import NoMatch from "./pages/NoMatch"

const App = () =>
  <Router>
    <div>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/jobs" component={Jobs} />
        <Route exact path="/network" component={Network} />
        <Route exact path="/submit" component={Submit} />
        <Route component={NoMatch} />
      </Switch>
      <Footer />
    </div>
  </Router>

export default App
