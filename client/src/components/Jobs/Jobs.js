import React from 'react'
import Job from '../Job'
import './Jobs.css'

const Jobs = ({jobs, history}) => {
  // console.log('history', history)
      return (
        <ol>
          {jobs.map( (job, i) => {
            return (

                <Job
                  key={job._id}
                  job={job}
                  history={history}
                />

            )
          }
        )}
      </ol>
      )


}

export default Jobs
