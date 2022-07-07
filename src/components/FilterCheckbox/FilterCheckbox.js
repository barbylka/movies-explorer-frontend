import './FilterCheckbox.css';

function FilterCheckbox() {
  return (
    <label className='checkbox'>Короткометражки
      <input
        type='checkbox'
        id='input-checkbox'
        name='short'
        className='checkbox__input'
      />
      <span className='checkbox__pseudo-item' />
    </label>
  );
}

export default FilterCheckbox;
