import React from 'react'
import './Download.css'
import { assets } from '../../assets/assets'
const Download = () => {
  return (
    <div className='download' id='download'>
    <p>For better experience download <br />Hungry Hub</p>
    <div className='platforms'>
        <img src={assets.play_store} alt=''></img>
        <img src={assets.app_store} alt=''></img>
    </div>
    </div>
  )
}

export default Download
