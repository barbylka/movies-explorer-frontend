import React from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

function SearchForm({ onGetMovies, isSaved }) {
  const [request, setRequest] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState('');
  const [checked, setChecked] = React.useState(false);

  const handleCheckbox = () => {
    setChecked(!checked);
  }

  const checkRequest = (req) => {
    const condition = req === '';
    if (condition) {
      setErrorMessage('Нужно ввести ключевое слово');
    } else {
      setErrorMessage('');
    };
    return condition;
  }

  const handleChange = (evt) => {
    setRequest(evt.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!checkRequest(request)) {
      onGetMovies(request, checked, isSaved);
    };
  }

  React.useEffect(() => {
    const moviesLocal = JSON.parse(localStorage.getItem('movie-search'));
    if (!isSaved && moviesLocal) {
      setRequest(moviesLocal.request);
      setChecked(moviesLocal.shorts);
    } else {
      setRequest('');
      setChecked(false);
    }
  }, [isSaved])

  return (
    <section className='search'>
      <form className='search__form' onSubmit={handleSubmit} noValidate>
        <div className='search__frame'>
          <input
            required
            type='text'
            id='search-input'
            name='movie'
            placeholder='Фильм'
            className='search__input'
            onChange={handleChange}
            value={request}
          />
          <span className='search__text-error'>{errorMessage}</span>
          <button className='search__submit-btn' type='submit' />
        </div>
        <FilterCheckbox onHandleCheckbox={handleCheckbox} isChecked={checked} />
      </form>
    </section >
  );
}

export default SearchForm;
