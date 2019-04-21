import React, { Component } from 'react';
import $ from 'jquery';
import Slide from './Slide';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';
import './App.css';

class Slider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      images: [],
      currentIndex: 0,
      translateValue: 0,
      id: '',
      url: ''
    }
  }

  getAllImageId = () => {
    $.ajax({
      cache: false,
      contentType: 'application/json',
      dataType: 'json',
      processData: true,
      type: 'GET',
      url: `https://screeningtest.vdocipher.com/api/image/`,
      headers: {
          'Authorization': 'Bearer fc1be0ce7f79cfe74502163bbc76613e'
      },
  }).then(res => {
      this.setState({images: res});
  }, error => {
      console.log(error.responseJSON)
  });
  }

  componentWillMount = () => {
    this.getAllImageId();
  }

  // Time Delay for automatic image change is set for 2 seconds here for better user experience. To change it acoording to the requirements please change the time entered in milliseconds below.
  componentDidMount = () => {
    this.timerID = setInterval(()=>{this.goToNextSlide()}, 2000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  goToPrevSlide = () => {
    if(this.state.currentIndex === 0) {
      return this.setState({
        currentIndex: this.state.images.length - 1,
        translateValue: 0
      })
    }
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1,
      translateValue: prevState.translateValue + this.slideWidth()
    }));
  }

  goToNextSlide = () => {
    if(this.state.currentIndex === this.state.images.length - 1) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0
      })
    }
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue + -(this.slideWidth())
    }));
  }

  slideWidth = () => {
    return document.querySelector('.slide').clientWidth
  }

  render() {
    return (
      <div className="slider">
        <div style={{textAlign: 'center'}}><font face="verdana" size="20">Avengers Avenue</font></div>
        <div className="slider-wrapper"
          style={{
            transform: `translateX(${this.state.translateValue}px)`,
            transition: 'transform ease-out 0.45s'
          }}>
            {
              this.state.images.map((image, i) => (
                <Slide key={i} image={image} />
              ))
            }
        </div>

        <LeftArrow
         goToPrevSlide={this.goToPrevSlide}
        />

        <RightArrow
         goToNextSlide={this.goToNextSlide}
        />
      </div>
    );
  }
}

export default Slider; 