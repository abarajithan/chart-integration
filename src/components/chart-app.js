import QueryBuilder from './query-builder';
import Chart from './chart';
import API from '../apis/chart-info';
import React, { useContext, useState } from 'react';
import {queryContext} from '../context';

const ChartApp = () => {

    const {page,pageSize,fromDate,toDate} = useContext(queryContext);
    const [data, setData] = useState({});
    const [dateError, setDateError] = useState(false);

    const getData = async () => {
        if(new Date(fromDate).getTime() <= new Date(toDate).getTime()){
            let result = await API.getChartData({page,pageSize,fromDate,toDate});
            setDateError(false);
            setData(result);
        }
        else{
            setDateError(true);
        }
    }

    return (
       <React.Fragment>
            <QueryBuilder dateError={dateError} getData={getData} />
            {
                Object.keys(data).length > 0 &&
                <Chart data={data} />
            }
        </React.Fragment>
    );
}

export default ChartApp;
