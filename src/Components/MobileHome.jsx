import React, { Component } from 'react'
import BookImage from '../imgs/StinkyTofu.jpg'
import AmazonButton from "../imgs/amazon-buy-button.png"
import InstagramButton from "../imgs/instagram-button.png"
import TaipeiPicture from "../imgs/TaipeiPhone.jpg"

export default class MobileHome extends Component {

  redirectToAmazon = () => {
    window.top.location.href = 'https://www.amazon.com/dp/0960004319/ref=cm_sw_em_r_mt_dp_U_rvIqCbE76B36G'
    return false;
  }

  redirectToInstagram = () => {
    window.top.location.href = 'https://www.instagram.com/stinkytofuofficial/'
    return false;
  }
  render() {
    const container = {
      backgroundImage: 'url(' + TaipeiPicture + ')',
      backgroundSize:     `cover`,                      /* <------ */
      backgroundRepeat:   'no-repeat',
      backgroundPosition: 'center center',
      height: '100vh',
      overflow: 'hidden'
    }
    return (
      <div style={container}>
        <div style={{width: '80vw', padding: '5vh 0', margin: '0vh 10vw', textAlign: 'center'}}>
          <h1 style={{margin: 'auto',lineHeight: '7vw', fontSize: '7vw', color: 'white'}}>A Jewish man's hilarious clash with asian culture, all for the love of a China girl.</h1>
        </div>
        <div className='book-div-mobile'>
          <img className='book-image-mobile' src={BookImage} alt='Book'/>
        </div>
        <div style={{width: '80vw', padding: '5vh 0', position: 'absolute', bottom: '2%', left: '10vw', textAlign: 'center'}}>
          <h1 style={{margin: 'auto',lineHeight: '7vw', fontSize: '8vw', color: 'white'}}>Swipe from the left to learn more.</h1>
        </div>
      </div>
    )
  }
}
