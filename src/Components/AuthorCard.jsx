import React, { Component } from 'react'
import AuthorImage from '../imgs/RossNodell.jpg'

export default class AuthorCard extends Component {
  render() {
    const styles = {
      width: '30%',
      margin: "10% 2.5% 10% 2.5%",
      float: 'right'
    }
    const imageStyle = {
      width: "80%",
      height: "30%",
      borderRadius: '50%'
    }
    return (
      <div style={styles}>
        <img src={AuthorImage} style={imageStyle} alt="blank"/>
      </div>
    )
  }
}
