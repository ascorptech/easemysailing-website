import React from 'react'
import Recruitment from "@components/recruiter/subscription/Recruitment"
import Advertisement from '@/components/recruiter/subscription/Advertisement'
import AddOn from '@/components/recruiter/subscription/AddOn'
import Terms from '@/components/recruiter/subscription/Terms'
export default function () {
  return (
    <div>
        <Recruitment/>
        <Advertisement/>
        <AddOn/>
        <Terms/>
    </div>
  )
}
