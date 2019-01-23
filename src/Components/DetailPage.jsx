import React, { Component } from 'react'
import Content from './Content'
import { CSSTransition, TransitionGroup } from "react-transition-group";

export default class DetailPage extends Component {

  state = {
    // 0 = tofu, 1 = description, 2 = author, 3 = sample chapter
    currentContent: 0
  }

  changePage = (x) => {
    this.setState({currentContent: x})
  }

  render() {
    const sideBarDiv = {
      backgroundColor: '#f8be03',
      width: '30%',
      margin: '5% 5%',
      textAlign: 'center',
      borderRight: '2px solid'
    }

    
    return (
      <div style={{backgroundColor: '#f8be03', height: '100vh', overflow: 'hidden'}}>
        <div style={sideBarDiv}>
          <h1 className="option-button" onClick={() => {this.props.changePage(); this.changePage(0)}}>Back To Home</h1>
          <h1 className="option-button" onClick={() => {this.changePage(1)}}>Book Description</h1>
          <h1 className="option-button" onClick={() => {this.changePage(2)}}>About the Author</h1>
          <h1 className="option-button" onClick={() => {this.changePage(3)}}>Sample Chapter</h1>
        </div>
        <TransitionGroup>
          <CSSTransition
            key={3} 
            in={true} 
            appear={true} 
            timeout={300} 
            classNames="fade"
          >
            <Content currentContent={this.state.currentContent}/>
          </CSSTransition>
        </TransitionGroup>
      </div>
    )
  }
}
