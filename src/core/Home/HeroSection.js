import React from 'react';
import '../../App.css';
import { Button } from './Button';
import video from '../../videos/video-1.mp4'
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container ' >
     <video src={video} autoPlay loop muted />

      <h1>A UNIQUE EVENTS AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns1'>
        <Button
          className='btns1'
          buttonStyle='btn3--outline'
          buttonSize='btn3--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns1'
          buttonStyle='btn3--primary'
          buttonSize='btn3--large'
          onClick={console.log('Getting Started')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;