import './App.css';
import HomePage from './containers/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RandomClue from './containers/RandomClue';
import FirebaseClue from './containers/FirebaseClue';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/random-clue" element={<RandomClue />} />
        <Route path="/firebase-clue" element={<FirebaseClue />} />
      </Routes>
    </Router>
  );
}

export default App;
