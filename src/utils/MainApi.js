class MainApi {
  constructor(args) {
    this._baseUrl = args.baseUrl;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(res.status);
    }
  }

  register(name, email, password) {
    return fetch(this._baseUrl + "/signup", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: 'include',
      body: JSON.stringify({ name, email, password }),
    }).then((res) => this._checkResponse(res));
  }

  authorize(email, password) {
    return fetch(this._baseUrl + "/signin", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: 'include',
      body: JSON.stringify({ email, password }),
    }).then((res) => this._checkResponse(res));
  }

  signout() {
    return fetch(this._baseUrl + "/signout", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: 'include',
    }).then((res) => this._checkResponse(res));
  }

  getUserInfo() {
    return fetch(this._baseUrl + "/users/me", {
      headers: {
        "Content-Type": "application/json",
      },
      credentials: 'include',
    }).then((res) => this._checkResponse(res));
  }

  updateUserInfo(data) {
    return fetch(this._baseUrl + "/users/me", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: 'include',
      body: JSON.stringify({
        name: data.name,
        email: data.email,
      }),
    }).then((res) => this._checkResponse(res));
  }

  saveMovie(data) {
    return fetch(this._baseUrl + "/movies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: 'include',
      body: JSON.stringify({
        country: data.country,
        director: data.director,
        duration: data.duration,
        year: data.year,
        description: data.description,
        image: data.image,
        trailerLink: data.trailerLink,
        thumbnail: data.thumbnail,
        movieId: data.movieId,
        nameRU: data.nameRU,
        nameEN: data.nameEN,
      }),
    }).then((res) => this._checkResponse(res));
  }

  getMovies() {
    return fetch(this._baseUrl + "/movies", {
      headers: {
        "Content-Type": "application/json",
      },
      credentials: 'include',
    }).then((res) => this._checkResponse(res));
  };

  deleteMovie(movieId) {
    return fetch(this._baseUrl + `/movies/${movieId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: 'include',
    }).then((res) => this._checkResponse(res));
  }

};

const mainApi = new MainApi({
  baseUrl: "http://localhost:3001",
});

export default mainApi;
