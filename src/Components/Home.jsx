import React, { Component } from 'react'
// import BookImage from './bookImage'
import BookImage from '../imgs/StinkyTofu.jpg'

import AmazonButton from "../imgs/amazon-buy-button.png"
import InstagramButton from "../imgs/instagram-button.png"
import FacebookButton from "../imgs/facebook-button.png"



export default class Home extends Component {
  state ={
    popup: false
  }
  
  redirectToAmazon = () => {
    window.top.location.href = 'https://www.amazon.com/dp/0960004319/ref=cm_sw_em_r_mt_dp_U_rvIqCbE76B36G'
    return false;
  }

  redirectToInstagram = () => {
    window.top.location.href = 'https://www.instagram.com/stinkytofuofficial/'
    return false;
  }
  redirectToFacebook = () => {
    window.top.location.href = "https://facebook.com/Stinky-Tofu-486692958401883/"
    return false;
  }


  render() {
    
    const homeDiv = {
      position: 'absolute',
      zIndex: '9999',
      margin: 'auto',
      left: '15vw',
      width: '70%',
      height: '70vh'
    }
    
    return (
      <div className="description-display-block">
        <div style={homeDiv}>
              <img src={BookImage} className="bookBlock" alt="" onClick={() => {this.props.changePage()}} />
              <h1 className='popout'>Click the Book to Learn More</h1>
          <div className='home-side-panel'>
            <h1 style={{margin: 'auto', fontSize: '35px'}}>A Jewish man's hilarious clash with asian culture, all for the love of a China girl.</h1>
            {/* eslint-disable-next-line */}
            <a onClick={()=>{this.redirectToAmazon()}}>
              <img src={AmazonButton} className='amazon-button' alt='Amazon Button'/>
            </a>
            {/* eslint-disable-next-line */}
            <a onClick={() => {this.redirectToInstagram()}}>
              <img src={InstagramButton} className='instagram-button' alt='Instagram Button' onClick={()=>{window.location.href= 'https://www.instagram.com/stinkytofuofficial/'}}/>
            </a>
            {/* eslint-disable-next-line */}
            <a onClick={() => {this.redirectToFacebook()}}>
              <img src={FacebookButton} className="facebook-button" alt="Facebook Button"></img>
            </a>
          </div>
        </div>
      </div>
    )
  }
}
