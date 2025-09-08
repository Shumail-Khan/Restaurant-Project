import React from 'react'
import {assets} from '../../assets/assets.js'
const NavBar = () => {
  return (
    <div className='flex justify-between p-4 shadow-md'>
        <img src={assets.logo} alt="" />
        <img src={assets.profile_image} alt="" />
    </div>
  )
}

export default NavBar