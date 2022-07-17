import './MoviesCard.css';
import React from 'react';

function MoviesCard({ card, isSaved, onSaveMovie, onDeleteMovie }) {
  const savedMovies = JSON.parse(localStorage.getItem('saved-movies'));

  //there has to be no empty fields
  const cardData = {
    country: card.country || 'Неизвестно',
    director: card.director || 'Неизвестно',
    duration: card.duration || 0,
    year: card.year || 'Неизвестно',
    description: card.description || 'Неизвестно',
    image: isSaved ? card.image : `https://api.nomoreparties.co${card.image.url}`,
    trailerLink: isSaved ? card.trailerLink : card.trailerLink || 'https://youtube.com',
    thumbnail: isSaved ? card.thumbnail : `https://api.nomoreparties.co${card.image.formats.thumbnail.url}`,
    movieId: isSaved ? card.movieId : card.id,
    nameRU: card.nameRU || 'Неизвестно',
    nameEN: card.nameEN || 'Неизвестно',
    _id: isSaved ? card._id : null
  };

  const [isLiked, setIsLiked] = React.useState(isSaved);

  const buttonClassName = `movies-card__btn ${isSaved && 'movies-card__btn__type_delete'} ${isLiked && 'movies-card__btn__active'}`;

  //for adquate time illustration
  const cardTimeHours = Math.floor(cardData.duration / 60);
  const cardTimeMinutes = cardData.duration % 60;

  //handling liking and disliking movies on both routes
  const handleStatusMovie = () => {
    if (isLiked) {
      onDeleteMovie(cardData);
      setIsLiked(false);
      cardData._id = null;
    }
    else {
      setIsLiked(true);
      onSaveMovie(cardData);
    }
  }

  function openTrailer() {
    window.open(`${cardData.trailerLink}`, `Трейлер фильма "${cardData.nameRU}"`)
  }

  //checking a movie on active like status
  React.useEffect(() => {
    if (savedMovies && !isSaved) {
      const checkMovieStatus = savedMovies.find((m) => +m.movieId === +card.id ? m : false);
      if (checkMovieStatus) {
        setIsLiked(true);
        cardData._id = checkMovieStatus._id;
      } else {
        setIsLiked(false);
      }
    }
  }, [cardData, savedMovies]);

  return (
    <li className='movies-card'>
      <div className='movies-card__info'>
        <h2 className='movies-card__title'>{cardData.nameRU}</h2>
        <p className='movies-card__time'>{cardTimeHours > 0 ? `${cardTimeHours}ч ${cardTimeMinutes}м` : `${cardTimeMinutes}м`}</p>
        <button className={buttonClassName} onClick={handleStatusMovie} />
      </div>
      <img className='movies-card__thumb' alt='Обложка фильма' src={cardData.image} onClick={openTrailer} />
    </li>
  );
}

export default MoviesCard;
