import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div className='not-found'>
      <p>NOT_FOUND_404</p>
      <Link href={"/"}>BACK TO HOME PAGE</Link>
    </div>
  )
}

export default NotFound
