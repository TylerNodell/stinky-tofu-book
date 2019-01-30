import React, { Component } from 'react'

export default class MobileDescription extends Component {
  render() {
    const title = {
      height: '12%',
      width: '80%',
      margin: 'auto',
      textAlign: 'center',
      position: 'relative',
    }

    const titleText = {
      textAlign: 'center',
      fontFamily: "'Concert One', cursive",
      fontSize: '10vw',
    }
    const description = {
      margin: 'auto',
      width: '80%',
      textAlign: 'justify'
    }
    return (
      <div style={{backgroundColor: '#f8be03', overflow: 'hidden', height: '100vh'}}>
        <div style={title}>
          <h3 style={titleText}>Culture Shock for the Ages.</h3>
        </div>
        <div style={description}>
          <h1 style={{textAlign: 'justify', fontSize: '3.3vh', lineHeight: '3.2vh'}}>In this hilarious clash of cultures on steroids, conser-vative NYC Jewish banker Sam Lowe, falls head over heels for Linda Liu, a stunning Chinese immigrant. His desire to marry her requires a trip to Taiwan to get her mother's approval. Sam’s travels are rife with awkward and embarrassing situations as he struggles like a buffoon with the language barrier, a horde of potential in-laws, bizarre foods and befuddling Asian customs. Upon their return to New York, tensions ratchet up to an explosive level as Linda’s large family begins their mass migration from Asia to the couple’s tiny upper west side apartment. </h1>
        </div>
      </div>
    )
  }
}
