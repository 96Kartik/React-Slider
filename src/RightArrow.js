import React from 'react';

const RightArrow = (props) => {
  const styles = {
    backgroundImage: `url('https://s3-ap-southeast-1.amazonaws.com/he-public-data/Right%20Control3fc6d2d.png')`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 60%'
  }
  return (
    <div className="nextArrow arrow" style={styles} onClick={props.goToNextSlide}>
      <i className="fa fa-arrow-right fa-2x" aria-hidden="true"></i>
    </div>
  );
}

export default RightArrow;