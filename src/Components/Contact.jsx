import React, { Component } from 'react'
import Mail from "../imgs/mail.png"

export default class Contact extends Component {
  render() {
    const description = {
      margin: 'auto',
      width: '80%',
      textAlign: 'justify',
      textSize: '40px'
    }

    const spacer = {
      width: '100%',
      height: '5vh'
    }
    return (
      <div>
        <div>
          <h3 style={{margin: '10vh auto', fontSize: '2.7vw', textAlign: 'center', fontFamily: "'Concert One', cursive"}}>Contact Us</h3>
        </div>
        <div style={description}>
          <h3 style={{textAlign: 'center', fontSize: '2.5vw', fontFamily: "'Concert One', cursive"}}>For any inquiries contact us at: </h3>
          <div style={spacer}></div>
          <div>
            <img src={Mail} alt='mail-icon' style={{width: '10%', margin:'5% 2% 5% 10%'}}/>
            <h3 style={{fontSize: '2.5vw', fontFamily: "'Concert One', cursive", margin: '7.5vh 0', width: '75%', float: 'right'}}>StinkyTofuOfficial@gmail.com</h3>
          </div>
        </div>

      </div>
    )
  }
}
