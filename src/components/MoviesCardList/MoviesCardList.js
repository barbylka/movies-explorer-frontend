import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';
import cards from '../../utils/cards';

function MoviesCardList({ isSaved }) {
  return (
    <section className='movies-cards' aria-label="список фильмов">
      {(cards.length === 0) ? (
        <p className='movies-cards__error'>По вашему запросу ничего не найдено. Попробуйте что-то другое</p>
      ) : (
        <>
          <ul className='movies-cards__list'>
            {cards.map((card) => {
              return (
                <MoviesCard
                  card={card}
                  key={card._id}
                  isSaved={isSaved}
                />
              )
            })}
          </ul>
          <button className='movies-cards__btn-more'>Ещё</button>
        </>
      )}
    </section>
  );
}

export default MoviesCardList;
