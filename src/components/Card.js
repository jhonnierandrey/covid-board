import React from 'react';

function Card(props) {
    const mainClass = `card text-white bg-${props.mainClass} mb-3`;
    const ico = `fas ${props.ico}`;

    return(
        <div className={mainClass}>
            <div className="card-header"> <i className={ico}></i> {props.title}</div>
            <div className="card-body">
                <h5 className="card-title"> {props.number}</h5>
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        </div>
        );
    }

export default Card;