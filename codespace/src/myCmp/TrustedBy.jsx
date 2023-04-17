import React from 'react'
import OurMission from './OurMission'
import gymGuyImg from '../Images/Kerfin7_NEA_2551-removebg-preview.png'


import './style/trustedBy.css'

export default function TrustedBy() {
    return (
        <div className='trustedBy'>
            <div className="upTrusted"></div>
            <OurMission image={gymGuyImg}/>
        </div>
    )
}
