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

//NOTE: async always returns a Promise
export const retrievePosts = async function (userID) {
  let url = 'https://jsonplaceholder.typicode.com/posts',
    posts = []; // the default array is more as a placeholder, and to tell developer what to expect

  posts = await fetch(url).then((data) => data.json()); // fetching data and assigning to posts variable
  // using then() with await as a one line shorthand to convert json to an object

  const user3Posts = posts.filter((obj) => obj.userId === userID); //obj.userId property is from api
  // can use filter because posts variable is storing an array returned from api
  console.log(user3Posts);
};
