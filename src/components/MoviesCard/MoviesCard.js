import './MoviesCard.css';

function MoviesCard({ card, isSaved }) {
  const buttonClassName = `movies-card__btn ${isSaved && 'movies-card__btn__type_delete'}`;

  return (
    <li className='movies-card'>
      <div className='movies-card__info'>
        <h2 className='movies-card__title'>{card.title}</h2>
        <p className='movies-card__time'>{card.time}</p>
        <button className={buttonClassName} />
      </div>
      <img className='movies-card__thumb' alt='Обложка фильма' src={card.img} />
    </li>
  );
}

export default MoviesCard;
