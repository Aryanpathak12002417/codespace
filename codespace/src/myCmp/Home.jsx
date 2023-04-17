import React from 'react'
import Hero from './Hero'
import Features from './Features';
import TrustedBy from './TrustedBy';
import PopularCourses from './PopularCourses';
export default function Home() {
  return (
    <div>
        <Hero/>
        <TrustedBy/>
        <Features/>
        <PopularCourses/>
    </div>
  )
}
