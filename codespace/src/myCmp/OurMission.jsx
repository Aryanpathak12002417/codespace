import React from 'react'

import JoinUs from './JoinUs'
import arrowImage from'../Images/right-arrows.png'
export default function (props) {
  return (
    <div className='trusted-details'>
                <div className="trusted-details-item1">
                    <img src={`${props.image}`} alt="" />
                </div>
                <div className="trusted-details-item2">
                    <h1>Our Mission</h1>
                    <p>Our mission is to empower people to change their lives through coding education. We believe that anyone can learn to code, regardless of their background or experience. By providing engaging and effective learning resources, we aim to help our students achieve their goals and reach their full potential.Our online coding website is dedicated to providing high-quality coding education to anyone, anywhere. We offer a range of courses and resources to help beginners learn to code, as well as advanced topics for experienced developers. Our goal is to make coding accessible and enjoyable for everyone, whether you're looking to start a career in tech or simply want to learn a new skill.</p>
                    <p>Apart from that we have build a strong community of developers.The codespace community is the
                        fastest growing coding community ready to dominate the world. Inorder to helps us in our mission
                        do become part of our family and excel the world of computer programming.
                    </p>
                    <JoinUs to='/register' classNames='trusted-join'></JoinUs>
                </div>
     </div>
  )
}
