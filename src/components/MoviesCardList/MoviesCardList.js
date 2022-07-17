import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList({ cards, moviesErrorMessage, isSaved, onSaveMovie, onDeleteMovie }) {
  const [screenWidth, setScreenWidth] = React.useState(window.innerWidth);
  const numberOfCards = () => {
    if (screenWidth >= 1020) {
      return 12
    } else if (screenWidth <= 480) {
      return 5
    } else {
      return 8
    }
  };
  const addCardsNumber = () => {
    if (screenWidth >= 1020) {
      return 3
    } else {
      return 2
    }
  };

  const [cardNumber, setCardNumber] = React.useState(numberOfCards);

  const showMoreCards = () => {
    console.log(addCardsNumber());
    setCardNumber(cardNumber + addCardsNumber());
  }

  React.useEffect(() => {
    window.addEventListener('resize', () => {
      setTimeout(() => {
        setScreenWidth(window.innerWidth);
      }, 1000)
    })
  }, [])

  React.useEffect(() => {
    setCardNumber(numberOfCards);
  }, [screenWidth]);

  const buttonMoreClassName = `movies-cards__btn-more ${cards !== null && cardNumber >= cards.length && 'movies-cards__btn-more_hidden'}`;

  return (
    <section className='movies-cards' aria-label="список фильмов">
      {(cards === null || cards.length === 0) ? (
        <p className='movies-cards__error'>{moviesErrorMessage.length > 0 ? moviesErrorMessage : 'По вашему запросу ничего не найдено. Попробуйте что-то другое'}</p>
      ) : (
        <>
          <ul className='movies-cards__list'>
            {cards.slice(0, cardNumber).map((card) => {
              return (

                <MoviesCard
                  card={card}
                  key={card.id || card._id}
                  isSaved={isSaved}
                  onSaveMovie={onSaveMovie}
                  onDeleteMovie={onDeleteMovie}
                />

              )
            })}
          </ul>
          <button onClick={showMoreCards} className={buttonMoreClassName}>Ещё</button>
        </>
      )}
    </section>
  );
}

export default MoviesCardList;
