import React from 'react'
import {useEffect,useState} from "react"
import axios from 'axios';

const TotalPost = () => {
    const [Posts,SetPOsts]=useState([]);
    useEffect(()=>{
        axios.get("https://ghost-blog.ipxp.in/ghost/api/v3/content/posts/?key=8196190b08906dda0ebf6e6f5d").then(response=>{
                     SetPOsts(response.data.posts)
   })
    },[Posts])
    // console.log(Posts)
    let count=Posts.length;
  return (
      <>
   <div className='postsDetails bgcolor1'>
    <h2>Number Of Posts</h2>
    <h1><i class="fa-solid fa-angle-up"></i>{count}</h1>
    </div>
    </>
  )
}

export default TotalPost