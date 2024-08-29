import Link from 'next/link'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div>
      <Link href={'/candidate'}>Go To candidate</Link>
    </div>
  )
}

export default page