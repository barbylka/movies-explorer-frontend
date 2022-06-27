import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <p className='footer__text'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className='footer__flex'>
        <ul className='footer__list'>
          <li className='footer__item'>
            <Link className='footer__link' to='https://practicum.com'>Яндекс.Практикум</Link>
          </li>
          <li className='footer__item'>
            <Link to='https://github.com/barbylka' className='footer__link' target='_blank'>
              Github
            </Link>
          </li>
          <li className='footer__item'>
            <Link to='https://www.facebook.com/irina.sergeeva.3726' className='footer__link' target='_blank'>
              Facebook
            </Link>
          </li>
        </ul>
        <p className='footer__year'>&#169;2022</p>
      </div>
    </footer>
  );
}

export default Footer;
