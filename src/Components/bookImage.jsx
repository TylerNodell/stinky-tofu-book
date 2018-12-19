import BookImage from '../imgs/StinkyTofu.jpg'
import React, { Component } from 'react'

export default class bookImage extends Component {

  state = {expanded: false}

  bookHover = () => {
    this.setState({expanded: !this.state.expanded})
  }
  render() {
    const divStyle = {
      height: '0px'
    }
    const bookBlock = {
      position: 'relative',
      color: 'white',
      backgroundColor: 'yellow',
      width: '400px',
      height: '550px',
      zIndex: '1000',
      top: '75px',
      left: '-30%',
      transition: 'transform .2s',
      transform: this.state.expanded === false ? 'scale(1)' : 'scale(1.2)'
    }
  
    return (
      <div style={divStyle}>
        <img src={BookImage} style={bookBlock} alt={'Book Image'} onMouseEnter={() => this.bookHover()} onMouseLeave={() => this.bookHover()} ></img>
      </div>
    )
  }
}
