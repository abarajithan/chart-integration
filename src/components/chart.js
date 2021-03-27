import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';

const Chart = (props) => {
    
    let [showToast, setShowToast]  = useState(false)
    let [yAxisData, updateYAxisData]  = useState([])
    let [xAxisData, updateXAxisData]  = useState([])
    let [randomColors, setRandomColors] = useState([]);

    let generateColorCodes = () => {
        let r = Math.floor(Math.random() * 255);
        let g = Math.floor(Math.random() * 255);
        let b = Math.floor(Math.random() * 255);
        return "rgb(" + r + "," + g + "," + b + ", 0.5)";
     };

    useEffect(()=>{
        if(props.data.items && props.data.items.length){
            
            let xAxisData = [];
            let yAxisData = [];
            props.data.items.forEach(item => {
                yAxisData.push(item.count)
                xAxisData.push(item.name)
                randomColors.push(generateColorCodes())
            })
            setShowToast(false);
            updateYAxisData(yAxisData);
            updateXAxisData(xAxisData);
            setRandomColors(randomColors);
        }
        else{
            setShowToast(true);
        }
    },[props])
    return(
        <React.Fragment>
        {
            showToast && 
            <div class="alert alert-secondary" role="alert">
                No Details found for this query
            </div>
        }
        {
            !showToast && 
            <div className="chart-container">
                <Bar
                    data={{
                            labels: xAxisData,
                            datasets: [{
                                label: 'Language',
                                data: yAxisData,
                                backgroundColor: randomColors,
                            }]
                        }
                    }
                    width={50}
                    height={50}
                    options={{ 
                        maintainAspectRatio: false,
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true
                                }
                            }]
                        }
                    }}
                />
            </div>
        }
        </React.Fragment>
    )  
}

export default Chart;