import React, { Component } from "react";
import axios from 'axios'
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import './HomePage.css';

class HomePage extends Component {
  constructor() {
    super()
    this.state = {
      jobs: []
    }
  }

  componentWillMount = () => {
    let count = 0
    axios.get('https://api.indeed.com/ads/apisearch?publisher=7094754948491444&format=json&q=javascript&l=miami%2C+fl&sort=&radius=&st=&jt=&start=&limit=&fromage=&filter=&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2')
    .then( response => {
      console.log('response.data.results', response.data.results);
      this.setState({
        jobs:response.data.results
      })
    })
      .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return (
          <div className="HomePage">
            <ol className="job-listing">
            {this.state.jobs.map( (job, i) => {
                  return (
                  <li key={job.jobkey}>
                    <a href={job.url} target="_blank"><p>{job.jobtitle}</p></a>
                    <p key={job.company}>{job.company}<span> | {job.city}</span></p>
                    <p>{job.snippet}</p>
                  </li>
                )
            })
          }
        </ol>
          </div>
    )
  }
}

export default HomePage;
