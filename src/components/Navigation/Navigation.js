import './Navigation.css';
import { NavLink } from 'react-router-dom';
import profile from '../../images/profile.svg';

function Navigation({ isBurgerOpened, closeBurger }) {
  const navClassName = `nav ${isBurgerOpened && 'nav__active'}`;

  return (
    <nav className={navClassName}>
      <ul className='nav__list'>
        <li className='nav__list-item'>
          <NavLink to='/' onClick={closeBurger} className={({ isActive }) => (isActive ? 'nav__link nav__link_active' : 'nav__link')}>Главная</NavLink>
        </li>
        <li className='nav__list-item'>
          <NavLink to='/movies' onClick={closeBurger} className={({ isActive }) => (isActive ? 'nav__link nav__link_active' : 'nav__link')}>Фильмы</NavLink>
        </li>
        <li className='nav__list-item'>
          <NavLink to='/saved-movies' onClick={closeBurger} className={({ isActive }) => (isActive ? 'nav__link nav__link_active' : 'nav__link')}>Сохранённые фильмы</NavLink>
        </li>
        <li className='nav__list-item'>
          <NavLink to='/profile' onClick={closeBurger} className={({ isActive }) => (isActive ? 'nav__link nav__link_active' : 'nav__link')}>Аккаунт</NavLink>
          <img src={profile} alt='Иконка профайла' className='nav__img' />
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
