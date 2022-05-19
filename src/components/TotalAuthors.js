import React from 'react'
import axios from 'axios';
import { useEffect,useState } from 'react';

const TotalAuthors = () => {
    const [Authors,SetAuthors]=useState([]);
    useEffect(()=>{
        axios.get("https://ghost-blog.ipxp.in/ghost/api/v3/content/authors/?key=8196190b08906dda0ebf6e6f5d").then(response=>{
                     SetAuthors(response.data.authors)
         })
    },[])
    let count=Authors.length
  return (
    <div className='postsDetails bgcolor3'>
      <h2>Number Of Authors </h2>
      <h1><i class="fa-solid fa-angle-up"></i>{count}</h1>
    </div>
  )
}
export default TotalAuthors