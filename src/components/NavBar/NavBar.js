

import React from 'react'
import { NETFLIX_LOGO,AVATAR } from '../../constants/images'

const NavBar = () => {
  return (
    <div className='fixed top-0 w-full h-16 p-5 flex justify-between   bg-[#111111] '>
        <img className='fixed left-5 w-20' src={NETFLIX_LOGO} 
        alt="Netflix Logo" />
        <img className='fixed right-5 w-[30px]' src={AVATAR} 
        alt="Avatar" />
        
    </div>
  )
}

export default NavBar




