import React, { Component } from 'react';
import { CSSTransition } from "react-transition-group";
import MobilePage from './Components/MobilePage'
import Main from "./Components/Main"
// import CoverImage from "./imgs/StinkyTofu - Front Cover Only.jpg"
import './App.css';

class App extends Component {
  state = {
    displayMenu: false,
    width: window.innerWidth,
    height: window.innerHeight
  }

  handlePage = (display) => {
    return this.state.displayMenu ? display[1] : display[0];
  }

  changePage = () => {
    this.setState({displayMenu: true})
  }

  handleLanguage = () => {
    this.setState({language: this.state.language === true ? false : true})
    console.log(this.state.language);
  }
  
  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }


  handleWindowSizeChange = () => {
    this.setState({ 
      width: window.innerWidth,
      heigh: window.innerHeight
     });
  };

  render() {
    const { width, height} = this.state
    const isMobile = width <= height
    if (isMobile) {
      return(
        <div>
          <MobilePage />
        </div>
      );
    } else {
      return (
        <div className="App">
          <CSSTransition 
            in={true} 
            appear={true} 
            timeout={400} 
            classNames="fade"
          >
            <Main />
          </CSSTransition>

        </div>
      );
    }
  }
}

export default App;
