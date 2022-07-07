import './Footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <p className='footer__text'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className='footer__flex'>
        <ul className='footer__list'>
          <li className='footer__item'>
            <a className='footer__link' rel="noreferrer" href='https://practicum.com' target='_blank'>Яндекс.Практикум</a>
          </li>
          <li className='footer__item'>
            <a rel="noreferrer" href='https://github.com/barbylka' className='footer__link' target='_blank'>
              Github
            </a>
          </li>
          <li className='footer__item'>
            <a rel="noreferrer" href='https://www.facebook.com/irina.sergeeva.3726' className='footer__link' target='_blank'>
              Facebook
            </a>
          </li>
        </ul>
        <p className='footer__year'>&#169;2022</p>
      </div>
    </footer>
  );
}

export default Footer;
