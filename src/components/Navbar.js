import React from 'react';
import logo from '../logo.png';
import countries from './countries';

function Navbar(props) {
    const callApi = props.callApi
    let state = props.state


    function changeCountry(e){
        e.preventDefault();

        state.country = e.target.rel;
        callApi()
    }

    function createCountryList(){
        let countryList = document.querySelector(".dropdown-menu");

        if (countryList.querySelector(".dropdown-item")) {
            return;
        } else {
            for(let i = 0; i < countries.length; i++ ){
                countryList.innerHTML += `<a class="dropdown-item" href="/${countries[i].name}" rel="${countries[i].name}"><img src="https://www.countryflags.io/${countries[i].id}/flat/32.png" alt="${countries[i].name}" />  ${countries[i].name}</a>`
            }

            document.querySelectorAll('.dropdown-item').forEach(item => {
                item.addEventListener('click', e => {
                    e.preventDefault();
                    alert('Próximamente.')
                })
            })
        }
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
                        <a className="nav-link" href="/Argentina" rel="Argentina" onClick={changeCountry}>Argentina <img src="https://www.countryflags.io/ar/flat/32.png" alt="Argentina" /></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/Colombia" rel="Colombia" onClick={changeCountry}>Colombia <img src="https://www.countryflags.io/co/flat/32.png" alt="Colombia" /></a>
                    </li>
                    <li className="nav-item dropdown" onClick={createCountryList}>
                        <a className="nav-link dropdown-toggle" href="/latam" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        LATAM
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">

                        </div>
                    </li>
                </ul>
            </div>
        </nav>
        );
    }

export default Navbar;
