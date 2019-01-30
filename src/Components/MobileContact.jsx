import React, { Component } from 'react'
import FacebookButton from "../imgs/facebook-button.png"
import InstagramButton from "../imgs/instagram-button.png"

export default class Contact extends Component {
  redirectToInstagram = () => {
    window.top.location.href = 'https://www.instagram.com/stinkytofuofficial/'
    return false;
  }
  redirectToFacebook = () => {
    window.top.location.href = "https://facebook.com/Stinky-Tofu-486692958401883/"
    return false;
  }
  render() {
    const description = {
      margin: 'auto',
      width: '80%',
      textAlign: 'justify',
      textSize: '40px',
      overflow: 'auto'
    }

    const spacer = {
      width: '100%',
      height: '5vh'
    }
    return (
      <div style={{backgroundColor: '#f8be03', height: '100vh', position: 'absolute'}}>
        <div>
          <h3 style={{margin: '5vh auto', fontSize: '15vw', textAlign: 'center', fontFamily: "'Concert One', cursive"}}>Follow Us</h3>
        </div>
        {/* eslint-disable-next-line */}
        <a onClick={() => {this.redirectToInstagram()}}>
          <img src={InstagramButton} style={{width: '80%', margin: '0 10%'}} alt='Instagram Button' onClick={()=>{window.location.href= 'https://www.instagram.com/stinkytofuofficial/'}}/>
        </a>
        {/* eslint-disable-next-line */}
        <a onClick={() => {this.redirectToFacebook()}}>
          <img src={FacebookButton} style={{width: '90%', margin: '0 5%'}} alt="Facebook Button"></img>
        </a>
        <div style={description}>
          <h3 style={{textAlign: 'center', fontSize: '7.5vw', fontFamily: "'Concert One', cursive"}}>For any inquiries contact us at: </h3>
          <h3 style={{textAlign: 'center', fontSize: '7.5vw', fontFamily: "'Concert One', cursive", margin: '5vh auto'}}>StinkyTofuOfficial @gmail.com</h3>
        </div>

      </div>
    )
  }
}