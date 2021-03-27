import React, { useEffect, useState } from 'react';

import { Bar } from 'react-chartjs-2';
const Chart = (props) => {
    
    let [chartData, updateChartData]  = useState([])

    useEffect(()=>{
        console.log(props.data);
    },[props])
    return(
        <React.Fragment>
            <Bar
                data={chartData}
                width={100}
                height={50}
                options={{ maintainAspectRatio: false }}
            />
        </React.Fragment>
    )  
}

export default Chart;