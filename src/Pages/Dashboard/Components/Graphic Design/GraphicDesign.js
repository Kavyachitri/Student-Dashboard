import React from 'react';
import "./GraphicDesign.css";
import Vector from'../../Assets-Dashboard/Vector.png';


const GraphicData=[
  

    {
        id:1,
        item:"1.1 Profit and loss",
        point:"2 points",
        image:Vector,
        value:"15 min",
    },

    {
        id:2,
       item:"1.2 Speed, Distance and Time",
       point:"2 points",
       image:Vector,
       value:"12 min",
    },

    {
        id:3,
        item:"1.3 Ratio and Proportion",
        point:"2 points",
        image:Vector,
        value:"18 min",
    },
    {
        id:1,
        item:"1.1 Profit and loss",
        point:"2 points",
        image:Vector,
        value:"15 min",
    },

    {
        id:2,
       item:"1.2 Speed, Distance and Time",
       point:"2 points",
       image:Vector,
       value:"12 min",
    },

    {
        id:3,
        item:"1.3 Ratio and Proportion",
        point:"2 points",
        image:Vector,
        value:"18 min",
    }


]
const GraphicDesign = () => {
  return (
    <div className=' GraphicDesign'>
        <div className='head-content'>
            <h3>Graphic Desing</h3>
            <h6>Introduction to Graphic Design</h6>
            <p>This module provides an overview of the course and a review of the main tools used in descriptive statistics to visualize inform</p>
            </div>
        <div className='points'>
        { GraphicData.map((data)=>(
        <div key={data.id} className='head'>
            

            <div className='content'>
              <p>{data.item}</p>

              <div className='sub-content'>
              <p>{data.point}</p>
              <img src={data.image} alt=''/>
              <p>{data.value}</p>
              </div>

            </div>
        </div>

       ))}
        </div>
       
    </div>
  )
}

export default GraphicDesign