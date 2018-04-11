import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
// import Toggle from 'material-ui/Toggle'
import axios from 'axios'
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
      newNotes: '',
      company: '',
      companyUrl: '',
      companyLogo: '',
      expanded: false
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

  handleExpandChange = (expanded) => {
    this.setState({expanded: expanded});
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

  handleDelete = () => {
    console.log('Delete button clicked')
    axios.delete('/api/jobs/' + this.state._id)
    this.props.history.push('/jobs')
  }

  // updateNotes = (event) => {
  //   event.preventDefault()
  //   const notes = this.state
  //   console.log('notes', notes)
  //   axios.put('/api/jobs/' + this.state._id, {notes: this.state.newNotes})
  // }
  //
  // handleInputChange = event => {
  //   const { name, value } = event.target
  //   this.setState({
  //     [name]: value
  //   })
  //   console.log('this.state.notes', this.state.notes)
  // }

  render() {
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

        {/* <CardTitle title="Card title" subtitle="Card subtitle" expandable={true} /> */}

        <CardText expandable={true}>
          <div className="description">
            {this.state.description}
          </div>
        </CardText>
        <CardText expandable={true}>
          <hr />
          <h4>Notes</h4>
          {this.state.notes}
        </CardText>
        <CardActions>
          <FlatButton
            type="submit" className="edit-notes-button" label="Edit" />
          <FlatButton
            type="submit" className="delete-button" label="Delete"
            onClick={this.handleDelete} />
          <FlatButton
            type="submit" className="network-button" label="Network" />
          {/* <FlatButton label="Expand" onClick={this.handleExpand} /> */}
          {/* <FlatButton label="Reduce" onClick={this.handleReduce} /> */}
        </CardActions>
      </Card>






      </li>
      </MuiThemeProvider>
    )
  }
}

export default Job
