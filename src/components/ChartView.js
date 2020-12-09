import React from 'react';
import Chart from 'chart.js';

function ChartView(props) {
    
    function createChart(){
        let data = {
            labels: ['Comparativa'],
            datasets: [{
                label: 'Confirmados',
                data: [props.confirmed],
                backgroundColor: [
                    '#ffc107',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)'
                ],
                borderWidth: 1
            },{
                label: 'Recuperados',
                data: [props.recovered],
                backgroundColor: [
                    '#28a745'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                ],
                borderWidth: 1
            },{
                label: 'Muertes',
                data: [props.deaths],
                backgroundColor: [
                    '#dc3545'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                ],
                borderWidth: 1
            }
        ]
        }
        
        let options = {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    
        let ctx = document.getElementById('myChart').getContext('2d');
    
        new Chart(ctx, {
            type: 'bar',
            data: data,
            options: options,
        });

        document.querySelector('.loading-box').style.display = 'none';
    }

    function checkData(){
        if(props.confirmed !== undefined){
            createChart();
        }
    }

    checkData();

    return(
        <div className='chart-view-container'>
            <div className="loading-box">
                <div className="spinner-border text-warning" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
                <div className="spinner-border text-success" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
                <div className="spinner-border text-danger" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
                <p>Cargando tabla...</p>
            </div>
            <div>
                <canvas id="myChart">
                
                </canvas>
            </div>
        </div>
    );
}

export default ChartView;