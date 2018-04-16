import React, { Component } from 'react'
import Dialog from 'material-ui/Dialog'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
// import Toggle from 'material-ui/Toggle'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import axios from 'axios'
import JobState from '../../components/JobState'
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

  handleExpandChange = (expanded) => {
    this.setState({expanded: expanded})
  }

  handleToggle = (event, toggle) => {
    this.setState({expanded: toggle})
  }

  handleExpand = () => {
    this.setState({expanded: true})
  }

  handleReduce = () => {
    this.setState({expanded: false})
  }
  handleOpen = () => {
    this.setState({open: true})
  }

  handleClose = () => {
    this.setState({open: false})
  }
  handleInputChange = event => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  handleFormSubmit = event => {
    event.preventDefault()
    const {title, location, description, listingUrl, jobState, notes, company, companyUrl, companyLogo} = this.state
    axios.put('/api/jobs/' + this.state._id,  {title, location, description, listingUrl, jobState, notes, company, companyUrl, companyLogo})
    .then( data => {
            console.log('form submitted, the following resource was edited:', data)
          })
          this.props.history.push('/jobs')
  }

  handleDelete = () => {
    console.log('Delete button clicked')
    if(window.confirm('Are you sure you wish to delete this item?')) {
      axios.delete('/api/jobs/' + this.state._id)
    }
    this.props.history.push('/jobs')
  }

  render() {
    const jobState = this.state.jobState

    if(jobState !== "rejection") {
      return (
        <MuiThemeProvider>
        <li className="Job">
          <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
          <CardHeader
            title={this.state.company}
            subtitle={this.state.title}
            avatar={this.state.companyLogo}
            actAsExpander={true}
            showExpandableButton={true}
          />

          <CardText expandable={true}>
            <div className="job-state">
              <JobState id={this.state._id} jobState={this.state.jobState} />
            </div>
          </CardText>
          <CardText expandable={true}>
            <div className="description">
              <h4>Description</h4>
              {this.state.description}
            </div>
          </CardText>
          <CardText expandable={true}>
            <h4>Notes</h4>
            {this.state.notes}
          </CardText>
          <CardActions className="job-actions">
            <FlatButton
              type="submit" className="job-action-button" label="Edit" onClick={this.handleOpen} />
            <FlatButton
              type="submit" className="job-action-button" label="Delete"
              onClick={this.handleDelete} />
            <FlatButton
              type="submit" className="job-action-button" label="Network" />
          </CardActions>
        </Card>

        <Dialog
          title="Edit Job"
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
          autoScrollBodyContent={true}
          >
            <div className="edit-resource">
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
                <div className="pull-right">
                  <FlatButton
                    type="text"
                    label="Submit"
                    onClick={this.handleClose}
                   />
                </div>
              </form>
            </div>
          </Dialog>
        </li>
        </MuiThemeProvider>
      )
    } else {
      return null
    }

  }
}

export default Job
