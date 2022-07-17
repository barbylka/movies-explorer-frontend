import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox({ onHandleCheckbox, isChecked }) {

  return (
    <label className='checkbox'>Короткометражки
      <input
        type='checkbox'
        id='input-checkbox'
        name='short'
        className='checkbox__input'
        checked={isChecked}
        onChange={onHandleCheckbox}
      />
      <span className='checkbox__pseudo-item' />
    </label>
  );
}

export default FilterCheckbox;
