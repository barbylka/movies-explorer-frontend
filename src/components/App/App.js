import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import PageNotFound from '../PageNotFound/PageNotFound';
import Preloader from '../Preloader/Preloader';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';

function App() {
  return (
    <div className='page'>
      <Routes>
        <Route
          exact
          path='/'
          element={
            <>
              <Header isDark={true} isLogged={false} />
              <Main />
              <Footer />
            </>
          }
        />
        <Route
          path='/movies'
          element={
            <>
              <Header isDark={false} isLogged={true} />
              <SearchForm />
              <Preloader isWaiting={false} />
              <MoviesCardList />
              <Footer />
            </>
          }
        />
        <Route
          path='/saved-movies'
          element={
            <>
              <Header isDark={false} isLogged={true} />
              <SearchForm />
              <Preloader isWaiting={false} />
              <MoviesCardList isSaved={true} />
              <Footer />
            </>
          }
        />
        <Route
          path='/signup'
          element={
            <>
              <Register />
            </>
          }
        />
        <Route
          path='/signin'
          element={
            <>
              <Login />
            </>
          }
        />
        <Route
          path='/profile'
          element={
            <>
              <Header isDark={false} isLogged={true} />
              <Profile />
            </>
          }
        />
        <Route
          path="*"
          element={<PageNotFound />}
        />
      </Routes>
    </div>
  );
}

export default App;
