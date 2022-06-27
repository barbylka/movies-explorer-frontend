import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import SearchForm from '../SearchForm/SearchForm';

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
              <Footer />
            </>
          }
        />
        <Route
          path='/saved-movies'
          element={
            <>
              <Header isDark={false} isLogged={true} />
              <Footer />
            </>
          }
        />
        <Route
          path='/profile'
          element={
            <>
              <Header isDark={false} isLogged={true} />
            </>
          }
        />
        <Route
          path='/signup'
          element={
            <>

            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
