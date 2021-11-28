import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Carousel } from 'react-bootstrap';
import './About.css'

const About = () => {
    return (
        <div>
            <Carousel className="carousel-body">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://tse2.mm.bing.net/th?id=OIP.R0bTy-FMxj-BTvyGKlN6jAHaFj&pid=Api&P=0&w=203&h=153"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>What are We?</h3>
     <p>Our team is uniquely collaborative across many disciplines. Our instructors, researchers and academics work side by side, sharing knowledge and insights across the traditional boundaries of their disciplines.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://tse2.mm.bing.net/th?id=OIP.twjLvvT24Z5J4NkjOdoaQgHaDD&pid=Api&P=0&w=338&h=140"
      alt="Second slide"
    />

    <Carousel.Caption className="second-carousel">
      <h3>Why People Choose Us?</h3>
      <p>For most of our students, earning a degree is a second job. That’s why for more than three decades we’ve given busy working adults the freedom to learn when and where they want. </p>
      <p><small>Here’s to your success — and ours.</small></p>
      <Button className="btn-learnMore">
            Learn More
      </Button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://tse1.mm.bing.net/th?id=OIP._VdZMzWpMuV-75CdNykFMAHaCs&pid=Api&P=0&w=441&h=161"
      alt="Third slide"
    />

    <Carousel.Caption className="third-carousel">
      <h3>How do we help to improve skills?</h3>
      <p>Education is an influential step in staying competitive and enhancing your skills. Whether you’re starting out in your career or returning to continue to build upon your years of experience, pursuing educational training helps you keep moving forward</p>
      <ul className="lists">
          <li>When you pursue online courses, you’re equipped with skills and knowledge that you can apply to your workplace.</li>
          <li>you learn far more than just different management styles or how to create an influential presentation</li>
          <li>By getting the certificate, you accomplish a big step. You gain knowledge, skills and experience to help you both in your career and in life in general.</li>
      </ul>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default About;