import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Rechart = ({ data }) => {
    const total = data;
    // console.log(total)
    return (
        <div>
            {/* <BarChart width={500} height={400} data={total}>
                <Bar dataKey="total" fill="#8884d8" />
            </BarChart> */}
        </div>
    );
};

export default Rechart;