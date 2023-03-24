import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import LoaderSpinner from './Loader/Loader.js';
import Modal from './Modal/Modal';

class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    isLoading: false,
    showModal: false,
    selectedImage: null,
  };

  componentDidUpdate(prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      this.fetchImages();
    }
  }

  handleSearch = query => {
    this.setState({ query, images: [], page: 1 });
  };

  fetchImages = async () => {
    const { query, page } = this.state;
    const perPage = 12;
    const apiKey = '32579471-afdc8e0303a1983f0362481fc';
    const url = `https://pixabay.com/api/?key=${apiKey}&q=${query}&image_type=photo&pretty=true&page=${page}&per_page=${perPage}`;

    this.setState({ isLoading: true });

    try {
      const response = await fetch(url);
      const data = await response.json();
      this.setState(prevState => ({
        images: [...prevState.images, ...data.hits],
        isLoading: false,
      }));
    } catch (error) {
      console.error('Failed to fetch images:', error);
      this.setState({ isLoading: false });
    }
  };

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  handleImageClick = image => {
    this.setState({ showModal: true, selectedImage: image });
  };

  closeModal = () => {
    this.setState({ showModal: false, selectedImage: null });
  };

  render() {
    const { images, isLoading, showModal, selectedImage } = this.state;

    return (
      <div className="app">
        <Searchbar onSubmit={this.handleSearch} />
        <ImageGallery images={images} onImageClick={this.handleImageClick} />
        {isLoading && <LoaderSpinner />}
        {images.length > 0 && !isLoading && (
          <Button onClick={this.handleLoadMore}>Load more</Button>
        )}
        {showModal && <Modal image={selectedImage} onClose={this.closeModal} />}
      </div>
    );
  }
}

export default App;
