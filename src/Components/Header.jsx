import React from 'react'
import TaipeiBanner from '../imgs/TaiwanBanner.jpg'

export default function Header() {

  const headerStyle= {
    backgroundColor: 'blue',
    color: 'white',
    height: '300px'
  }
  const bannerStyle = {
    height: '100%',
    width: '100%'
  }

  return (
    <div style={headerStyle}>
      <img src={TaipeiBanner} style={bannerStyle}/>
    </div>
  )
}
