export const nameRegExp = /^[а-яА-Яa-zA-ZЁё\-\s]*$/uim;

export const filterMovies = (arr, req) => {
  const reqCondition = req.toLowerCase();

  return arr.filter((film) => film.nameRU.toLowerCase().includes(reqCondition));
};

export const filterShorts = (arr, isShorts) => {
  if (isShorts) {
    return arr.filter((film) => film.duration <= 40);
  } else {
    return arr;
  }
};
