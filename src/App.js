import React, { Component } from 'react';
import Home from './Components/Home'
import TitleBar from './Components/TitleBar'
import Preview from './Components/SamplePage'
// import CoverImage from "./imgs/StinkyTofu - Front Cover Only.jpg"
import './App.css';

class App extends Component {
  state = {
    // true = English, false = Chinese
    language: true,
    activePage: 'home'
  }
  handleLanguage = () => {
    this.setState({language: this.state.language === true ? false : true})
    console.log(this.state.language);
  }
  
  handlePage = () => {

  }

  render() {
    
    return (
      <div className="App">
        <TitleBar handleLanguage={this.handleLanguage} language={this.state.language}/>
        <Home language={this.state.language}/>
        <Preview/>
      </div>
    );
  }
}

export default App;
