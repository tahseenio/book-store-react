import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/library-logo.png';

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer>
      <div className='container'>
        <div className='row row__column'>
          <Link to='/'>
            <figure className='footer__logo'>
              <img src={Logo} alt='' className='footer__logo--img' />
            </figure>
          </Link>
          <div className='footer__list'>
            <Link to='/book-store-react' className='footer__link'>
              Home
            </Link>
            <span className='footer__link no-cursor'>About</span>
            <Link to='/books' className='footer__link'>
              Books
            </Link>
            <Link to='/cart' className='footer__link'>
              Cart
            </Link>
          </div>
          <div className='footer__copyright'>
            Copyright &copy; {year} Library
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
