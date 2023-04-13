import React from 'react'
import {useRouter} from 'next/router'

export default function doc() {
    const router=useRouter();
    const { param=[] } = router.query
    console.log(param)
 
    if(param.length===2){
        return(
            <div>

            <h1>doc for {param[0]}</h1>
            <h1>doc doc for {param[1]}</h1>
            </div>
        )
    }
    else if(param.length===1){
        return(
            <h1>{param[0]}</h1>
        )
    }
    return(
        <h1>home doc page</h1>
    )
}
