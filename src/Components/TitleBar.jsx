import React, { Component } from 'react'
import LanguageButton from './LanguageButton'
import Amazon from '../imgs/Amazon.png'
import EnglishLogo from "../imgs/tofu_engText.png";
import ChineseLogo from '../imgs/tofu_chineseText.png';

export default class TitleBar extends Component {

  displayLogo = () => {

  }

  render() {
    const titleStyle = {
      position: 'relative',
      width: '100%',
      height: '60px',
      backgroundColor: '#E06D06'
    }
    const amazonStyle = {
      float: 'right',
      width: 'auto',
      height: '80%',
      marginTop: '5px',
      marginLeft: '10px'
    }
    const logoStyle = {
      float: 'left',
      height: '80%',
      marginTop: '5px'
    }
    const logo = this.props.language ? EnglishLogo : ChineseLogo
    return (
      <div style={titleStyle}>
        {/* <h1 style={{float: 'left', margin: '8px auto'}}>Stinky Tofu</h1> */}
        <img src={logo} alt="" style={logoStyle}/>
        {/* <h2 style={{float: 'left', margin: '15px auto auto 15px', backgroundColor: '#FFC53A'}} >Home</h2> */}
        <a href='http://amazon.com'><img src={Amazon} style={amazonStyle} alt="Amazon Link"/></a>
        <LanguageButton handleLanguage={this.props.handleLanguage}/>
      </div>
    )
  }
}
