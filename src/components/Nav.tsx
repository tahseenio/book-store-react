// rfc
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LibraryLogo from '../assets/library-logo.png';
import { Link } from 'react-router-dom';

const Nav = ({ numberOfItems }: { numberOfItems: () => number }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <nav>
      <div className='nav__container'>
        <Link to='/'>
          <img src={LibraryLogo} alt='' className='logo' />
        </Link>
        <ul className='nav__links'>
          <li className='nav__list'>
            <Link to='/' className='nav__link'>
              Home
            </Link>
          </li>
          <li className='nav__list'>
            <Link to='/books' className='nav__link'>
              Books
            </Link>
          </li>
          <button className='btn__menu' onClick={() => setIsOpen(true)}>
            <FontAwesomeIcon icon='bars' />
          </button>
          <li className='nav__icon'>
            <Link to='/cart' className='nav__link'>
              <FontAwesomeIcon icon='shopping-cart' />
            </Link>
            {numberOfItems() > 0 && (
              <span className='cart__length'>{numberOfItems()}</span>
            )}
          </li>
        </ul>
        {isOpen && (
          <div className='menu__backdrop'>
            <button
              className='btn__menu btn__menu--close'
              onClick={() => setIsOpen(false)}
            >
              <FontAwesomeIcon icon='times' />
            </button>
            <ul className='menu__links'>
              <li className='menu__list'>
                <Link to='/' className='menu__link'>
                  Home
                </Link>
              </li>
              <li className='menu__list'>
                <Link to='/' className='menu__link'>
                  Book
                </Link>
              </li>
              <li className='menu__list'>
                <Link to='/' className='menu__link'>
                  Cart
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
