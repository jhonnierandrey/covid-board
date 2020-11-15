import {React, Component} from 'react';

import Navbar from './components/Navbar';
import Title from './components/Title'

class App extends Component {

  state = {
    country: 'Global',
    confirmed: '',
    recovered: '',
    deaths: '',
  }

  componentDidMount() {
    //console.log('Document is loaded complete. using compnentDidMount')

    this.callApi();
  }

  callApi = () => {

    let url = '';

    if(this.state.country === 'Global'){
      url = `https://covid19.mathdro.id/api`
      //console.log('No Country--going Global')
    }else{
      url = `https://covid19.mathdro.id/api/countries/${this.state.country}`
      //console.log(`Country found-- going to ${this.state.country}`)
    }
    //const query = this.state.query;
    
    //console.log(url)
    
    fetch(url)
    .then(response => response.json())
    .then(result => this.setState({
      confirmed : result.confirmed,
      recovered : result.recovered,
      deaths : result.deaths
    }))
    .then(this.updateTitle())

    
  }

  updateTitle = () => {
    let currentTitle = document.querySelector('.display-4');

    currentTitle.innerText = this.state.country;
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
        </main>
      </div>
    );
  }
}

export default App;
