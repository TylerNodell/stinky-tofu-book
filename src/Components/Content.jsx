import React, { Component } from 'react'
import Description from './Description'
import Author from './AuthorCard'
import Sample from './SampleChapter'
import Tofu from './Tofu'
import Contact from './Contact'
import { CSSTransition, TransitionGroup } from "react-transition-group";

export default class Content extends Component {

  renderContent = () => {
    if (this.props.currentContent === 0) {
      return (
        <TransitionGroup>
          <CSSTransition
            in={true}
            appear={true}
            key={0}
            timeout={600}
            classNames='fade'
          >
            <Tofu />
          </CSSTransition>
        </TransitionGroup>
      )
    } else if (this.props.currentContent === 1) {
      return (
        <TransitionGroup>
          <CSSTransition
            key={1}
            timeout={600}
            classNames='fade'
          >
            <Description />
          </CSSTransition>
        </TransitionGroup>
      )
    } else if (this.props.currentContent === 2) {
      return (
        <TransitionGroup>
          <CSSTransition
            key={2}
            timeout={300}
            classNames='fade'
          >
            <Author />
          </CSSTransition>
        </TransitionGroup>
      )
    } else if (this.props.currentContent === 3) {
      return (
        <TransitionGroup>
          <CSSTransition
            key={3}
            timeout={300}
            classNames='fade'
          >
            <Sample/>
          </CSSTransition>
        </TransitionGroup>
      )
    } else if (this.props.currentContent === 4) {
      return (
        <TransitionGroup>
          <CSSTransition
            key={4}
            timeout={300}
            classNames='fade'
          >
            <Contact/>
          </CSSTransition>
        </TransitionGroup>
      )
    }
  }
  render() {
    const contentDiv = {
      position: 'absolute',
      width: '65%',
      height: '100vh',
      overflow: 'hidden',
      right: '0',
      top: '0'
    }
    return (
      <div style={contentDiv}>
        {this.renderContent()}
      </div>
    )
  }
}
