import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import UserForm from '../UserForm/UserForm';
import './Register.css';
import { useValidation } from '../../utils/validation';

function Register({ onRegister, statusMessage }) {
  const [data, setData] = React.useState({
    name: "",
    email: "",
    password: "",
  });
  const nameValid = useValidation(true);
  const emailValid = useValidation(true);
  const passwordValid = useValidation(true);

  const isFormWrong = nameValid.isWrong || emailValid.isWrong || passwordValid.isWrong;

  const submitButtonClassName = `form__button ${isFormWrong && 'form__button_disabled'}`;

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  function handleSubmit(e) {
    e.preventDefault();
    onRegister(data.name, data.email, data.password);
  };

  return (
    <section className='register'>
      <Logo />
      <UserForm
        title="Добро пожаловать!"
        onSubmit={handleSubmit}
      >
        <fieldset className='form__inputs'>
          <label className='form__label'>
            Имя
            <input
              type="text"
              id="name-input"
              required
              className='form__input'
              name='name'
              minLength='2'
              maxLength='30'
              placeholder='Имя'
              onChange={(e) => {
                handleChange(e);
                nameValid.onChange(e);
              }}
            />
            <span className='form__text-error'>{nameValid.isWrong && nameValid.errorMessage}</span>
          </label>
          <label className='form__label'>
            E-mail
            <input
              type="email"
              id="email-input"
              required
              className='form__input'
              name='email'
              placeholder='E-mail'
              onChange={(e) => {
                handleChange(e);
                emailValid.onChange(e);
              }}
            />
            <span className='form__text-error'>{emailValid.isWrong && emailValid.errorMessage}</span>
          </label>
          <label className='form__label'>
            Пароль
            <input
              className='form__input'
              type="password"
              id="password-input"
              required
              name='password'
              placeholder='Пароль'
              onChange={(e) => {
                handleChange(e);
                passwordValid.onChange(e);
              }}
            />
            <span className='form__text-error'>{passwordValid.isWrong && passwordValid.errorMessage}</span>
          </label>
        </fieldset>
        <span className='form__profile-error'>{(statusMessage.length !== 0) && statusMessage}</span>
        <button
          className={submitButtonClassName}
          type='submit'
          disabled={isFormWrong}
        >
          Зарегистрироваться
        </button>
        <p className='form__tip'>
          Уже зарегистрированы?
          <Link className='form__link' to='/signin'>Войти</Link>
        </p>
      </UserForm>
    </section >
  );
}

export default Register;
