import React from 'react'
import fbImg from '../Images/icons8-facebook-50.png'
import twtImg from '../Images/icons8-twitter-50.png'
import instImg from '../Images/icons8-instagram-64.png'
import linkdInImg from '../Images/icons8-linkedin-circled-50.png'
import './style/footer.css'

export default function Footer() {
  return (
    <div className='footer'>
        <div className="footer-grid">
            <div className="footer-grid-item1 footer-grid-item">
                <ul className='footer-grid-item1-list'>
                    <li><button><img src={fbImg} alt="" /> Facebook</button></li>
                    <li><button><img src={twtImg} alt="" /> Twitter</button></li>
                    <li><button><img src={instImg} alt="" /> Instagram</button></li>
                    <li><button><img src={linkdInImg} alt="" /> LinkdIn</button></li>
                </ul>
            </div>
            <div className="footer-grid-item2 footer-grid-item">
              <h3>Write mail to us</h3>
              <input type='textarea'></input>
            </div>
        </div>
    </div>
  )
}
