import React, { Component } from "react";
import axios from 'axios'
// import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
// import FlatButton from 'material-ui/FlatButton';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Jobs from '../../components/Jobs'
import './Home.css';

class Home extends Component {
  constructor() {
    super()
    this.state = {
      jobs: [],
      search: ''
    }
  }

  componentWillMount = () => {
    axios.get('/api/jobs')
    .then( (response) => {
      this.setState({
        jobs:response.data
      })
    })
      .catch(function (error) {
      console.log(error);
    });
  }

  updateSearch = (event) => {
  this.setState({
    search: event.target.value
  })
}

  render() {

    let filteredTopics = this.state.jobs.filter(
    (job) => {

      var title = job.title.toLowerCase().indexOf(this.state.search.toLowerCase())!== -1

      if(job.description) {
        var description = job.description.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
      }


      if(job.company) {
        var company = job.company.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
      }
      return description || title || company
    }
  )
    return (

      <div>
        <div className="search-box">
        <input type="text" placeholder="search jobs"
          value={this.state.search}
          onChange={this.updateSearch}
          ></input>
        </div>
        <Jobs
        jobs={filteredTopics} history={this.props.history}
      />
      </div>

    );
  }
}

export default Home;
