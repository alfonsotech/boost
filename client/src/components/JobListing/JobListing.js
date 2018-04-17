import React, { Component } from 'react'
import FlatButton from 'material-ui/FlatButton'
import axios from 'axios'
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
      formattedRelativeTime: ''
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

  // handleDelete = () => {
  //   console.log('Delete button clicked')
  //   if(window.confirm('Are you sure you wish to delete this item?')) {
  //     axios.delete('/api/jobs/' + this.state._id)
  //   }
  //   this.props.history.push('/jobs')
  // }

  render() {
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

export default JobListing
