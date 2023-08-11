// Home.js
import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className='Home__container'>
      <header className='header'>
        <div className='header-content'>
          <h1>Welcome to Our Blog</h1>
          <p>Discover the latest articles and insights</p>
        </div>
      </header>
      
      <div className='About'>
         <h2 className='about__text'>About Us</h2>
        <p className='first__paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
       
         </p>
         <p className='first__paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Lorem ipsum dolor sit amet, consectetur sit amet adipiscing elit.
       
         </p>
         <p className='first__paragraph'> sit ametLorem ipsum dolor sit amet, consectetur adipiscing elit
        Lorem ipsum dolor sit amet, consectetur sit amet adipiscing elit</p>
        <p className='first__paragraph'> sit ametLorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>
      </div>
      <footer className='home__footer'>

      </footer>
    </div>
  );
}

export default Home;


