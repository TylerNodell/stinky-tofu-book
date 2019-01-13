import React, { Component } from 'react'
import BookImage from './bookImage'
import Header from './Header'
import Block from './Block'

export default class Home extends Component {
  render() {
    const innerBlock = {
      borderColor: 'grey',
      width: '80%',
      margin: 'auto',
      overflow: 'auto'
    }
    return (
      <div>
        <BookImage/>
          <div style={innerBlock}>
            <Header/>
            <Block language={this.props.language} color='#FCF294' float='right' textColor='black' className="Summary"/>
            {/* <Block language={this.props.language} color='#704E2E' float='left' class="author" textColor='white' className="Author"/> */}
          </div>
      </div>
    )
  }
}
