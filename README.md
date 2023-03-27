<h1>goit-react-hw-03-image-finder</h1>
<h2>https://pawelrogowski.github.io/goit-react-hw-03-image-finder/</h2>
Image Search Engine
This is a simple image search engine that allows users to search for images and display them in a gallery. The app uses the Pixabay API to fetch images based on user input.

Features Search for images based on user input Display images in a grid format Load more images with
a "Load more" button Display a larger version of the selected image in a modal Lazy loading of
images Responsive design Technologies Used React Pixabay API CSS Modules React Spinners Getting
Started To run the app locally, follow these steps:

Clone the repository: git clone https://github.com/username/image-search-engine.git Install
dependencies: npm install Create a .env file in the root directory and add your Pixabay API key:
REACT_APP_PIXABAY_API_KEY=your_api_key Start the app: npm start Components The app is made up of
several components:

App The main component that renders the search bar, image gallery, "Load more" button, loader, and
modal. It also handles fetching images from the Pixabay API and updating the state.

Searchbar A component that renders a search bar and handles user input.

ImageGallery A component that renders a grid of images and handles image click events.

ImageGalleryItem A component that renders an individual image and handles image click events.

Button A component that renders a button and handles click events.

Loader A component that renders a loading spinner.

Modal A component that renders a larger version of the selected image and handles modal close
events.

API The app uses the Pixabay API to fetch images. To use the API, you'll need to sign up for a free
API key on the Pixabay website.

License This project is licensed under the MIT License. See the LICENSE file for details.
