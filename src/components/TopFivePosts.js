import axios from 'axios'
import React, { useEffect,useState } from 'react'

const TopFivePosts = () => {
    const [Posts,SetPOsts]=useState([]);
    useEffect(()=>{
        axios.get("https://ghost-blog.ipxp.in/ghost/api/v3/content/posts/?key=8196190b08906dda0ebf6e6f5d").then(response=>{
                     SetPOsts(response.data.posts)
   })
    },[])
    console.log(Posts)
  return (
      <div>
          <h2 className='Header'>Top-Posts</h2>
    <div className='topPosts'>
    <div>
      {
        Posts.filter((result)=>result.id==="613c9d70a3e4b056473cd1a3").map((result)=>
           <div>
            <a href='https://ghost-blog.ipxp.in/different-product-deployment-strategies-in-devops/' ><img className='image-design' src={result.feature_image} alt=""/></a>
            <p>1.{result.title}</p>
           </div>
        )
      }
  </div>
  <div>
      {
        Posts.filter((result)=>result.id==="613c9d70a3e4b056473cd1a2").map((result)=>
           <div>
            <a href='https://ghost-blog.ipxp.in/centos-8-end-of-life-in-2021/' ><img className='image-design' src={result.feature_image} alt=""/></a>
            <p>2.{result.title}</p>
           </div>
        )
      }
  </div>
  <div>
      {
        Posts.filter((result)=>result.id==="613c9d70a3e4b056473cd1a1").map((result)=>
           <div>
            <a href='https://ghost-blog.ipxp.in/all-you-need-to-know-about-blue-green-deployments/' ><img className='image-design' src={result.feature_image} alt=""/></a>
            <p>3.{result.title}</p>
           </div>
        )
      }
  </div>
  <div>
      {
        Posts.filter((result)=>result.id==="613c9d70a3e4b056473cd19f").map((result)=>
           <div>
            <a href='https://ghost-blog.ipxp.in/continuous-integration-continuous-deployment-continuous-delivery/' ><img className='image-design' src={result.feature_image} alt=""/></a>
            <p>4.{result.title}</p>
           </div>
        )
      }
  </div>
  <div>
      {
        Posts.filter((result)=>result.id==="613c9d70a3e4b056473cd19c").map((result)=>
           <div>
            <a href='https://ghost-blog.ipxp.in/the-11-rules-of-gitlab-flow/' ><img className='image-design' src={result.feature_image} alt=""/></a>
            <p>5.{result.title}</p>
           </div>
        )
      }
  </div>
  </div>
  </div>
  )
}

export default TopFivePosts