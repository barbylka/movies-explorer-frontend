import { Link } from 'react-router-dom';
import './AboutMe.css';
import me from '../../images/me.jpg';

function AboutMe() {
  return (
    <section className='me'>
      <h2 className='me__title'>Студент</h2>
      <div className='me__grid'>
        <img className='me__img' alt='Фото студента, выполнившего проект' src={me} />
        <div className='me__summary'>
          <h3 className='me__subtitle'>Ирина</h3>
          <p className='me__text me__text_weight_medium'>Фронтенд-разработчик, 22 года</p>
          <p className='me__text'>Я живу в солнечной Малаге, у меня есть разрешение на работу
            в Испании. Я люблю слушать музыку, а ещё
            увлекаюсь компьютерными играми. Недавно начала кодить. Успела поработать риелтором,
            оператором кол-центра и преподавателем английского. Весь мой опыт помог мне
            определиться с выбором профессии. Ну и чуть-чуть понимать людей.
          </p>
        </div>
        <ul className='me__flex'>
          <li className='me__item'>
            <Link to='https://www.facebook.com/irina.sergeeva.3726' className='me__link' target='_blank'>
              Facebook
            </Link>
          </li>
          <li className='me__item'>
            <Link to='https://github.com/barbylka' className='me__link' target='_blank'>
              Github
            </Link>
          </li>
        </ul>
      </div>
    </section >
  );
}

export default AboutMe;
