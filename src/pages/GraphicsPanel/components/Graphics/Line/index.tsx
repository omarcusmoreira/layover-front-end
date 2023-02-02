import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const data = [
    
  { name: '0', uv: 18 },
  { name: '1', uv: 12 },
  { name: '2', uv: 20 },
  { name: '3', uv: 16 },
  { name: '4', uv: 30 },
  { name: '5', uv: 25 },
  { name: '6', uv: 22 },
  { name: '7', uv: 0 },
];


export function  LineGraphic(color:any) {

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
            <Line connectNulls type="monotone" dataKey="uv" stroke={color} fill={color} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  
}
