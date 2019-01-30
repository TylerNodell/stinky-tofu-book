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
    const buttonStyles = {
      position: 'relative',
      width: '80%',
      margin: '10% 10% 5% 10%',
      zIndex: this.props.touching
    }

    return (
      <div style={{backgroundColor: '#f8be03', height: '100vh', position: 'relative'}}>
        <div>
          <h3 style={{paddingTop: '5vh', margin: '0vh auto', fontSize: '15vw', textAlign: 'center', fontFamily: "'Concert One', cursive"}}>Follow Us</h3>
        </div>
        <div style={buttonStyles}>
            <img onClick={() => {this.redirectToInstagram()}} src={InstagramButton} className="instagram-button-mobile" style={{width: '90%', margin: '0 5%'}} alt='Instagram Button'/>
            <img onClick={() => {this.redirectToFacebook()}} src={FacebookButton} style={{zIndex: 10000, width: '100%', margin: '0'}} alt="Facebook Button"></img>
        </div>
        <div style={description}>
          <h3 style={{textAlign: 'center', fontSize: '7.5vw', fontFamily: "'Concert One', cursive"}}>For any inquiries contact us at: </h3>
          <h3 style={{textAlign: 'center', fontSize: '7.5vw', fontFamily: "'Concert One', cursive", margin: '5vh auto'}}>StinkyTofuOfficial @gmail.com</h3>
        </div>

      </div>
    )
  }
}