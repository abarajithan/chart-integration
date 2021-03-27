import React, { useState } from "react";
import Utils from './utils';

export const queryContext = React.createContext();

const Context = props => {

    const resetQueries = () => {
        setPage(1);
        setPageSize(10);
        setFromDate(Utils.formatDate(new Date()))
        setToDate(Utils.formatDate(new Date()))
    };

  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [fromDate, setFromDate] = useState(Utils.formatDate(new Date()));
  const [toDate, setToDate] = useState(Utils.formatDate(new Date()));

  return (
    <queryContext.Provider
      value={{
        page,
        setPage,
        pageSize,
        setPageSize,
        fromDate,
        setFromDate,
        toDate,
        setToDate,
        resetQueries
      }}
    >
      {props.children}
    </queryContext.Provider>
  );
};

export default Context;
