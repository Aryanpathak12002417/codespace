import React from 'react'
import { Link } from 'react-router-dom';
import arrowImage from '../Images/right-arrows.png'
import './style/joinus.css'
export default function JoinUs(props) {
  return (
    <Link to='/register' style={{textDecoration:"none"}}>
      <button className={props.classNames}>Join Us<img src={arrowImage}/></button>
    </Link>
  )
}
