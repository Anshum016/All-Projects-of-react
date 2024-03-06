import logo from './logo.svg';
import './App.css';
import Accordian from './Components/index.jsx';
import RandomColor from './Components/Random Color/Index.jsx';
import StarRating from './Components/star-rating/index.jsx';

function App() {
  return (
    <div className="App">
      {/* Accordian Componenets */}
      {/* <Accordian/> */}
      {/* Random Color Componenet */}
      {/* <RandomColor/> */}
      <star-rating noOfStars={10}/>
    </div>
  );
}

export default App;
