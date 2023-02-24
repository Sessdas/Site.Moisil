import React from 'react';
import './styles/Home.css';

const Home = () => {
  return (
    <div className='Page'>
      <div className='bg1'>
        <div className="container">
          <img id='mainLogo' src={require('./assets/logov1.png')} alt='Logo' />
          <div className='typewriter'>
            <h1 className='text1'>Grigore Moisil</h1>
            <h2 className='text2'>Parintele informaticii romanesti</h2>
          </div>
        </div>
      </div>
      <div className='divider1' />
      <div className="body">
      <h1>Cine suntem?</h1>
      <div className='divider2' />
      <h2>Lorem ipsum dolor sit amet.</h2>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Home;
