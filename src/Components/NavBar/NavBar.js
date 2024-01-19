import React from 'react'
import "./NavBar.css"
import Bell from '../NavBar/Assets-NavBar/Bell.png'
import Progress from '../../Pages/Dashboard/Components/Progress/Progress'
import Card from '../../Pages/Dashboard/Components/Cards/Card'
import GraphicDesign from '../../Pages/Dashboard/Components/Graphic Design/GraphicDesign'
import Graph from '../../Pages/Dashboard/Components/Graph/Graph'
import ZerotoHero from '../../Pages/Dashboard/Components-right/RightSideBar-1/ZerotoHero'
import Level from '../../Pages/Dashboard/Components-right/RightSideBar-2/Level'
import Bookslot from '../../Pages/Dashboard/Components-right/RightSideBar-3/Bookslot'
import Upgrade from '../../Pages/Dashboard/Components-right/RightSideBar-4/Upgrade'


const NavBar = () => {
  return (
    <>
    <div className='main'>
    <div className='navbar'>
    <h1>Student Dashboard</h1>
    <img src={Bell} alt=''/>
    </div>
    <div className='main-page'>
    <div className='main-pg'>
      <Progress/>
      <Card/>
      <GraphicDesign/>
      <Graph/>
    </div>
    <div className='right'>
      <div className='right-pg'>
      <ZerotoHero/>
      <Level/>
      </div>
      <Bookslot/>
      <Upgrade/>
    </div>
    </div>
    </div>
    
    
    </>
   
  )
}

export default NavBar