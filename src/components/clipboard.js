import React, { useEffect, useState } from "react";

const Clipboard = () => {

    let [queryInput,setQueryInput] = useState("");
    let ref = React.createRef();
    const copy = () =>{
        ref.current.select();
        document.execCommand("copy");
    }

    useEffect(()=>{
        let url  = new URL(window.location);
        let qValue = url.searchParams.get('q');
        if(qValue)
            setQueryInput(qValue)
    },[])

    return(
        <div className="card-body">
            <div className="row">
                <div className="col-md-3">
                    <div className="form-group">
                        <label >Query Value</label>
                        <input ref={ref} type="text" className="form-control" defaultValue={queryInput} />
                    </div>
                    <button type="button" onClick={copy} title="Copy to clipboard" className="btn btn-dark btn-sm">Copy</button>
                </div>
            </div>
        </div>
    )
}

export default Clipboard;