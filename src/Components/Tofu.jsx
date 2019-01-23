import React, { Component } from 'react'

export default class Tofu extends Component {
  render() {
    const tofuStyle = {
      marginLeft: '10%',
      width: '80%',
      transform: 'translateY(-10%)'
    }
    return (
      <div>
        <img src={require('../imgs/Tofu-animated.gif')} alt='loading...' style={tofuStyle}/>
      </div>
    )
  }
}
