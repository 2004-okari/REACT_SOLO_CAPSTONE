import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTeams } from '../redux/teamsSlice';

function Teams() {
  const dispatch =  useDispatch()
  const teams =  useSelector(state => state.teams.teams);
  console.log(teams);

  useEffect(() => {
    dispatch(fetchTeams())
  })
  return (
    <>
      
    </>
  )
}

export default Teams