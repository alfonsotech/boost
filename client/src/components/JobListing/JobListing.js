import React, { Component } from 'react'
// import Dialog from 'material-ui/Dialog'
// import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
// import Toggle from 'material-ui/Toggle'
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import axios from 'axios'
// import JobState from '../../components/JobState'
import './JobListing.css'

class Job extends Component {
  constructor(props) {
    super(props)
    this.state = {
      _id: '',
      title: '',
      location: '',
      description: '',
      listingUrl: '',
      jobState: '',
      notes: '',
      company: '',
      companyUrl: '',
      companyLogo: '',
      expanded: false,
      open:false
    }
  }

  componentDidMount = () => {
    const { job } = this.props
    this.setState({
      _id: job._id,
      title: job.title,
      location: job.location,
      description: job.description,
      listingUrl: job.listingUrl,
      jobState: job.jobState,
      notes: job.notes,
      company: job.company,
      companyUrl: job.companyUrl,
      companyLogo: job.companyLogo
    })
  }

  handleInputChange = event => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  handleDelete = () => {
    console.log('Delete button clicked')
    if(window.confirm('Are you sure you wish to delete this item?')) {
      axios.delete('/api/jobs/' + this.state._id)
    }
    this.props.history.push('/jobs')
  }

  render() {
    return (

      <li className="Job">
      </li>

      )


  }
}

export default Job
