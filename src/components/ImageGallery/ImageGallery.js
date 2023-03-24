import React, { Component } from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import css from './image-gallery.module.css';

class ImageGallery extends Component {
  render() {
    return (
      <ul className="gallery">
        {this.props.images.map(image => (
          <ImageGalleryItem key={image.id} image={image} onImageClick={this.props.onImageClick} />
        ))}
      </ul>
    );
  }
}

export default ImageGallery;
