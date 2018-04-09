import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
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
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/submit" component={Submit} />
        {/* <Route exact path="/edit" component={Edit} /> */}
        <Route component={NoMatch} />
      </Switch>
      <Footer />
    </div>
  </Router>

export default App
