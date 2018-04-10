import React, { Component } from 'react'
// import API from '../../utils/API'
import axios from 'axios'
import './Submit.css'


class Submit extends Component {
  constructor() {
    super()
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

  handleInputChange = event => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
    // console.log('this.state inside handleInputChange', this.state);
  }

  handleFormSubmit = event => {
    event.preventDefault()
    const {title, location, description, listingUrl, remote, notes, company, companyUrl, companyLogo} = this.state

    axios.post('/api/jobs', {title, location, description, listingUrl, remote, notes, company, companyUrl, companyLogo})
    .then( job => {
            console.log('form submitted, the following job was added:', job)
            this.setState({
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
            this.props.history.push('/')
          });
  }

  render() {
    // console.log('this.props', this.props);
    return (
      <div className="Submit">
        <h1>Submit Job Listing</h1>
        <form onSubmit={this.handleFormSubmit}>
          <div className="form-group submit-inputs">
            <div>
              <h4>
                <strong>Title</strong>
              </h4>
              <input
                className="form-control"
                type="text"
                value={this.state.title}
                name="title"
                placeholder='Job title'
                onChange={this.handleInputChange}
                required
              />

              <h4>
                <strong>Listing Url</strong>
              </h4>
              <input
                className="form-control"
                type="text"
                value={this.state.listingUrl}
                name="listingUrl"
                placeholder='Listing Url'
                onChange={this.handleInputChange}
              />

              <h4>
                <strong>Location</strong>
              </h4>
              <input
                className="form-control"
                type="text"
                value={this.state.location}
                name="location"
                placeholder='Location'
                onChange={this.handleInputChange}
              />

              <h4>
                <strong>Description</strong>
              </h4>
              <textarea
                className="form-control"
                type="text"
                value={this.state.description}
                name="description"
                placeholder='Description'
                onChange={this.handleInputChange}
              />
            </div>
            <div>
              <h4>
                <strong>Company Name</strong>
              </h4>
              <input
                className="form-control"
                type="text"
                value={this.state.company}
                name="company"
                placeholder='Company Name'
                onChange={this.handleInputChange}
              />

              <h4>
                <strong>Company Url</strong>
              </h4>
              <input
                className="form-control"
                type="text"
                value={this.state.companyUrl}
                name="companyUrl"
                placeholder='Company Url'
                onChange={this.handleInputChange}
              />

              <h4>
                <strong>Company Logo</strong>
              </h4>
              <input
                className="form-control"
                type="text"
                value={this.state.companyLogo}
                name="companyLogo"
                placeholder='Company Logo'
                onChange={this.handleInputChange}
              />

              <h4>
                <strong>Notes</strong>
              </h4>
              <textarea
                className="form-control"
                type="text"
                value={this.state.notes}
                name="notes"
                placeholder='Notes'
                onChange={this.handleInputChange}
              />
            </div>
          </div>

          <div className="text-center">
            <br />
            <button type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default Submit
