import React, { Component } from 'react';


const Footer = () => (
  <div className="ui inverted vertical footer segment" style={styles.footer}>
    <div className="ui center aligned container">
      <h4 className="ui inverted header">&copy; Copyright 2018 | All rights reserved | BlissBeauty</h4>
      <a href="https://www.facebook.com/kallas.beauty/?ref=br_rs" target='_blank'><i className="facebook square icon big"></i></a>
      <a href="https://instagram.com/"><i className="instagram square icon big"></i></a>
    </div>
  </div>
)

const styles = {
  footer: {
    backgroundColor: 'rgba(0, 0, 0, .5)',
    bottom: '0',
    left: '0',
    right: '0',
    height: '85px',
    position: 'relative'
  }
}

export default Footer;