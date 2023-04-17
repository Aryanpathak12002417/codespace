import React from 'react'
import { useState } from 'react'
import Card from './card'
import '../myCmp/style/features.css'

export default function Features() {
  return (
    <div className='features'>
        <h2>Why CodeSpace</h2>
        <div className="feature-card">
            <div className="item1"><Card/></div>
            <div className="item2"><Card/></div>
            <div className="item3"><Card/></div>
            <div className="item4"><Card/></div>
        </div>
    </div>
  )
}
