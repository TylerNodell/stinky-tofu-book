import React, { Component } from 'react'
import TextBlock from "./TextBlock"
import AuthorCard from "./AuthorCard"

export default class Block extends Component {

  profilePicture = () => {
    if (this.props.className === "Author") {
      return <AuthorCard/>
    }
  }

  render() {
    const blockStyles = {
      position: 'relative',
      height: '100%',
      width: '100%',
      marginTop: this.props.className === "Author" ? '5%' : '10%'
    }
    return (
      <div style={blockStyles} className={this.props.className}>
        {this.profilePicture()}
        <TextBlock language={this.props.language} textColor={this.props.textColor} className={this.props.className}/>
      </div>
    )
  }
}
