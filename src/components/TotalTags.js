import axios from 'axios'
import React, { useEffect, useState } from 'react'

const TotalTags = () => {
    const[Tags,setTags]=useState([])
    useEffect(()=>{
        axios.get("https://ghost-blog.ipxp.in/ghost/api/v3/content/tags/?key=8196190b08906dda0ebf6e6f5d").then(response=>{
            setTags(response.data.tags)
        })
    })
    let count=Tags.length;
  return (
    <>
     <div className='postsDetails bgcolor4'>
         <h2>Number Of Tags</h2>
         <h1><i class="fa-solid fa-angle-up"></i>{count}</h1>
     </div>
    </>
  )
}

export default TotalTags