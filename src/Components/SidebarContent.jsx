import React from "react";
import PropTypes from "prop-types";
import MaterialTitlePanel from "./material_title_panel";
import Tofu from '../imgs/Tofu-animated_transparent.gif'
import Amazon from '../imgs/amazon-button-mobile.png'

const styles = {
  sidebar: {
    width: '256',
    height: "100%",
    zIndex: '100',
    overflow: 'hidden',
    backgroundColor: '#f8be03'
  },
  sidebarLink: {
    display: "block",
    padding: "16px 0px",
    color: "black",
    textDecoration: "none",
    fontFamily: '"Concert One", cursive' ,
    textAlign: 'center',
    borderBottom: '2px black',
    fontSize: '6.5vw',
    margin: '1.5vh auto'
  },
  divider: {
    margin: "8px 0",
    height: 1,
    backgroundColor: "#757575"
  },
  content: {
    padding: "16px",
    height: "100%",
    backgroundColor: "#f8be03"
  },
  tofu: {
    position: 'absolute',
    width: '95%',
    bottom: '0%',
    left: '2.5%'
  }
};

const SidebarContent = props => {
  const style = props.style
    ? { ...styles.sidebar, ...props.style }
    : styles.sidebar;

    const redirectToAmazon = () => {
      window.top.location.href = 'https://www.amazon.com/dp/0960004319/ref=cm_sw_em_r_mt_dp_U_rvIqCbE76B36G'
      return false;
    }

  return (
    <MaterialTitlePanel title="Stinky Tofu" style={style}>
      <div style={styles.content}>
      {/* eslint-disable-next-line */}
        <a onClick={() => props.changeRenderPage(0)} style={styles.sidebarLink}>
          Home
        </a>
        {/* eslint-disable-next-line */}
        <a onClick={() => props.changeRenderPage(1)} style={styles.sidebarLink}>
          Book Summary
        </a>
        {/* eslint-disable-next-line */}
        <a onClick={() => props.changeRenderPage(2)} style={styles.sidebarLink}>
          About the Author
        </a>
        {/* eslint-disable-next-line */}
        <a onClick={() => props.changeRenderPage(3)} style={styles.sidebarLink}>
          Sample Chapter
        </a>
        {/* eslint-disable-next-line */}
        <a onClick={() => props.changeRenderPage(4)} style={styles.sidebarLink}>
          Follow Us
        </a>
        {/* eslint-disable-next-line */}
        <a onClick={() => {redirectToAmazon()}}>
          <img style={{width: '80%', margin: '5% 10%'}} src={Amazon} alt="Amazon Button"/>
        </a>
        <img style={styles.tofu} src={Tofu} alt="Tofu gif"/>
      </div>
    </MaterialTitlePanel>
  );
};

SidebarContent.propTypes = {
  style: PropTypes.object
};

export default SidebarContent;