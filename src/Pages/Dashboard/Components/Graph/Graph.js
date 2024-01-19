import React from 'react'
import './Graph.css';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts';
import BarGraph from '../BarGraph/BarGraph';
 
const chartSetting = {
  yAxis: [
    {
      domain: [0, 100],
    },
  ],
  width: 470,
  height: 250,
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: 'translate(-20px, 0)',
    },
  },
};
const dataset = [
  {
    English: 10,
    LogicalReasoning: 23,
    month: 'Jan',
  },
  {
    English: 19,
    LogicalReasoning: 25,
    month: 'Fev',
  },
  {
    English: 42,
    LogicalReasoning: 17,
    month: 'Mar',
  },
  {
    English: 62,
    LogicalReasoning: 15,
    month: 'Apr',
  },
  {
    English: 67,
    LogicalReasoning: 15,
    month: 'May',
  },
  {
    English: 59,
    LogicalReasoning: 21,
    month: 'June',
  },
];
 
const valueFormatter = (value) => `${value}mm`;


const Graph = () => {
  return (
    <div className='charts'>
    <div className='graph'>
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
        { dataKey: 'English', label: 'English', valueFormatter, color : '#467FFF' },
        
        { dataKey: 'LogicalReasoning', label: ' LogicalReasoning', valueFormatter, color : '#43B5F4',size:"5" },
      ]}
      {...chartSetting}
       
    />
    
    </div>
    <div className='Bargraph'>
    <BarGraph/>
    </div>
   
    </div>
  )
}

export default Graph