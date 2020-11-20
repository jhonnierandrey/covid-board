import React from 'react';
import Card from './Card';

function Title(props) {

    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let today  = new Date();

    return(
        <div className="title jumbotron">
            <div className="card-container col">
                <div className="display-container">
                    <h1 className="display-4">Global</h1>
                    <span className="display-date"> { today.toLocaleDateString("es-CO", options) }</span>
                </div>
                <Card
                    mainClass = 'warning'
                    ico = 'fa-check-circle'
                    title = 'Confirmados'
                    number = {props.confirmed}
                />
                <Card
                    mainClass = 'success'
                    ico = 'fa-notes-medical'
                    title = 'Recuperados'
                    number = {props.recovered}
                />
                <Card
                    mainClass = 'danger'
                    ico = 'fa-skull-crossbones'
                    title = 'Muertes'
                    number = {props.deaths}
                />
            </div>
            <hr className="my-4" />
        </div>
        );
    }

export default Title;