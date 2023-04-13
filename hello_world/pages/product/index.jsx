import React from 'react'
import Link from 'Next/Link'

export default function index() {
  return (
    <div>
      <h1>product list</h1>
      <div>
        <Link href='/product/1'>
        p1
        </Link>
      </div>
      <div>
        <Link href='/product/2'>
        p2
        </Link>
      </div>
      <div>
        <Link href='/product/3'>
        p3
        </Link>
      </div>
    </div>
  )
}
