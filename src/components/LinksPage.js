import axios from 'axios'
import React from 'react'
import {useState,useEffect} from "react"

const LinksPage = () => {
    const [state,setState]=useState([])
   
    useEffect(()=>{
        axios.get("https://ghost-blog.ipxp.in/ghost/api/v3/content/posts/?key=8196190b08906dda0ebf6e6f5d").then(response=>{
            setState(response.data.posts)
        })
    },[])
   let count=state.length
  return (
    <div>
      <div className='links' >
        <h3>Number Of Internal Links :{count} </h3>
        {
          state.filter((result)=>result.url).map(result=>
            <div>
              <p>{result.url}</p>
             
            </div>
            
        )
        }
      </div>
      

    </div>
  )
}

export default LinksPage