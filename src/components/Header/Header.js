import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Navigation from '../Navigation/Navigation';
import Logo from '../Logo/Logo';

function Header({ isLogged }) {
  const [isBurgerOpened, setIsBurgerOpened] = React.useState(false);
  const headerClassName = `header ${!isLogged && 'header__background_dark'}`;
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
        <Logo />
        {isLogged ? (
          <>
            <Navigation isBurgerOpened={isBurgerOpened} closeBurger={closeBurger} />
            <div className={burgerOpenButtonClassName} onClick={openBurger}><span className='header__burger-span'></span></div>
            <div className={burgerCloseButtonClassName} onClick={closeBurger}></div>
          </>
        ) : (
          <>
            <Link className='header__link' to='/signup'>Регистрация</Link>
            <Link className='header__link header__link_color_green' to='/signin'>Войти</Link>
          </>
        )}
      </div>
    </header >
  );
};

export default Header;
