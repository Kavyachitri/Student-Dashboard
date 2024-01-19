import React from 'react'
import './SideBar.css'
import cp from '../SideBar/Assets-SideBar/cp.png'
import shield from '../SideBar/Assets-SideBar/shield.png'
import medal from '../SideBar/Assets-SideBar/medal 1.png'
import image from '../SideBar/Assets-SideBar/Image.png'
import Dashboard from '../../Pages/Dashboard/Dashboard'
import English from '../../Pages/English/English'
import LogicalReasoning from '../../Pages/LogicalReasoning/LogicalReasoning'
import CSEP from '../../Pages/CSEP/CSEP'
import CSAP from '../../Pages/CSAP/CSAP'
import Job from '../../Pages/Job/Job'
import Referearn from '../../Pages/Referearn/Referearn'
import Support from '../../Pages/Support/Support'
import Interview from '../../Pages/Interview/Interview'
import Logout from '../../Pages/Logout/Logout'
import { Link } from "react-router-dom";


const SideBar = () => {
  return (
    <>
    <div className='side-bar'>
        <div className='side-bar-img'>
            <img src={cp} alt=''/>
        </div>
        <div className='side-bar-card'>
          <div className='side-bar-card-profile'>
            <img src={image} alt=''/>
            <h4>Katie Pena</h4>
          </div>
          <div className='side-bar-card-profile-medal'>
            <div className='side-bar-card-profile-medal-1'>
              <img src={medal} alt=''/>
              <p>3,963</p>
            </div>

            <div className='side-bar-card-profile-medal-1'>
              <img src={shield} alt=''/>
              <p>Primary level</p>
            </div>
          </div>
        </div>
        
       <div className='section'>
       
       <Link to='/kavya'>{<Dashboard/>}</Link>
       
          
       
        <English/>
        <LogicalReasoning/>
        <CSEP/>
        <CSAP/>
        <Job/>
        <Referearn/>
        <Support/>
        <Interview/>
        <Logout/>
        
       </div>
        
    </div>
     
     </>
  )
}

export default SideBar