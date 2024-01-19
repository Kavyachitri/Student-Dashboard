import React from 'react'
import './ZerotoHero.css'
import shield from '../../Assets-Dashboard/shield.png'
import Layer from '../../Assets-Dashboard/Layer.png'

const HeroData=[
    {
        image:shield,
    },
    {
        image:Layer,
    },
    {
        image:Layer,
    },
    {
        image:Layer,
    },
    {
        image:Layer,
    },
    {
        image:Layer,
    },
    {
        image:Layer,
    },
    {
        image:Layer,
    },
    {
        image:Layer,
    },
    {
        image:Layer,
    },
    {
        image:Layer,
    },
    {
        image:Layer,
    },
]

const ZerotoHero = () => {
  return (
    <div className='ZerotoHero'>
        <div className='heading'>
            <h5>Zero to Hero</h5>
        </div>
        <div className='hero-img'>
        { HeroData.map((data)=>(
            <img src={data.image} alt=''/>
        ))}
        </div>
    </div>
  )
}

export default ZerotoHero