import BookImage from '../imgs/StinkyTofu.jpg'
import React, { Component } from 'react'
import { CSSTransition } from "react-transition-group";

export default class bookImage extends Component {

  state = {expanded: false}

  bookHover = () => {
    this.setState({expanded: !this.state.expanded})
  }
  render() {
  
    return (
      <div style={{float: 'left'}}>
        <img src={BookImage} className="bookBlock" alt="" onMouseEnter={() => this.bookHover()} onMouseLeave={() => this.bookHover()} ></img>
      </div>
    )
  }
}
