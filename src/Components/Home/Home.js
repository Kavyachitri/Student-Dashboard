import React from 'react'
import './Home.css'
import SideBar from '../SideBar/SideBar'
import NavBar from '../NavBar/NavBar'

const Home = () => {
  return (
    <div className='Bars'>
    <SideBar/>
    <NavBar/>
    </div>
  )
}

export default Home