import './MoviesCard.css';
import React from 'react';

function MoviesCard({ card, isSaved }) {
  const [isLiked, setIsLiked] = React.useState(false);

  const buttonClassName = `movies-card__btn ${isSaved && 'movies-card__btn__type_delete'} ${isLiked && 'movies-card__btn__active'}`;

  function handleSaveMovie() {
    if (isLiked) {
      setIsLiked(false);
    } else {
      setIsLiked(true);
    }
  }

  return (
    <li className='movies-card'>
      <div className='movies-card__info'>
        <h2 className='movies-card__title'>{card.title}</h2>
        <p className='movies-card__time'>{card.time}</p>
        <button className={buttonClassName} onClick={handleSaveMovie} />
      </div>
      <img className='movies-card__thumb' alt='Обложка фильма' src={card.img} />
    </li>
  );
}

export default MoviesCard;
