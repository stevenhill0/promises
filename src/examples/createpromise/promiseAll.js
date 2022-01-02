//data example
let firstName = function () {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve('Steven');
    }, 1000);
  });
};

let lastName = function () {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve('Hancock');
    }, 3000);
  });
};

let middleName = function () {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve('W.');
    }, 4000);
  });
};

//Promise.all returns all Promises if All were successful
// Can use Promise.race: same as Promise.all except returns only one, resolved or rejected
(async function () {
  //Must place data in Promise.all inside an array
  //Promise.all acts on an array of Promises
  let names = await Promise.all([firstName(), lastName(), middleName()]);
  console.log(names[0] + ' ' + names[2] + ' ' + names[1]);
})();

//async await with multiple fetching of data
//DOot have to use an IIFE
var MAINAPP2 = (function (nsp) {
  let url = 'https://jsonplaceholder.typicode.com/';

  (async function () {
    try {
      let p1 = fetch(url + 'posts/'), //Fetching a Promise
        p2 = fetch(url + 'comments/'),
        p3 = fetch(url + 'todos/');

      let results = await Promise.all([p1, p2, p3]);

      nsp.posts = await results[0].json(); //Remember to use await, because .json() (json -> object conversion) returns a Promise
      nsp.comments = await results[1].json();
      nsp.todos = await results[2].json();
    } catch (e) {
      console.error(`Problem retrieving data: ${e}`);
    }
  })();

  //public
  return nsp;
})(MAINAPP2 || {});
