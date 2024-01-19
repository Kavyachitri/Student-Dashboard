import React from 'react'
import './Logout.css'
import logout from '../Logout/Assets-Logout/logout 1.png'

const Logout = () => {
  return (
    <>
    <div className='logout'>
        <img src={logout} alt=''/>
        <p>Logout</p>
        
    </div>
    </>
  )
}

export default Logout