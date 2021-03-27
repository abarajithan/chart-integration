import React, { useContext } from "react";
import {queryContext} from '../context';

const QueryBuilder = (props) => {

    const {
        page,
        setPage,
        pageSize,
        setPageSize,
        fromDate,
        setFromDate,
        toDate,
        setToDate,
        resetQueries
      } = useContext(queryContext);

    return (
        <React.Fragment>
        <div className="card m-10">
            <h5 className="card-header">Query builder</h5>
            <div className="card-body">
                <div className="row">
                    <div className="col-md-3">
                        <div className="form-group">
                            <label >Page</label>
                            <input type="number" min={1} max={10} className="form-control" value={page} onChange={(e)=>setPage(e.target.value)} />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="form-group">
                            <label >Page Size</label>
                            <input type="number" min={5} max={25} className="form-control" value={pageSize} onChange={(e)=>setPageSize(e.target.value)} />
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="form-group">
                            <label >From Date</label>
                            <input type="date" className="form-control" value={fromDate} onChange={(e)=>setFromDate(e.target.value)} />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="form-group">
                        <label >To Date</label>
                        <input type="date" className="form-control" value={toDate} onChange={(e)=>setToDate(e.target.value)} />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <button type="button" onClick={props.getData} className="btn btn-primary mr-2">Run Query</button>
                        <button type="button" onClick={resetQueries} className="btn btn-secondary">Reset</button>
                    </div>
                </div>
            </div>
        </div>
        </React.Fragment>
    )
}
export default QueryBuilder;