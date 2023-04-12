import React from 'react'
import {useRouter} from 'next/router'

export default function productdetails() {
    const router=useRouter();
    const id=router.query.productid

  return (
    <div>
      <h2>details of product</h2>
      <h1>{id}</h1>
    </div>
  )
}



