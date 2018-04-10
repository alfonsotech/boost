import React, { Component } from 'react'
import './Job.css'

class Job extends Component {
  constructor(props) {
    super(props)
    this.state = {
      _id: '',
      title: '',
      location: '',
      description: '',
      listingUrl: '',
      remote: null,
      notes: '',
      company: '',
      companyUrl: '',
      companyLogo: ''
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
      remote: job.remote,
      notes: job.notes,
      company: job.company,
      companyUrl: job.companyUrl,
      companyLogo: job.companyLogo
    })
  }

  render() {
    return (
      <li className="Job">
        <div className="home-info">
          <h3 className="title">{this.state.title}</h3>
          <h5 className="company">{this.state.company}<span> | {this.state.location}</span></h5>
          <p className="description">{this.state.description}</p>
        </div>
        <div className="home-buttons">
          <button type="submit">History</button>
          <button type="submit">Contacts</button>
          <button type="submit">Notes</button>
          <button type="submit">Delete</button>
        </div>
      </li>
    )
  }
}

export default Job
