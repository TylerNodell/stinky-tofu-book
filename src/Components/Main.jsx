import React, { Component } from 'react'
import Home from "./Home";
import Details from './DetailPage'
import { CSSTransition, TransitionGroup } from "react-transition-group";


export default class Main extends Component {
  state= {
    // true = Home false = display
    // CHANGE THIS BACK TO TRUE FOR RELEASE
    activePage: true
  }

  changePage = () => {
    this.setState({activePage: !this.state.activePage})
  }

  renderPage = () => {
    if (this.state.activePage) {
      return (
        <TransitionGroup>
          <CSSTransition
            key={1}
            timeout={300}
            classNames='fade'
          >
            <Home changePage={this.changePage}/>
          </CSSTransition>
        </TransitionGroup>
      )
    } else {
      return (
        <TransitionGroup>
          <CSSTransition
            key={2}
            timeout={300}
            classNames='fade'
          >
            <Details changePage={this.changePage}/>
          </CSSTransition>
        </TransitionGroup>
      )
    }
  }
  render() {
    return (
      <div style={{overflow: 'hidden'}}>
        {this.renderPage()}
      </div>
    )
  }
}
