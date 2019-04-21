import React from 'react';

const LeftArrow = (props) => {
  const styles = {
    backgroundImage: `url('https://s3-ap-southeast-1.amazonaws.com/he-public-data/Left%20Control577660a.png')`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 60%'
  }
  return (
    <div className="backArrow arrow" style={styles} onClick={props.goToPrevSlide}>
    </div>
  );
}

export default LeftArrow;