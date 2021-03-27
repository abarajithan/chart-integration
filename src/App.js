import './App.css';
import QueryBuilder from './components/query-builder';
import Chart from './components/chart';
import API from './apis/chart-info';
import React, { useContext, useState } from 'react';
import {queryContext} from './context';

function App() {

    const {page,pageSize,fromDate,toDate} = useContext(queryContext);
    const [data, setData] = useState({});

    const getData = async () => {
        let result = await API.getChartData({page,pageSize,fromDate,toDate});
        setData(result);
    }

    return (
       <React.Fragment>
            <div className="App">
                React Chart - API Integration
            </div>
            <QueryBuilder getData={getData} />
            {
                Object.keys(data).length > 0 &&
                <Chart data={data} />
            }
        </React.Fragment>
    );
}

export default App;
