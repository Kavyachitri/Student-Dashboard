import React from 'react'
import "./Card.css"
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

const CardData =[
    {
        title:"English",
        description:"English Course Progress",
        percentage:"65",
        Lesson:"Lessons",
        value:"4/26",
    },
    {
        title:"Logical Reasoning",
        description:"Logical Reasoning Course Progress",
        percentage:"100",
        Lesson:"Lessons",
        value:"20/20",
    },
    {
        title:"Graphic Design",
        description:"Graphic Design Course Progress",
        percentage:"65",
        Lesson:"Lessons",
        value:"6/10",
    },
    {
        title:"GRE",
        description:"GRE Course Progress",
        percentage:"85",
        Lesson:"Lessons",
        value:"8/10",
    },
]
const Card = () => {
  return (
    <div className='circular-progress'>
        { CardData.map((data) => (
    <div className='circular-progress-1'>
        <h4>{data.title}</h4>
        <div className='circular-progress-2'>
        <p>{data.description}</p>
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress variant="determinate" value={data.percentage} size={50} thickness={3} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span>{`${data.percentage}%`}</span>
      </Box>
    </Box>
        </div>
        <div className='lesson'>
            <h6>{data.Lesson}</h6>
            <div className='lesson-1'>
            <LinearProgress 
        
        style={
        {
          width: "150px",
          height:"3px",
          borderRadius:"3",
          backgroundColor:"#F8F8F8",
          
          
        }
      
        }
      
      variant ='determinate'
      value={data.percentage}
     
      />
      <p>{data.value}</p>
            </div>
        </div>
       
    </div>

        ))}
    
    
  

  
  </div>
  
  )
}

export default Card