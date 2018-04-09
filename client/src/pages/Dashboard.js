import React, { Component } from "react";
import axios from 'axios'
// import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
// import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import './Dashboard.css';

class Dashboard extends Component {
  constructor() {
    super()
    this.state = {
      title: '',
      company: '',
      location: '',
      description: '',
      url: ''
    }
  }

  componentWillMount = () => {
    axios.get('/api/jobs')
    .then( (response) => {
      console.log('response', response);
    })
      .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return (
      <MuiThemeProvider>
      <div className="Dashboard">
        <div className="dashboard-info">
          <h3 className="title">{this.state.title}Title</h3>
          <h5 className="company">{this.state.company}Company Name<span>{this.state.location}</span></h5>
          <p className="description">Description{this.state.description}</p>
        </div>
        <div className="dashboard-buttons">
          <button type="submit">History</button>
          <button type="submit">Contacts</button>
          <button type="submit">Notes</button>
          <button type="submit">Delete</button>
        </div>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default Dashboard;
