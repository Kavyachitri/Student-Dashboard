import React from 'react'
import './Upgrade.css'
import cp from '../../Assets-Dashboard/cp-img.png'

const Upgrade = () => {
  return (
    <div className='Upgrade'>
      <h2>careerpedia</h2>
      <img src={cp} alt=''/>
      <button>Upgrade</button>
    </div>
  )
}

export default Upgrade