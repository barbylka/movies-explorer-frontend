import './PageNotFound.css';
import { Link } from 'react-router-dom';

function PageNotFound() {
  return (
    <div className='not-found'>
      <h3 className='not-found__title'>
        <span className='not-found__span'>
          404
        </span>
        Страница не найдена
      </h3>
      <Link className='not-found__link' to='/'>Назад</Link>
    </div >
  );
}

export default PageNotFound;
