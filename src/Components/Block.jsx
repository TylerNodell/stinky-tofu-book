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
      color: 'white',
      margin: '0 0 0 5%',
      height: '80%',
      width: '70%',
      backgroundColor: this.props.color
    }
    return (
      <div style={blockStyles} className={this.props.className}>
        <TextBlock language={this.props.language} float={this.props.float} textColor={this.props.textColor} className={this.props.className}/>
        {this.profilePicture()}
      </div>
    )
  }
}
