import React from 'react'
import OurMission from './OurMission'
import cimg from '../Images/101.png'
import './style/popularCourses.css'

export default function PopularCourses() {
  return (
    <div className='trustedBy2'>
            <div className="downTrusted"></div>
            <OurMission image={cimg}/>
    </div>
  )
}
