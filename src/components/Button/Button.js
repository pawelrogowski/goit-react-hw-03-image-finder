import React, { Component } from 'react';
import css from './Button.module.css';

class Button extends Component {
  render() {
    return (
      <button className="button" onClick={this.props.onClick}>
        {this.props.children}
      </button>
    );
  }
}

export default Button;
