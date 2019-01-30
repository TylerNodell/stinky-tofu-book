import React from "react";
import PropTypes from "prop-types";
import BookImage from '../imgs/StinkyTofu.jpg'

const styles = {
  root: {
    fontFamily:
      '"HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif',
    fontWeight: 300
  },
  header: {
    backgroundColor: "#f8be03",
    color: "black",
    padding: "16px",
    fontSize: "5.5em",
    textAlign: 'center',
    fontFamily: '"Concert One", cursive',
  },
  book: {
    width: '10%'
  }
};

const MaterialTitlePanel = props => {
  const rootStyle = props.style
    ? { ...styles.root, ...props.style }
    : styles.root;

  return (
    <div style={rootStyle}>
      <div style={styles.header}>{props.title}</div>
      {props.children}
    </div>
  );
};

MaterialTitlePanel.propTypes = {
  style: PropTypes.object,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  children: PropTypes.object
};

export default MaterialTitlePanel;