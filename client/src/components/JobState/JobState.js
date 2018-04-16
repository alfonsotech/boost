import React, {Component} from 'react'
import axios from 'axios'
import './JobState.css'

class JobState extends Component {
  constructor(props) {
    super(props)

    this.state = {
      jobState: this.props.jobState,
      id: this.props.id
    }
  }

  handleStateChange = event => {
    axios.put('/api/jobs/'+ this.state.id, {jobState:event.target.value})
    this.setState({
      jobState: event.target.value
    })
  }

  render() {
    return (
      <form className="job-state">
        <label>
          <input
            type="radio"
            value="to-apply"
            checked={this.state.jobState === "to-apply"}
            onChange={this.handleStateChange}
          />
          To Apply
        </label>
        <label>
          <input
            type="radio"
            value="applied"
            checked={this.state.jobState === "applied"}
            onChange={this.handleStateChange}
          />
          Applied
        </label>
        <label>
          <input
            type="radio"
            value="follow-up"
            checked={this.state.jobState === "follow-up"}
            onChange={this.handleStateChange}
          />
          Follow Up
        </label>
        <label>
          <input
            type="radio"
            value="rejection"
            checked={this.state.jobState === "rejection"}
            onChange={this.handleStateChange}
          />
          No-Go
        </label>
        <label>
          <input
            type="radio"
            value="interview-granted"
            checked={this.state.jobState === "interview-granted"}
            onChange={this.handleStateChange}
          />
          Interview
        </label>
      </form>
    )
  }

}
export default JobState
