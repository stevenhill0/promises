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
