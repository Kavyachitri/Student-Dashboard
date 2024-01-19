import React from 'react'
import './BarGraph.css';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts';
 
const chartSetting = {
  yAxis: [
    {
      domain : [0,100]
    },
  ],
  width: 480,
  height: 250,
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: 'translate(-20px, 0)',
    },
  },
};
const dataset = [
  {
    seoul: 11,
    month: 'Jan',
  },
  {
    seoul: 21,
    month: 'Fev',
  },
  {
    seoul: 64,
    month: 'Mar',
  },
  {
    seoul: 21,
    month: 'Apr',
  },
  {
    seoul: 68,
    month: 'May',
  },
  {
    seoul: 41,
    month: 'June',
  },
  {
    seoul: 80,
    month: 'July',
  },
  {
    seoul: 42,
    month: 'Aug',
  },
  {
    seoul: 21,
    month: 'Sept',
  },
  {
    seoul: 25,
    month: 'Oct',
  },
  {
    seoul: 48,
    month: 'Nov',
  },
  {
    seoul: 68,
    month: 'Dec',
  },
];
 
const valueFormatter = (value) => `${value}mm`;
 

const BarGraph = () => {
  return (
    <div className='bargraph'>
         <div className='heading'>
        <h5>English & Logical Reasoning</h5>
       <div className='sub-heading'>
       <p id='month'>Monthly</p>
        <p>Weekly </p>
       </div>
        </div>
        <BarChart
      dataset={dataset}
      xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
      series={[
       
        { dataKey: 'seoul',
         valueFormatter,
          color : '#467FFF',
         
          },
      ]}
      {...chartSetting}
    />
    </div>
  )
}

export default BarGraph