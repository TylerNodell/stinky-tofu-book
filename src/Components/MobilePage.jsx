import React, { Component } from 'react'
import MobileHome from './MobileHome'
import Sidebar from "react-sidebar"
import SidebarContent from "./SidebarContent"
import Description from './MobileDescription'
import AuthorPage from './MobileAuthorCard'
import SamplePage from './MobileSampleChapter'
import Contact from './MobileContact'
import { CSSTransition } from "react-transition-group";

export default class MobilePage extends Component {

  constructor(props) {
    super(props)
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }
  state = {
    sidebarOpen: false,
    activePage: 0,
    touching: 4
  }
  

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }
  changeRenderPage = (x) => {
    this.setState({activePage: x, sidebarOpen: false})
  }

  detectTouch = () => {
    this.setState({touching: document.querySelectorAll('[idName="hide"]').length !== 0 ? 4 : 0})
  }

  openMenu = () => {
    this.setState({sidebarOpen: true})
  }

  render() {
    const sidebar = <SidebarContent changeRenderPage={this.changeRenderPage}/>
    const pages = [<MobileHome openMenu={this.openMenu}/>, <Description />, <AuthorPage/>, <SamplePage />, <Contact touching={this.state.touching}/>]
    const { activePage } = this.state
    return(
      <div>
        <Sidebar
          sidebar={sidebar}
          open={this.state.sidebarOpen}
          onSetOpen={this.onSetSidebarOpen}
          detectTouch={this.detectTouch}
          styles={{ sidebar: { background: "white", position: 'fixed'} }}
        />
          <CSSTransition
          in={true}
          appear={true}
          timeout={300}
          classNames='fade'
          >
            {pages[activePage]}   
          </CSSTransition>
      </div>
    )
  }
}