import React from 'react';
import "../Pagination/Pagination.css";
function Pagination(props) {


    return (
        <div className="pagination">
            <button 
            className="prev"
            // disabled={} 
            onClick={props.prevPage}>
            Prev
            </button>
            <button 
            className="next"
            // disabled={} 
            onClick={props.nextPage}>
            Next
            </button>
        </div>
    );
}

export default Pagination;