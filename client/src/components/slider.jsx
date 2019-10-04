import React from "react";
import "./stylesheet/App.css";
import Carousel from "react-bootstrap/Carousel";

function Slider() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            class="d-block w-100"
            src="https://images.unsplash.com/photo-1521823557102-529508ac809e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1949&q=80"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            class="d-block w-100"
            src="https://images.unsplash.com/photo-1552519507-848ebd4028d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            class="d-block w-100"
            src="https://images.unsplash.com/photo-1522120177514-2b16ebe5634d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <section id="quote">
        The fact is I don't drive just to get from A to B. I enjoy feeling the
        car's reactions, becoming part of it. -Enzo Ferrari
      </section>
    </div>
  );
}

export default Slider;
