import axios from 'axios'
import React from 'react'
import { useState,useEffect } from 'react'

const FeaturedImage = () => {
    const [posts,setposts]=useState([])
    useEffect(()=>{
        axios.get("https://ghost-blog.ipxp.in/ghost/api/v3/content/posts/?key=8196190b08906dda0ebf6e6f5d").then(response=>{
            setposts(response.data.posts)
            console.log(posts)
           
        })
    },[])
  return (
      <>
      <div className='posts-display'>
          
      <div className='metaposts'>
      <h3>Posts without meta_description</h3>
      <h1>Titles</h1>
        {
            posts.filter(result=>result.meta_description==null).map((result,index)=>
                <div key={index}>
                    <h5>{result.title}</h5>
                  
                </div>
                )
        }
    </div>
    <div>
    <div className='longmeta'>
        <h3>Too Long meta_description</h3>
        {
            posts.filter((result)=>result.id==="613c9d70a3e4b056473cd1a3").map((result,index)=>
                <div key={index} >
                    <h5>{result.title}</h5>
                    <p>{result.meta_description}</p>
                </div>
                )
        }
    </div>
    
    <div className='imagestyle'>
        <h3>Posts which dont have feature_image</h3>
        {
            posts.filter((result)=>result.feature_image==null).map((result,index)=>
                 <div key={index}>
                    <h2>{result.title}</h2>
                </div>
                )
        }
        <div>null</div>
    </div>
    <div className='url'>
        <h3>Posts in which Url is greater than the 90 characters  </h3>
        {
            posts.filter(result=>(result.url.length)>90).map((result,index)=>
                <div key={index}>
                  <p>{result.title}</p>
                </div>
                    )
        }
    </div>
    </div>
    </div>
    </>
  )
}

export default FeaturedImage