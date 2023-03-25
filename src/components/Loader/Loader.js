import React from 'react';
import { RotatingLines } from 'react-loader-spinner';
// import css from './Loader.module.css';

class LoaderSpinner extends React.Component {
  render() {
    return (
      <div className="loader">
        <RotatingLines
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          width="96"
          visible={true}
        />
      </div>
    );
  }
}

export default LoaderSpinner;
