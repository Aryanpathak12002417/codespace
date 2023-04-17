import React from 'react'
import boyImage  from '../Images/fashion-boy-with-yellow-jacket-blue-pants-removebg-preview.png'

import './style/card.css'

export default function card() {
  return (
    <div className='Card'>
        <div className="item1">
            <img src={boyImage}alt="" />
        </div>
        <div className="item2">
          <h3>
            Fast Learning
          </h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius illo delectus placeat iure beatae facere asperiores fugit, sapiente dicta a! Repellendus provident sunt enim recusandae! In magni temporibus recusandae culpa?</p>
        </div>
    </div>
  )
}
