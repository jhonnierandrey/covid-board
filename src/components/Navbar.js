import React from 'react';
import logo from '../logo.svg';

function Navbar(props) {
    const callApi = props.callApi
    let state = props.state


    function changeCountry(e){
        e.preventDefault();

        state.country = e.target.rel;
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
                    <li className="nav-item active">
                        <a className="nav-link" href="/Global" rel="Global" onClick={changeCountry}>Global  <i className="fas fa-globe"></i> <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/Argentina" rel="Argentina" onClick={changeCountry}>Argentina <img src="https://www.countryflags.io/ar/flat/32.png" alt="Argentina" /></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/Colombia" rel="Colombia" onClick={changeCountry}>Colombia <img src="https://www.countryflags.io/co/flat/32.png" alt="Colombia" /></a>
                    </li>
                </ul>
            </div>
        </nav>
        );
    }

export default Navbar;
