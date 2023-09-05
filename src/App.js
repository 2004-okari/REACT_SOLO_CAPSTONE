import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Teams from './components/Teams';
import Players from './components/Players';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Teams />} />
        <Route path="/players" element={<Players />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
