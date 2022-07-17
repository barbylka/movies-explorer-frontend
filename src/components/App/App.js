import './App.css';
import { Route, Routes, useNavigate, Navigate } from 'react-router-dom';
import { ProtectedRoute } from '../ProtectedRoute/ProtectedRoute';
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
import mainApi from '../../utils/MainApi';
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import React from 'react';
import moviesApi from '../../utils/MoviesApi';
import { filterMovies, filterShorts } from '../../utils/configuration';

function App() {
  const navigate = useNavigate();

  const [currentUser, setCurrentUser] = React.useState({});
  const [loggedIn, setLoggedIn] = React.useState(false);

  const [statusMessage, setStatusMessage] = React.useState('');

  const [movies, setMovies] = React.useState([]);
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [moviesErrorMessage, setMoviesErrorMessage] = React.useState('');

  const [isWaiting, setIsWaiting] = React.useState(false);

  const user = JSON.parse(localStorage.getItem('user-name'));

  const checkError = (err) => {
    if (err === 401) {
      setStatusMessage('Вы ввели неправильный логин или пароль.');
    } else if (err === 409) {
      setStatusMessage('Пользователь с таким email уже существует.');
    } else {
      setStatusMessage(err);
    }
  }

  //checking authorization
  const checkAuth = () => {
    mainApi
      .getUserInfo()
      .then((data) => {
        if (data.name) {
          setCurrentUser(data);
          setLoggedIn(true);
          localStorage.setItem('user-name', JSON.stringify(data.name));
        }
      })
      .catch((err) => {
        setLoggedIn(false);
      });
  };

  React.useEffect(() => {
    if (loggedIn || user) {
      setMovies(JSON.parse(localStorage.getItem('filtered-movies')));
      getSavedMovies();
      checkAuth();
    }
  }, []);

  //Users' registration
  const handleRegister = (name, email, password) => {
    mainApi
      .register(name, email, password)
      .then((res) => {
        if (res) {
          handleLogin(email, password);
        }
      })
      .catch((err) => {
        checkError(err);
      });
  };

  //Users' login
  const handleLogin = (email, password) => {
    mainApi
      .authorize(email, password)
      .then((res) => {
        if (res) {
          checkAuth();
          mainApi
            .getMovies()
            .then((data) => {
              setSavedMovies(data);
              localStorage.setItem('saved-movies', JSON.stringify(data));
            })
            .catch((err) => {
              console.log(err)
            })
          setStatusMessage('');
          navigate('/movies');
        }
      })
      .catch((err) => {
        checkError(err);
      });
  };

  //Users' sign out and cleaning up local storage
  const signOut = () => {
    mainApi
      .signout()
      .then((res) => {
        if (res) {
          localStorage.removeItem('filtered-movies');
          localStorage.removeItem('movie-search');
          localStorage.removeItem('saved-movies');
          localStorage.removeItem('user-name');
          setCurrentUser({});
          setLoggedIn(false);
          setMovies([]);
          setSavedMovies([]);
          navigate('/');
        };
      })
      .catch((err) => {
        checkError(err);
      })
  };

  //fetch update users' info request
  const handleUpdateUser = (data) => {
    mainApi
      .updateUserInfo(data)
      .then((res) => {
        setCurrentUser(res);
        setStatusMessage('Данные пользователя обновлены!');
        setTimeout(() => {
          setStatusMessage('')
        },
          5000)
      })
      .catch((err) => {
        checkError(err);
      });
  };

  //fetch get movies request
  const getMovies = async (req, isShorts, isSavedRouter) => {
    setIsWaiting(true);
    if (!isSavedRouter) {
      moviesApi
        .getMovies()
        .then((films) => {
          localStorage.removeItem('filtered-movies');
          localStorage.removeItem('movie-search');
          localStorage.setItem('movie-search', JSON.stringify({
            request: req,
            shorts: isShorts
          }));
          const filteredMovies = filterShorts(filterMovies(films, req), isShorts);

          //immidiately filtration
          setMovies(filteredMovies);
          localStorage.setItem('filtered-movies', JSON.stringify(filteredMovies));
          setMoviesErrorMessage('');
          setIsWaiting(false)
        })
        .catch((err) => {
          setIsWaiting(false)
          setMoviesErrorMessage('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз');
        })
    } else {
      const savedMoviesLocal = JSON.parse(localStorage.getItem('saved-movies'));
      await setSavedMovies(filterShorts(filterMovies(savedMoviesLocal, req), isShorts));
      setIsWaiting(false);
    }
  };

  //fetch get saved movies request
  const getSavedMovies = () => {
    mainApi
      .getMovies()
      .then((data) => {
        setSavedMovies(data);
        localStorage.setItem('saved-movies', JSON.stringify(data));
      })
      .catch((err) => {
        console.log(err)
      })
  };

  //fetch save movie request
  const saveMovie = (movie) => {
    mainApi
      .saveMovie(movie)
      .then((newMovie) => {
        getSavedMovies();
      })
      .catch((err) => {
        console.log(err)
      })
  };

  //fetch delete movie request
  const deleteMovie = (movie) => {
    mainApi
      .deleteMovie(movie._id)
      .then((res) => {
        getSavedMovies();
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='page'>
        <Routes>
          <Route
            exact
            path='/'
            element={
              <>
                <Header
                  isLogged={loggedIn}
                />
                <Main />
                <Footer />
              </>
            }
          />
          <Route
            path='/movies'
            element={
              <ProtectedRoute loggedIn={loggedIn} isUser={user}>
                <Header
                  isLogged={loggedIn}
                />
                <SearchForm
                  onGetMovies={getMovies}
                  isSaved={false}
                />
                <Preloader isWaiting={isWaiting} />
                <MoviesCardList
                  cards={movies}
                  isSaved={false}
                  moviesErrorMessage={moviesErrorMessage}
                  onSaveMovie={saveMovie}
                  onDeleteMovie={deleteMovie}
                />
                <Footer />
              </ProtectedRoute>
            }
          />
          <Route
            path='/saved-movies'
            element={
              <ProtectedRoute loggedIn={loggedIn} isUser={user}>
                <>
                  <Header
                    isLogged={loggedIn}
                  />
                  <SearchForm
                    onGetMovies={getMovies}
                    isSaved={true}
                  />
                  <Preloader isWaiting={isWaiting} />
                  <MoviesCardList
                    cards={savedMovies}
                    isSaved={true}
                    moviesErrorMessage={moviesErrorMessage}
                    onDeleteMovie={deleteMovie}
                  />
                  <Footer />
                </>
              </ProtectedRoute>
            }
          />
          <Route
            path='/signup'
            element={
              loggedIn ?
                <Navigate replace={true} to="/movies" /> : <Register onRegister={handleRegister} statusMessage={statusMessage} />
            }
          />
          <Route
            path='/signin'
            element={
              loggedIn ?
                <Navigate replace={true} to="/movies" /> : <Login onLogin={handleLogin} statusMessage={statusMessage} />
            }
          />
          <Route
            path='/profile'
            element={
              <ProtectedRoute loggedIn={loggedIn} isUser={user}>
                <>
                  <Header
                    isLogged={loggedIn}
                  />
                  <Profile onSignOut={signOut} onUpdateUser={handleUpdateUser} statusMessage={statusMessage} />
                </>
              </ProtectedRoute>
            }
          />
          <Route
            path="*"
            element={<PageNotFound />}
          />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
