import React from 'react'
import Carousel from "react-bootstrap/Carousel";

import "bootstrap/dist/css/bootstrap.css";


function Home() {
  return (
    <div
    style={{
      width: 1365,
      height: 255,
      marginLeft: -310,
      marginRight: "auto",
      marginTop:-300
     
      
    }}
  >
    <Carousel>
      <Carousel.Item interval={1500}>
        <img
          className="d-block w-100"
          style={{ height: 600 }}
          src="https://www.dictionary.com/e/wp-content/uploads/2016/12/1000x700-love-libraries-quotes-9.jpg"
          alt="First slide"
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img
          className="d-block w-100"
          style={{ height: 600 }}
          src="https://www.dictionary.com/e/wp-content/uploads/2016/12/1000x700-love-libraries-quotes-1.jpg"
          alt="Second slide"
        />

        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img
          className="d-block w-100"
          style={{ height: 600 }}
          src="https://i.pinimg.com/originals/7e/af/09/7eaf096445c86ea5ea9df3cd669566b3.jpg"
          alt="Third slide"
        />

        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>

    </Carousel>
    </div> 
  )
}

export default Home