import React from 'react'
import "./Progress.css"
import LinearProgress from '@mui/material/LinearProgress';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';





const ProgressData = [
  {
    id:1,
     title:"English",
     percentage:"50",

  },

  {
    id:2,
    title:"Logical Reasoning",
    percentage:"50",
  },

  {
    id:3,
    title:"CSEP",
    percentage:"78",
  },

  {
    id:4,
    title:"Portfolio",
    percentage:"0",
  },

  {
    id:4,
    title:"Resume",
    percentage:"0",
  },

  {
    id:4,
    title:"Interviews",
    percentage:"0",
  },

  {
    id:4,
    title:"Linked In Profile",
    percentage:"0",
  },

]

const Progress = () => {
  return (
    <div className='progresses'>
      <div className='progress'>
    

    { ProgressData.map((data) => (
    <div key={data.value}>
        <LinearProgress 
        
        style={
        {
          width: "100px",
          height:"20px",
          borderRadius:"3",
          backgroundColor:"#F8F8F8",
          
          
        }
      
        }
        variant ='determinate'
        value={data.percentage}
        />
        <div className='bar'>
      <div className='className="title'>
        <p>{data.title}</p>
        </div>
        <div className="percentage">
        <p>{data.percentage}%</p>
        </div>
        </div>
        
    </div>
     
  )
  )
  }
   
  
   
  </div>
  <div className='progress-1'>
    <p>Unemployable </p>
    <Box sx={{ width: 700 }}>
      <Slider
        size="small"
        defaultValue={70}
        aria-label="Small"
        valueLabelDisplay="auto"
      />
    </Box>
      <p>Employable </p>
    </div>
    </div>
  )
}

export default Progress