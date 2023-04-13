import React from "react";
import Link from "Next/Link";
import { useRouter } from "next/router";

export default function index() {
  const router=useRouter()
  const handleClick=()=>{
    console.log("place your order")
    router.push('/product')
    // router.replace('/product')
  }
  return (
    <div>
      this is home page
      <div>
        <Link href="/blog">blog</Link>
      </div>
      <div>
        <Link href="/product">product</Link>
      </div>
      <div>
        <button onClick={handleClick}> 
          place a order
        </button>
      </div>
    </div>
  );
}
