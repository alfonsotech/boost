import React from "react"
// import { Link } from "react-router-dom"
// import FontAwesome from 'react-fontawesome'
import { Nav, Navbar, NavItem } from 'react-bootstrap'
import "./Navigation.css"

const Navigation = () => (
  <Navbar collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="/">Job Search Platform <small>(beta)</small></a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
        <NavItem eventKey={1} href="/">
          Home
        </NavItem>
        <NavItem eventKey={2} href="/jobs">
          My Jobs
        </NavItem>
        <NavItem eventKey={3} href="/network">
          My Network
        </NavItem>
        <NavItem eventKey={4} href="/submit">
          Submit
        </NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Navigation;
