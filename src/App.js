import './App.css';
import { swapi, swapiFilms, moviePlanets } from './examples/apis/starwars';
import {
  getData,
  sendData,
  retrievePosts,
} from './examples/apis/jsonplaceholder';
import createTimeout from './examples/createpromise/createTimeout';

swapi(3);
swapiFilms();
moviePlanets(2);

getData();
sendData();
retrievePosts(3);

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
