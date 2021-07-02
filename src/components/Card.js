import React from 'react';

    function Card(props) {
        const mainClass = `card text-white bg-${props.mainClass} mb-3`;
        const ico = `fas ${props.ico}`;

        function newFormat(number) {
            if(number !== undefined){
                return Intl.NumberFormat('es-CO').format(number)
            }
            return;
        }

    return(
        <div className={mainClass}>
            <div className="card-header"> <i className={ico}></i> {props.title}</div>
            <div className="card-body">
                <h3 className="card-title"> {newFormat(props.number)}</h3>
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        </div>
        );
    }

export default Card;