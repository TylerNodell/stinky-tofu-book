import React, { Component } from 'react'
import Switch from 'react-switch'
import Flag from '../imgs/ChinaFlag.png'

export default class LanguageButton extends Component {
  state = { checked: false }
  // handleChange = this.handleChange.bind(this);

  handleChange = (checked) => {
    this.setState({ checked })
    this.props.handleLanguage()
  }
  render() {
    const placement = {
      float: 'right',
      marginTop: '15px'
    }
    const flagIcon = {
      width: '40px',
      height: '28px',
      marginRight: '2px',
      borderRadius: '5%'
    }
    return (

      <div style={placement}>
        <label htmlFor="normal-switch">
        <img src={Flag} style={flagIcon} alt="flag"/>
        <Switch
          onChange={this.handleChange}
          checked={this.state.checked}
          id="Language Switch"
        />
      </label>
      </div>
    )
  }
}
