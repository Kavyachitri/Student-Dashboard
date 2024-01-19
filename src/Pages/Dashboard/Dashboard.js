import React from 'react'
import './Dashboard.css'
import grid from'../Dashboard/Assets-Dashboard/grid.png'
import { Link } from "react-router-dom";



const Dashboard = () => {
  return (
   <>
   <div className='Dashboard'>
   <img src={grid} alt=''/>
   <Link to='/dashboard'><p>Dashboard</p></Link>
   </div>
  
   </>
  )
}

export default Dashboard