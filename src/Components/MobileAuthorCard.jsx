import React, { Component } from 'react'
import AuthorImage from '../imgs/RossNodell.jpg'

export default class MobileAuthorCard extends Component {
  render() {
    const imageDivStyles = {
      width: '60%',
      margin: "2% auto",
      position: 'relative'
    }
    const imageStyle = {
      width: '100%',
      borderRadius: '50%'
    }
    const description = {
      margin: 'auto',
      width: '80%',
      textAlign: 'justify',
    }
    return (
      <div style={{backgroundColor: '#f8be03', overflow: 'hidden', height: '100vh'}}>
        <div style={imageDivStyles}>
          <img src={AuthorImage} style={imageStyle} alt="blank"/>
        </div>
        <div style={description}>
          <h1 style={{textAlign: 'justify', fontSize: '2.4vh', lineHeight: '2.4vh'}}>ROSS NODELL was born and raised in Chicago. He relocated to New York City in the late 80s to marry a Chinese woman.  Little did he know her entire family was part of the deal. Ross worked on Wall Street before starting his own real estate investment firm. He now follows his passion as a writer.
  Ross draws material from a wealth of life experience as a world traveler.  He's a true adventure-seeker having climbed Mount Rainer in Washington State, and The Grand Teton in Wyoming; scuba dived with hammerhead sharks off the North Wall in Grand Cayman; walked Kruger National Park searching for water buffalo; biked through the South of France; and windsurfed the Maldives.
  Ross has a love affair with food and wine, always seeking out new and exotic cuisines, no matter how peculiar or offensive. He brings all these adventures to his readers through the lens of a comical microscope.</h1>
        </div>
      </div>
    )
  }
}
