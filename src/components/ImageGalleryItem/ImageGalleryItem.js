import React, { Component } from 'react';
// import css from './ImageGalleryItem.module.css';

class ImageGalleryItem extends Component {
  handleClick = () => {
    this.props.onImageClick(this.props.image);
  };

  render() {
    return (
      <li className="gallery-item">
        <img src={this.props.image.webformatURL} alt="" onClick={this.handleClick} />
      </li>
    );
  }
}

export default ImageGalleryItem;
