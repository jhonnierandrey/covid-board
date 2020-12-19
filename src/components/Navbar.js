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
                    <li>
                        <select className="form-control country-list" onChange={changeCountry}>
                            <option defaultValue hidden>LATAM</option>
                        </select>
                    </li>
                </ul>

                <div className="navbar-ilinks">
                    <a className="btn btn-primary" href="https://covid19.who.int/" target="_blank" rel="noreferrer" data-toggle="tooltip" data-placement="bottom" data-html="true" title="<em>World Health Organization</em>">WHO</a>
                    <a className="btn btn-warning" href="https://coronavirus.jhu.edu/map.html" target="_blank" rel="noreferrer" data-toggle="tooltip" data-placement="bottom" data-html="true" title="<em>Johns Hopkins University</em>">JHU</a>
                </div>
            </div>
        </nav>
        );
    }

export default Navbar;
