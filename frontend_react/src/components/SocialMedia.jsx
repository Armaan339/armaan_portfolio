import React from 'react'
import {BsInstagram,BsLinkedin,BsTwitter} from 'react-icons/bs'

const SocialMedia = () => {
  return (
    <div className='app__social'>
         <div>
        <a href="https://www.linkedin.com/in/armaan-brar-9aa218203?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank"> <BsLinkedin/></a>
      </div>
      <div>
        <a href="https://instagram.com/armaan.010?utm_source=qr&igshid=YzU1NGVlODEzOA==" target="_blank">
        <BsInstagram/>
        </a>
      </div>
     
      <div>
       <a href="https://x.com/armaanbrar334?s=08"  target="_blank">
      <BsTwitter/>
       </a>
      </div>
    </div>
  )
}

export default SocialMedia
