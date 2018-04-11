import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import FlatButton from 'material-ui/FlatButton'
// import RaisedButton from 'material-ui/RaisedButton'
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



  handleDelete = () => {
    console.log('Delete button clicked');
    axios.delete('/api/jobs/' + this.state._id)
    this.props.history.push('/jobs')
  }

  // updateNotes = (event) => {
  //   event.preventDefault()
  //   const notes = this.state
  //   console.log('notes', notes);
  //   axios.put('/api/jobs/' + this.state._id, {notes: this.state.newNotes})
  // }
  //
  // handleInputChange = event => {
  //   const { name, value } = event.target
  //   this.setState({
  //     [name]: value
  //   })
  //   console.log('this.state.notes', this.state.notes);
  // }

  render() {
    return (
      <MuiThemeProvider>
      <li className="Job">



        <div className="home-info">

            <h3 className="title"><a href={this.state.listingUrl} target="_blank">{this.state.title}</a></h3>


            <h4 className="company"><a href={this.state.companyUrl} target="_blank">{this.state.company}</a><span> | {this.state.location}</span></h4>

          <div>
            <h4>Description</h4>
            <p className="description">  {this.state.description}</p>
          </div>

          <hr />
          <div className="notes">
            <h4>Notes</h4>
            <p>{this.state.notes}</p>
{/*
              <form onSubmit={this.updateNotes}>
                <textarea
                  className="form-control"
                  type="text"
                  value={this.state.notes}
                  name="notes"
                  placeholder='notes'
                  onChange={this.handleInputChange}
                />
                <FlatButton
                  type="submit" className="add-notes-button" label="Update Notes" />
              </form> */}

          </div>

        </div>
        <div className="home-buttons">
          <FlatButton
            type="submit" className="edit-notes-button" label="Edit" />
          <FlatButton
            type="submit" className="delete-button" label="Delete"
            onClick={this.handleDelete} />
          <FlatButton
            type="submit" className="network-button" label="Network" />
        </div>
      </li>
      </MuiThemeProvider>
    )
  }
}

export default Job
