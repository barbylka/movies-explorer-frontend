import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';


function SearchForm() {
  return (
    <section className='search'>
      <form className='search__form'>
        <div className='search__frame'>
          <input
            required
            type='text'
            id='search-text'
            name='movie'
            placeholder='Фильм'
            className='search__input'
          />
          <button className='search__submit-btn' type='submit' />
        </div>
        <FilterCheckbox />
      </form>
    </section >
  );
}

export default SearchForm;
