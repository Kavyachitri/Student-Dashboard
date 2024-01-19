import React from 'react'
import './Bookslot.css'
import shield from '../../Assets-Dashboard/shield.png';

const Bookslot = () => {
  return (
    <div className='Bookslot'>
      <h3>Book A Slot</h3>
      <img src={shield} alt=''/>
      <p>You want to level check your skill and eligibility by attending interview</p>
      <button>Book Slot </button>
    </div>
  )
}

export default Bookslot