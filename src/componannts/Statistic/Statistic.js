import React from 'react';
import { useLoaderData } from 'react-router-dom';
// import { BarChart, Bar } from 'recharts';
import { ComposedChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Area, Bar } from 'recharts';

const Statistic = () => {
    const getTotal = useLoaderData();
    // console.log(getTotal)
    return (
        <div>
            <ComposedChart width={730} height={250} data={getTotal}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <CartesianGrid stroke="#f5f5f5" />
                <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
                <Bar dataKey="total" barSize={20} fill="#413ea0" />
                <Line type="monotone" dataKey="uv" stroke="#ff7300" />
            </ComposedChart>
        </div>
    );
};

export default Statistic;