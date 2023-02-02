import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    ab: 1500,
    ac: 2200,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    ab: 2500,
    ac: 1800,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    ab: 5000,
    ac: 3800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    ab: 5000,
    ac: 8000,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    ab: 3800,
    ac: 1500,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    ab : 5000,
    ac: 1500,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    ab: 3500,
    ac: 2800,
    amt: 2100,
  },
];


export function  Multiline() {

    return (
      <div>
        
        <ResponsiveContainer width="100%" height={200}>
          <LineChart
            width={500}
            height={200}
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="pv" stroke='#47FFB1' activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke='#C1C1FF' />
          <Line type="monotone" dataKey="ab" stroke='#FF6324' />
          <Line type="monotone" dataKey="ac" stroke='#EE36FF' />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  
}
