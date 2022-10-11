import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar } from 'recharts';

const Statistic = () => {
    const getTotal = useLoaderData();
    // console.log(getTotal)
    return (
        <div>
            <BarChart width={500} height={400} data={getTotal}>
                <Bar type="monotone" dataKey="total" stroke="#8884d8" strokeWidth={2} />
            </BarChart>
        </div>
    );
};

export default Statistic;