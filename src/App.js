import {React, Component} from 'react';

import Navbar from './components/Navbar';
import Title from './components/Title';
import ChartView from './components/ChartView';
import Footer from './components/Footer';

import countries from './components/countries';
import handlers from './components/handlers';

class App extends Component {

  state = {
    countryDsp: 'Global',
    countryCall: 'Global',
    confirmed: '',
    recovered: '',
    deaths: '',
  }

  componentDidMount() {

    //alert('Estamos haciendo mejoras, durante este tiempo algunas caracteristicas estarán limitadas.')

    this.callApi();
    handlers.createCountryOptions(countries);

  }

  callApi = () => {

    let url = '';

    if(this.state.countryCall === '' || this.state.countryCall === 'Global'){
      url = `https://covid19.mathdro.id/api`
    }else{
      url = `https://covid19.mathdro.id/api/countries/${this.state.countryCall}`
    }
    
    fetch(url)
    .then(response => {
      if(response.status === 200){
        return response.json()
      }else{
        alert('We cannot process your request right now, please try again later.');
      }
    })
    .then(result => {
      if(result){
        this.setState({
          confirmed : result.confirmed,
          recovered : result.recovered,
          deaths : result.deaths
        })
        this.updateTitle();
      }
      return
    })
    
  }

  updateTitle = () => {
    let currentTitle = document.querySelector('.display-4');
    let loadingStatus = document.querySelectorAll('.spinner-border');

    currentTitle.innerText = this.state.countryDsp;

    if(this.state.confirmed.value !== '' ){
      loadingStatus[0].style.display = 'none';
    }
    if(this.state.recovered.value !== '' ){
      loadingStatus[1].style.display = 'none';
    }
    if(this.state.deaths.value !== '' ){
      loadingStatus[2].style.display = 'none';
    }
    
  }

  render() {
    return (
      <div className="App" onLoad={this.initialStatus}>
        <header className="header">
          <Navbar
            callApi = {this.callApi}
            state = {this.state}
          />
        </header>
        <main>
          <Title
            confirmed = {this.state.confirmed.value}
            recovered = {this.state.recovered.value}
            deaths = {this.state.deaths.value}
          />
          <ChartView
            confirmed = {this.state.confirmed.value}
            recovered = {this.state.recovered.value}
            deaths = {this.state.deaths.value}
          />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
