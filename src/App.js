import './App.css';
import HomePage from './containers/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RandomClue from './containers/RandomClue';
import FirebaseClue from './containers/FirebaseClue';
import CategoryPicker from './containers/CategoryPicker';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/random-clue" element={<RandomClue />} />
        <Route path="/firebase-clue" element={<FirebaseClue />} />
        <Route path="/category-picker" element={<CategoryPicker />} />
      </Routes>
    </Router>
  );
}

export default App;
