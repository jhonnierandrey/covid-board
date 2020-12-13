import React from 'react';
import logo from '../logo.png';
import countries from './countries';

function Navbar(props) {
    const callApi = props.callApi
    let state = props.state


    function changeCountry(e){
        e.preventDefault();

        if(e.target.rel){
            state.countryDsp = e.target.rel;
        }else if(e.target.alt){
            state.countryDsp = e.target.alt;
        }else if(e.target.value){
            state.countryDsp = countries[e.target.value].name;
            state.countryCall = countries[e.target.value].name_en;
        }else{
            state.country = 'Global';
        }

        callApi()
    }

    function createCountryList(){
        let countryList = document.querySelector(".dropdown-menu");

        if (countryList.querySelector(".dropdown-item")) {
            return;
        } else {
            for(let i = 0; i < countries.length; i++ ){
                countryList.innerHTML += `<a className="dropdown-item" href="/${countries[i].name}" rel="${countries[i].name}"><img src="https://flagcdn.com/w40/${countries[i].id}.png" alt="${countries[i].name}" />  ${countries[i].name}</a>`
            }

            document.querySelectorAll('.dropdown-item').forEach(item => {
                item.addEventListener('click', e => {
                    e.preventDefault();
                    alert('Próximamente.')
                })
            })
        }
    }

    function createCountryOptions(){
        let countryList = document.querySelector(".country-list");

        if (countryList.childElementCount > 1) {
            return;
        } else {

            console.log('No options jet')
            for(let i = 0; i < countries.length; i++ ){
                countryList.innerHTML += `<option value="${i}">${countries[i].name}</option>`;
            }

        }
    }

    function changeChange(e){
        console.log('changing country...')
        console.log(e.target.value)
    }

    //createCountryList();

    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="/">
                <img src={logo} width="30" height="30" className="d-inline-block align-top" alt="" />
                COVID Board
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="/Global" rel="Global" onClick={changeCountry}>Global  <i className="fas fa-globe"></i> <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/Argentina" rel="Argentina" onClick={changeCountry}>Argentina <img src="https://flagcdn.com/w40/ar.png" alt="Argentina" /></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/Colombia" rel="Colombia" onClick={changeCountry}>Colombia <img src="https://flagcdn.com/w40/co.png" alt="Colombia" /></a>
                    </li>
                    <li className="nav-item dropdown" onClick={createCountryList}>
                        <a className="nav-link dropdown-toggle" href="/latam" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        LATAM
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">

                        </div>
                    </li>
                    <li onClick={createCountryOptions}>
                        <select className="form-control country-list" onChange={changeCountry}>
                            <option selected hidden>LATAM</option>
                        </select>
                    </li>
                </ul>

                <div className="navbar-ilinks">
                    <span>Datos de: </span>
                    <a className="btn btn-primary" href="https://covid19.who.int/" target="_blank" rel="noreferrer">WHO</a>
                    <a className="btn btn-warning" href="https://coronavirus.jhu.edu/map.html" target="_blank" rel="noreferrer">JHU</a>
                </div>
            </div>
        </nav>
        );
    }

export default Navbar;
