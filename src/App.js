import './App.css';
import { Routes, Route } from 'react-router-dom';
import StarshipList from './pages/StarshipList/StarshipList';
import StarshipDetails from './pages/StarshipDetails/StarshipDetails';

function App() {
  return (
    <div className='App'>
        <Routes>
          <Route path="/starship" element={<StarshipDetails />} />
          <Route path="/" element={<StarshipList />} />
        </Routes>
    </div>
  );
}

export default App;
