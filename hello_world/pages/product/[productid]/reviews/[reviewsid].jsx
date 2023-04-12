import React from 'react'
import {useRouter} from 'next/router'

export default function reviews() {
    const router=useRouter();
    const {productid,reviewsid}=router.query

  return (
    <div>
      <h2>details</h2>
      <h1>product-{productid}</h1>
      <h1>review-{reviewsid}</h1>
    </div>
  )
}



