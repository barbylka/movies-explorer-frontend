import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Navigation from '../Navigation/Navigation';
import logo from '../../images/logo.svg';

function Header({ isDark, isLogged }) {
  const [isBurgerOpened, setIsBurgerOpened] = React.useState(false);
  const headerClassName = `header ${isDark && 'header__background_dark'}`;
  const burgerOpenButtonClassName = `header__open-burger ${isBurgerOpened && 'header__open-burger_hidden'}`;
  const burgerCloseButtonClassName = `header__close-burger_hidden ${isBurgerOpened && 'header__close-burger'}`;

  function openBurger() {
    setIsBurgerOpened(true);
    document.body.style.overflow = 'hidden';
  };

  function closeBurger() {
    setIsBurgerOpened(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <header className={headerClassName}>
      <div className='header__wrapper'>
        <Link to='/'><img src={logo} alt='Лого проекта' className='header__logo' /></Link>
        {isLogged ? (
          <>
            <Navigation isBurgerOpened={isBurgerOpened} closeBurger={closeBurger} />
            <div className={burgerOpenButtonClassName} onClick={openBurger}><span className='header__burger-span'></span></div>
            <div className={burgerCloseButtonClassName} onClick={closeBurger}></div>
          </>
        ) : (
          <>
            <Link className='header__link' to='/signin'>Регистрация</Link>
            <Link className='header__link header__link_color_green' to='/signup'>Войти</Link>
          </>
        )}
      </div>
    </header >
  );
};

export default Header;
