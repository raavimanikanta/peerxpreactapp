import React from 'react'
import TotalAuthors from './TotalAuthors'
import TotalPages from './TotalPages'
import TotalPost from './TotalPost '
import TotalTags from './TotalTags'
import BarChart from "./BarChart"
import TopFivePosts from './TopFivePosts'

const TopDetails = () => {
  return (
    <>
    <div>
    <div className='TopDetails'>
    <TotalPost/>
    <TotalPages/>
    <TotalAuthors/>
    <TotalTags/>
    </div>
    <TopFivePosts/>
    <BarChart/>
    </div>
    </>
  )
}

export default TopDetails