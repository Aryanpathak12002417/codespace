import React from 'react'
import './style/courses.css'

export default function Courses() {

  const element=[];
  for(let i=0;i<11;i++){
    const ele=(
      <div className='course-card'>
        <img  style={{width:'100%',height:'100%'}}></img>
      </div>
    )
    element.push(ele)
  }
  return (
    <main className='courses'>
      <div className="courses-hero">
        <h1>LOOKING FOR LEARNING</h1>
        <div className="course-hero-search">
        <input type='text' placeholder='Search  Learn  Explore'></input>
        <button>Search</button>
        </div>
      </div>
      <div className="course-details">
        <h3>Top Courses</h3>
        <div className="course-details-top">
          {element}
        </div>
        <h3>Popular Courses</h3>
        <div className="course-details-top">
          {element}
        </div>
        <h3>Recommended For You</h3>
        <div className="course-details-top">
          {element}
        </div>
        <h3>Live Event</h3>
        <div className="course-details-top">
          {element}
        </div>
      </div>
    </main>
  )
}
