import React, { Component } from 'react'
import Block from './Block'
import BookImage from './bookImage'
import SampleChapter from './SampleChapter'
import {Button} from "grommet"

export default class DescriptionBackground extends Component {
  state = {
    language: true,
    activePage: 1,
  }

  changeEventBook = () => {
    this.setState({activePage: 1})
  }

  changeEventAuthor = () => {
    this.setState({activePage: 2})
  }

  changeEventChapter = () => {
    this.setState({activePage: 3})
  }

  displayBook = () => {
    if (this.state.activePage === 1) {
      return <BookImage/>
    }
  }

  displayPage = () => {
    if (this.state.activePage === 1) {
      return(
        <div>
          <Block language={this.props.language} color='white' float='right' textColor='black' className="Summary"/>
        </div>
      )
    } else if (this.state.activePage === 2) {
      return (
        <div>
          <Block language={this.props.language} color='white' float='right' textColor='black' className="Author"/>
        </div>
      )
    } else if (this.state.activePage === 3) {
      return (
        <div>
          <SampleChapter/>
        </div>
      )
    }
  }

  render() {
    const displayDiv = {
      backgroundColor: 'white',
      width: '1344px',
      height: '85vh',
      position: 'absolute',
      margin: 'auto',
      left: '15%',
      bottom: '0'
    }
    return (
      <div className="description-display-block">
        {/* <div style={testDiv}></div> */}
        {/* <BookImage/> */}
        {this.displayBook()}
        <div style={displayDiv}>
          <Button style={{position: 'absolute', zIndex: '20000', margin: "2% 0 0 0", left: "35%"}}label="About the Book" onClick={() => {this.changeEventBook()}} />
          <Button style={{position: 'absolute', zIndex: '20000', margin: "2% 0 0 0", left: "55%"}}label="About the Author" onClick={() => {this.changeEventAuthor()}} />  
          <Button style={{position: 'absolute', zIndex: '20000', margin: "2% 0 0 0", left: "75%"}}label="Read a Sample Chapter" onClick={() => {this.changeEventChapter()}} /> 
          {this.displayPage()}
          {/* <Block language={this.props.language} color='white' float='right' textColor='black' className="Summary"/> */}
          {/* <Block language={this.props.language} color='#704E2E' float='left' class="author" textColor='white' className="Author"/> */}
        </div>
      </div>
    )
  }
}
