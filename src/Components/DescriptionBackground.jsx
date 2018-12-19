import React, { Component } from 'react'
import Block from './Block'
import BookImage from './bookImage'
import bookImage from './bookImage';

export default class DescriptionBackground extends Component {
  render() {
    return (
      <div className="description-display-block">
        <BookImage/>
        <Block language={this.props.language} color='#FCF294' float='right' textColor='black' className="Summary"/>
      </div>
    )
  }
}
