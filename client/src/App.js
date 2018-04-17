import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import HomePage from "./pages/HomePage"
import MyJobs from "./pages/MyJobs"
import MyNetwork from "./pages/MyNetwork"
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
        <Route exact path="/" component={HomePage} />
        <Route exact path="/jobs" component={MyJobs} />
        <Route exact path="/network" component={MyNetwork} />
        <Route exact path="/submit" component={Submit} />
        <Route component={NoMatch} />
      </Switch>
      <Footer />
    </div>
  </Router>

export default App
