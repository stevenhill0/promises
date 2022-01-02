import axios from 'axios';

export const swapi = (number) => {
  const url = 'https://swapi.dev/api/';

  fetch(`${url}/people/${number}`)
    .then((data) => {
      return data.json();
    })
    .then((object) => {
      console.log(object);
      return fetch(object.homeworld); //homeworld is a property on the object
    })
    .then((data) => {
      return data.json(); // Convert the json data from the api into an object using the .json() method.
    })
    .then((object) => {
      console.log(object);
    });
};

export const swapiFilms = async function () {
  let url = 'https://swapi.dev/api/films/',
    filmsData = {},
    films = []; // the default array is more as a placeholder, and to tell developer what to expect

  filmsData = await fetch(url).then((data) => data.json()); // fetching data and assigning to filmsData variable
  // using then() with await as a one line shorthand to convert json to an object

  films = filmsData.results.map((obj) => obj.title);
  // can use map because filmsData variable is storing an array returned from api
  console.log(films);
};

// When using async await, and want to catch an error: Need to use *try catch*
export const moviePlanets = async function (movieNum) {
  try {
    if (isNaN(movieNum)) {
      throw new Error('You must pass a number.'); //When using catch at the bottom, if there is an error it will return this error
    }

    const movieObj = await axios.get(
      `https://swapi.dev/api/planets/${movieNum}/`
    );

    console.log(movieObj);

    let promises = movieObj.data.residents.map((url) => axios.get(url)); // returns an array of Promises (the returned data is an array)

    // using *for await of* loops through the array of Promises, waits, and then returns the data from the Promises
    for await (let resident of promises) {
      console.log(resident.data.name);
    }
  } catch (e) {
    console.error(e);
  }
};
