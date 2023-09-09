import './App.css';
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchTeams } from './redux/teamsSlice';
import Teams from './components/Teams';
import Players from './components/Players';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTeams());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Teams />} />
        <Route path="/players/:teamId" element={<Players />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
