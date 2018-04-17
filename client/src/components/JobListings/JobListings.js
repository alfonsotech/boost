import React from 'react'
import JobListing from '../JobListing'
import './JobListings.css'

const JobListings = ({jobs, history}) => {
  // console.log('history', history)
      return (
        <ol className="job-listing">
          {jobs.map( (job, i) => {
            return (
                <JobListing
                  key={job.jobkey}
                  job={job}
                  history={history}
                />

            )
          }
        )}
      </ol>
      )
}

export default JobListings
