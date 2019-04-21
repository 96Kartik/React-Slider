import React, { Component } from 'react';
import $ from 'jquery';

class Slide extends Component {
  constructor(props) {
    super(props)
    this.state = {
      url: ''
    }
  }

  getImageById = () => {
    $.ajax({
        contentType: 'application/json',
        dataType: 'json',
        processData: true,
        type: 'POST',
        url: `https://screeningtest.vdocipher.com/api/image/${this.props.image.id}`,
        headers: {
            'Authorization': 'Bearer fc1be0ce7f79cfe74502163bbc76613e'
        },
    }).then(res => {
        this.setState({url: res.url});
    }, error => {
        console.log(error.responseJSON)
    });
  }

  componentWillMount = () => {
    this.getImageById();
  }

  render(){
  const styles = {
    backgroundImage: `url(${this.state.url})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 60%'
  }
  return <div className="slide" style={styles}></div>
}
}


export default Slide;