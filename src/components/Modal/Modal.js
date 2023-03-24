import React, { Component } from 'react';
import css from './Modal.module.css';

class Modal extends Component {
  handleClose = event => {
    if (event.target === event.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    return (
      <div className="overlay" onClick={this.handleClose}>
        <div className="modal">
          <img src={this.props.image.largeImageURL} alt="" />
        </div>
      </div>
    );
  }
}

export default Modal;
