import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTeams } from '../redux/teamsSlice';

function Navigation() {
  const dispatch = useDispatch();
  const teams = useSelector((state) => state.teams.teams.teams);
  const loading = useSelector((state) => state.teams.loading);
  const error = useSelector((state) => state.teams.error);

  useEffect(() => {
    dispatch(fetchTeams());
  }, [dispatch]);

  return (
    <>
      <h1 className='header-text'>Premier League</h1>
    </>
  )
}

export default Navigation