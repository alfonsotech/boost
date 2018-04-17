import React, { Component } from 'react'
import FlatButton from 'material-ui/FlatButton'
import './JobListing.css'

class JobListing extends Component {
  constructor(props) {
    super(props)
    this.state = {
      jobkey: '',
      title: '',
      location: '',
      description: '',
      listingUrl: '',
      company: '',
      formattedRelativeTime: '',
      visibility: true
    }
  }

  componentDidMount = () => {
    const { job } = this.props
    this.setState({
      jobkey: job.jobkey,
      title: job.jobtitle,
      location: job.city,
      description: job.snippet,
      listingUrl: job.url,
      company: job.company,
      formattedRelativeTime: job.formattedRelativeTime
    })
  }

  handleInputChange = event => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  handleAddJob = () => {
    console.log('add to myJobs button clicked')
    //make post request to create job in DB
  }

  handleHideJob = () => {
    console.log('this', this);
    console.log('hide job fromview clicked')
    this.setState({
      visibility: false
    })
    // this.props.history.push('/')
  }

  render() {
    let visibility = this.state.visibility
    if(visibility){
      return (
        <li key={this.state.jobkey}>
          <a href={this.state.listingUrl} target="_blank"><p>{this.state.title} <span><small>({this.state.formattedRelativeTime})</small></span></p></a>
          <p key={this.state.company}>{this.state.company}<span> | {this.state.location}</span></p>
          <p>{this.state.description}</p>
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
    }
  }
}

export default JobListing
