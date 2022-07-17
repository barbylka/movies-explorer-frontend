class MoviesApi {
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

  getMovies() {
    return fetch(this._baseUrl, {
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => this._checkResponse(res));
  }
};

const moviesApi = new MoviesApi({
  baseUrl: "https://api.nomoreparties.co/beatfilm-movies"
});

export default moviesApi;
