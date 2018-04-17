import React, { Component } from "react"
import axios from 'axios'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import config from '../../utils/config.json'
import './HomePage.css'

class HomePage extends Component {
  constructor() {
    super()
    this.state = {
      jobs: [],
      publisher: '',
      count: 0,
      query:  '',
      location: '',
      url: ''
    }
  }

  componentWillMount = () => {
    let publisher = config.publisher
    let count = this.state.count
    let query = 'javascript'
    let location = 'florida'
    let url = 'https://api.indeed.com/ads/apisearch?publisher='+ publisher + '&format=json&q=' + query + '&l=' + location + '&sort=&radius=&st=&jt=&start= ' + count + '&limit=25&fromage=&filter=&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2'
    axios.get(url)
    .then( response => {
      console.log('response.data.results', response.data.results)
      this.setState({
        jobs:response.data.results
      })
      count += 25
      console.log('count: ',count)
    })
      .catch(function (error) {
      console.log(error)
    })
  }

  handleInputChange = event => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  handleSearch = (event) => {
    event.preventDefault()
    console.log('handle search submitted')
  }

  handleAddJob = () => {
    console.log('add to myJobs button clicked')
    //make post request to create job in DB
  }

  handleHideJob = () => {
    console.log('hide job fromview clicked')
  }



  render() {
    return (
      <MuiThemeProvider>
      <div className="HomePage">
        <form onSubmit={this.handleSearch}>
          <input
            className="form-control"
            type="text"
            value={this.state.query}
            name="query"
            placeholder='job title, keywords or company'
            onChange={this.handleInputChange}
            required
          />
          <input
            className="form-control"
            type="text"
            value={this.state.city}
            name="city"
            placeholder='city, state, or zip'
            onChange={this.handleInputChange}
            required
          />
          <RaisedButton
            type="submit"
            label="Search"
           />
        </form>
        <ol className="job-listing">
        {this.state.jobs.map( (job, i) => {
              return (
              <li key={job.jobkey}>
                <a href={job.url} target="_blank"><p>{job.jobtitle} <span><small>({job.formattedRelativeTime})</small></span></p></a>
                <p key={job.company}>{job.company}<span> | {job.city}</span></p>
                <p>{job.snippet}</p>
                <FlatButton
                  type="text"
                  label="Add To MyJobs"
                  onClick={this.handleAddJob}
                 />
                 <FlatButton
                   type="text"
                   label="Hide From View"
                   onClick={this.handleHideJob}
                  />
              </li>
            )
        })
      }
      </ol>
    </div>
  </MuiThemeProvider>
    )
  }
}

export default HomePage
