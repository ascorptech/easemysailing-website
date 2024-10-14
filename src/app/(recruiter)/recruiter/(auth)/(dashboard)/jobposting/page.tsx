import JobClosed from '@/components/recruiter/jobposting/JobClosed'
import JobListing from '@/components/recruiter/jobposting/JobListing'
import React from 'react'

export default function page() {
  return (
    <div>
        <JobListing/>
        <JobClosed/>
    </div>
  )
}
