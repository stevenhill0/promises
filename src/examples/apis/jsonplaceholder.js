export const getData = () => {
  fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((data) => {
      return data.json();
    })
    .then((object) => {
      console.log(object);
    });
};

export const sendData = () => {
  fetch('https://jsonplaceholder.typicode.com/todos/', {
    method: 'POST',
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
  })
    .then((data) => {
      return data.json();
    })
    .then((object) => {
      console.log(object);
    })
    .catch((error) => {
      console.log(`Could not post: ${error}`);
    });
};

// Using async await
export let addTodo = async function (todo) {
  try {
    let resp = await fetch('https://jsonplaceholder.typicode.com/todos/', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(todo),
    });
    let results = await resp.json();

    console.log(results);
  } catch (e) {
    console.error(`Unable to create todo ${e}`);
  }
};

//NOTE: async always returns a Promise
export const retrievePosts = async function (userID) {
  let url = 'https://jsonplaceholder.typicode.com/posts',
    posts = []; // the default array is more as a placeholder, and to tell developer what to expect

  posts = await fetch(url).then((data) => data.json()); // fetching data and assigning to posts variable
  // using then() with await as a one line shorthand to convert json to an object (do not need to convert when using axios: auto-converts)

  const user3Posts = posts.filter((obj) => obj.userId === userID); //obj.userId property is from api
  // can use filter because posts variable is storing an array returned from api
  console.log(user3Posts);
};

// Using an IIFE: if do not have the Promise/async await in a function/module
// The IIFE will wrap it in a function, and allow the use of async await
(async function () {
  let data = await fetch('https://jsonplaceholder.typicode.com/todos');
  let obj = await data.json();
  console.log(obj);
})();

//Using an IIFE inside an IIFE
var MAINAPP = (function (nsp) {
  let url = 'https://jsonplaceholder.typicode.com/';

  (async function () {
    try {
      let data = await fetch(url + 'posts/'),
        posts = await data.json();

      nsp.posts = posts;
    } catch (e) {
      console.log(`Problem retrieving posts: ${e}`);
    }
  })();

  //public
  return nsp;
})(MAINAPP || {});
