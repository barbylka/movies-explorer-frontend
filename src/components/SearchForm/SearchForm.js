import './SearchForm.css';

function SearchForm() {
  return (
    <section className='search'>
      <form className='search__form'>
        <div className='search__frame'>
          <label className='search__field'>
            <input
              required
              type='text'
              id='search-text'
              name='movie'
              placeholder='Фильм'
              className='search__input'
            />
          </label>
          <button className='search__submit-btn' type='submit' />
        </div>
        <label className='search__field' for>Короткометражки</label>
        <input
          type='radio'
          id='search-radio'
          name='short'
          className='search__radio'
        />
      </form>
    </section >
  );
}

export default SearchForm;
