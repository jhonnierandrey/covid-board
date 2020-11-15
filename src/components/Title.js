import React from 'react';
import Card from './Card';

function Title(props) {

    return(
        <div className="title jumbotron">
            <div className="card-container col">
                <h1 className="display-4">Global</h1>
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