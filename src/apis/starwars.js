const swapi = (number) => {
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

export default swapi;
