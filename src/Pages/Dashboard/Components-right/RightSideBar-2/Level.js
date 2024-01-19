import React from 'react'
import './Level.css';
import shield from '../../Assets-Dashboard/shield.png';
import passport from '../../Assets-Dashboard/passport.png';
import puzzle from '../../Assets-Dashboard/puzzle.png';
import physics from '../../Assets-Dashboard/physics.png';
import bookmark from '../../Assets-Dashboard/bookmark.png';

const LevelData=[
    {
        image:passport,
        num:150,
    },
    {
        image:puzzle,
        num:250,
    },
    {
        image:physics,
        num:300,
    },
    {
        image:bookmark,
        num:300,
    },
]

const Level = () => {
  return (
    <div className='Level'>
        <div className='Level-heading'>
            <h5>Level-1</h5>
            <img src={shield} alt=''/>
            <h6>Primary Level</h6>
        </div>
        <div className='Level-img'>
         {LevelData.map ((data)=>(
            <div className='level-sub'>
                <img src={data.image} alt=''/>
                <div className='Level-p'>
                <p>{data.num}</p>
                </div>
            </div>
         ))}
        </div>
    </div>
  )
}

export default Level