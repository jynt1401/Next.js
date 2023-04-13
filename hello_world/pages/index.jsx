import React from 'react'
import Link from 'Next/Link'

export default function index() {
  return (
    <div>
      this is home page

      <div>
        <Link href='/blog'>
        blog
        </Link>
      </div>
      <div>
        <Link href='/product'>
        product
        </Link>
      </div>
    </div>
  )
}
