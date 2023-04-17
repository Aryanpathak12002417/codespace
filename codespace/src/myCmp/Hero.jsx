import React from 'react'
import { Link } from 'react-router-dom'
import './style/hero.css'
import JoinUs from './JoinUs'
import heroImage from '../Images/101.png'
import ladyImage from '../Images/lady.png'
import arrowImage from '../Images/right-arrows.png'
import sunset from '../Images/sunset-silhouettes-trees-mountains-generative-ai.jpg'
import 'html5-device-mockups'

export default function Hero() {
  return (
    <div className='hero'>
      <div className='hero-grid-container'>
        <div className="grid-container">
          <div className="item1">
            <h1>Become a Coding Rockstar</h1>
            <h3>Start your Coding Journey with us</h3>

            <p>Learn to code from scratch with our comprehensive coding tutorial website. Our expert instructors guide you through the basics to advanced concepts, with hands-on exercises and real-world examples. Build your skills and launch your coding career.</p>
              <JoinUs to='/register' classNames='btn-join'>Join us</JoinUs>
          </div>
          <div className="item2s">
            <img className='ladyImage' src={ladyImage} alt="" />
            <div class="device-wrapper" style={{minWidth:'32rem'}}>
              <div class="device" data-device="Macbook2015" data-orientation="portrait" data-color="white">
                <div class="screen">
                    <video poster={sunset} autoPlay loop></video>
                </div>
                <div class="button">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
