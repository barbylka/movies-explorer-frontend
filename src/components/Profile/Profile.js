import { Link } from 'react-router-dom';
import React from 'react';
import UserForm from '../UserForm/UserForm';
import './Profile.css';
import currentUser from '../../utils/user';
import { useValidation } from '../../utils/validation';

function Profile() {
  const [name, setName] = React.useState(`${currentUser.name}`);
  const [email, setEmail] = React.useState(`${currentUser.email}`);
  const [isFormOpened, setIsFormOpened] = React.useState(false);
  const logoutClassName = `form__logout ${isFormOpened && 'form__logout_hidden'}`;
  const editButtonClassName = `form__edit ${isFormOpened && 'form__edit_hidden'}`;
  const nameValid = useValidation(false);
  const emailValid = useValidation(false);

  const isFormWrong = nameValid.isWrong || emailValid.isWrong;

  const submitButtonClassName = `form__button_hidden ${isFormOpened && 'form__button form__button_visible'} ${isFormWrong && 'form__button_disabled'}`;

  function openForm() {
    setIsFormOpened(true);
  }

  function closeForm() {
    setIsFormOpened(false);
  }

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    closeForm();
  }

  return (
    <section className='profile'>
      <UserForm
        title={`Привет, ${currentUser.name}!`}
        onSubmit={handleSubmit}
      >
        <fieldset className='form__inputs form__inputs_type_profile'>
          <label className='form__label form__label_type_profile'>
            Имя
            <input
              className='form__input form__input_type_profile'
              type="text"
              id="name-input"
              required
              name='name'
              minLength='2'
              maxLength='30'
              disabled={!isFormOpened}
              value={name} //temporary solution, while there are no hooks
              onChange={(e) => {
                handleChangeName(e);
                nameValid.onChange(e);
              }}
            />
          </label>
          <label className='form__label form__label_type_profile'>
            E-mail
            <input
              className='form__input form__input_type_profile'
              type="email"
              id="email-input"
              required
              name='email'
              disabled={!isFormOpened}
              value={email} //temporary solution, while there are no hooks
              onChange={(e) => {
                handleChangeEmail(e);
                emailValid.onChange(e);
              }}
            />
          </label>
        </fieldset>
        <span className='form__profile-error profile-input-error'></span>
        <button className={submitButtonClassName} type='submit'>Сохранить</button>
        <button className={editButtonClassName} type='button' onClick={openForm}>Редактировать</button>
        <Link className={logoutClassName} to='/signin'>Выйти из аккаунта</Link>
      </UserForm>
    </section >
  );
}

export default Profile;
