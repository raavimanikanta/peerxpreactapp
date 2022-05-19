import axios from 'axios'
import React, { useEffect,useState } from 'react'

const TotalPages = () => {
    const[Pages,setPages]=useState([])
    useEffect(()=>{
        axios.get("https://ghost-blog.ipxp.in/ghost/api/v3/content/pages/?key=8196190b08906dda0ebf6e6f5d").then(response=>{
              setPages(response.data.pages)
        })
    },[Pages])
    // console.log(Pages)
    let count=Pages.length
  return (
    <div className='postsDetails bgcolor2'>
        <h2>Number Of Pages</h2>
        <h1><i class="fa-solid fa-angle-up"></i>{count}</h1>
    </div>
  )
}

export default TotalPages