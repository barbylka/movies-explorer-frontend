import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import UserForm from '../UserForm/UserForm';
import './Login.css';
import { useValidation } from '../../utils/validation';

function Login() {
  const emailValid = useValidation(true);
  const passwordValid = useValidation(true);

  const isFormWrong = emailValid.isWrong || passwordValid.isWrong;

  const submitButtonClassName = `form__button ${isFormWrong && 'form__button_disabled'}`;

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <section className='login'>
      <Logo />
      <UserForm
        title="Рады видеть!"
        onSubmit={handleSubmit}
      >
        <fieldset className='form__inputs'>
          <label className='form__label'>
            E-mail
            <input
              className='form__input'
              type="email"
              id="email-input"
              name='email'
              placeholder='E-mail'
              required
              onChange={(e) => {
                emailValid.onChange(e);
              }}
            />
            <span className='form__text-error email-input-error'>{emailValid.isWrong && emailValid.errorMessage}</span>
          </label>
          <label className='form__label'>
            Пароль
            <input
              className='form__input'
              type="password"
              id="password-input"
              name='password'
              placeholder='Пароль'
              required
              onChange={(e) => {
                passwordValid.onChange(e);
              }}
            />
            <span className='form__text-error password-input-error'>{passwordValid.isWrong && passwordValid.errorMessage}</span>
          </label>
        </fieldset>
        <button
          className={submitButtonClassName}
          type='submit'
          disabled={isFormWrong}
        >
          Войти
        </button>
        <p className='form__tip'>
          Ещё не зарегистрированы?
          <Link className='form__link' to='/signup'>Регистрация</Link>
        </p>
      </UserForm>
    </section >
  );
}

export default Login;
