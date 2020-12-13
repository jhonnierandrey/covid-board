import React from 'react';
import Card from './Card';

function Title(props) {

    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let today  = new Date();

    function showChart() {
        let viewContainer = document.querySelector(".chart-view-container");
        let showChartBtn = document.querySelector('.show-chart-btn').querySelector('button').querySelector('span');

        console.log(showChartBtn);

        //viewContainer.style.display = "block";
        if (viewContainer.style.display === "none") {
            viewContainer.style.display = "block";
            showChartBtn.innerText = "Ocultar tabla";
        } else {
            viewContainer.style.display = "none";
            showChartBtn.innerText = "Mostrar tabla";
        }
    }

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
            <div className="show-chart-btn">
                <button onClick={showChart} type="button" className="btn btn-warning">
                    <span>Mostrar tabla</span> <i className="far fa-chart-bar"></i>
                </button>
            </div>
        </div>
        );
    }

export default Title;