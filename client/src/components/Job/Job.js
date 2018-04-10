import React, { Component } from 'react'
import './Job.css'

class Job extends Component {
  constructor(props) {
    super(props)
    this.state = {
      _id: '',
      title: '',
      company: '',
      location: '',
      description: '',
      url: ''
    }
  }

  componentDidMount = () => {
    const { job } = this.props
    this.setState({
      _id: job._id,
      title: job.title,
      company: job.company,
      location: job.location,
      description: job.description,
      url: job.url
    })
  }

  render() {
    return (
      <li className="Job">
        <div className="home-info">
          <h3 className="title">{this.state.title}Title</h3>
          <h5 className="company">{this.state.company}Company Name<span>{this.state.location}</span></h5>
          <p className="description">Description{this.state.description}</p>
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
