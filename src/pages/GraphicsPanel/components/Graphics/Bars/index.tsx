import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'A',
    uv: 35,
    pv: 60,
    vu: 55, 
    vp: 45,
    ab: 35,

  },
  {
    name: 'B',
    uv: 35,
    pv: 60,
    vu: 55, 
    vp: 45,
    ab: 35,

  },
  {
    name: 'C',
    uv: 35,
    pv: 60,
    vu: 55, 
    vp: 45,
    ab: 35,

  },
  {
    name: 'D',
    uv: 35,
    pv: 60,
    vu: 55, 
    vp: 45,
    ab: 35,

  },
  
];

export function Bars(){

  return (
    <div id="bars">
      <BarChart
        width={300}
        height={300}
        data={data}

      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" fill="#F40000" />
        <Bar dataKey="uv" fill="#0034F4" />
        <Bar dataKey="vu" fill="#F400E2" />
        <Bar dataKey="vp" fill="#00F429" />
        <Bar dataKey="ab" fill="#00F4B5" />
      </BarChart>
    </div>
  );
  
}
