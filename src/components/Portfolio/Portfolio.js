import { Link } from 'react-router-dom';
import './Portfolio.css';
import arrow from '../../images/arrow45deg.svg';

function Portfolio() {
  return (
    <section className='portfolio'>
      <h2 className='portfolio__title'>Портфолио</h2>
      <ul className='portfolio__list'>
        <li className='portfolio__item'>
          <Link to='https://barbylka.github.io/how-to-learn/' className='portfolio__link' target='_blank'>
            Статичный сайт
            <img className='portfolio__link-arrow' src={arrow} alt='Изображение стрелки' />
          </Link>
        </li>
        <li className='portfolio__item'>
          <Link to='https://barbylka.github.io/russian-travel/' className='portfolio__link' target='_blank'>
            Адаптивный сайт
            <img className='portfolio__link-arrow' src={arrow} alt='Изображение стрелки' />
          </Link>
        </li>
        <li className='portfolio__item'>
          <Link to='https://github.com/barbylka/react-mesto-auth' className='portfolio__link' target='_blank'>
            Одностраничное приложение
            <img className='portfolio__link-arrow' src={arrow} alt='Изображение стрелки' />
          </Link>
        </li>
      </ul>
    </section >
  );
}

export default Portfolio;
