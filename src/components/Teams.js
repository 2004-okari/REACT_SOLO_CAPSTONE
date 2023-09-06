import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import './teams.css';

function Teams() {
  const teams = useSelector((state) => state.teams.teams.teams);
  const loading = useSelector((state) => state.teams.loading);
  const error = useSelector((state) => state.teams.error);

  let content;

  if (loading) {
    content = (
      <div className="loader">
        <div data-glitch="Loading..." className="glitch">
          Loading...
        </div>
      </div>
    );
  } else if (error) {
    content = <div className="error">{error}</div>;
  } else if (teams) {
    content = (
      <div className="box">
        {teams.map((team) => (
          <div className="box-2" key={team.idTeam}>
            <div className="cover-div">
              <img className="image" src={team.strTeamFanart4} alt="logo" />
            </div>
            <div className="inner-div">
              <p className="text-1">{team.strTeam}</p>
              <p className="text-2">
                since
                {team.intFormedYear}
              </p>
            </div>
            <div className="icon-div">
              <Link className="link" to={`/players/${team.idTeam}`}>
                <svg
                  className="text-3"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M4.8 21.57L7.222 24L19.2 12L7.222 0L4.8 2.43L14.347 12z"
                  />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
    );
  } else {
    content = null;
  }

  return (
    <div className="section">
      <Navigation className="header-text" />
      <div className="section-2">{content}</div>
    </div>
  );
}

export default Teams;
