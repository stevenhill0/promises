import './App.css';
import swapi from './examples/apis/starwars';
import { getData, sendData } from './examples/apis/jsonplaceholder';
import createTimeout from './examples/createpromise/createTimeout';

swapi(3);

getData();
sendData();

createTimeout(2000)
  .then(() => {
    console.log('Done');
  })
  .catch((error) => {
    console.log('Not a number: ' + error);
  });

function App() {
  return <div>hello</div>;
}

export default App;
