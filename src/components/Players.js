import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import './more.css';

function Players() {
  const { teamId } = useParams();

  const teams = useSelector((state) => state.teams.teams.teams);
  const team = teams.find((team) => team.idTeam === teamId);

  if (!team) {
    return <p>Loading...</p>;
  }

  return (
    <div className="covered-div">
      <div className="team-div">
        <h2 className="head-text">{team.strTeam}</h2>
        <div className="icon-div">
          <Link className="link" to="/">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24">
              <path fill="currentColor" d="M19.2 2.43L16.778 0L4.8 12l11.978 12l2.422-2.43L9.653 12z" />
            </svg>
          </Link>
        </div>
        <div className="content-div">
          <div className="image-div">
            <img className="image" src={team.strTeamBadge} alt={team.strTeam} />
            <div className="name-div">
              <p className="name">{team.strTeam}</p>
              <p className="name">{team.intFormedYear}</p>
            </div>
          </div>
          <div className="info-div">
            <div className="boxes">
              Year formed:
              <span className="span-text">{team.intFormedYear}</span>
            </div>
            <div className="boxes">
              Stadium:
              <span className="span-text">{team?.strStadium}</span>
            </div>
            <div className="boxes">
              Stadium capacity:
              <span className="span-text">{team?.intStadiumCapacity}</span>
            </div>
            <div className="boxes">
              Location:
              <span className="span-text">{team?.strStadiumLocation}</span>
            </div>
            <div className="boxes">
              Nickname :
              <span className="span-text">{team?.strKeywords}</span>
            </div>
            {team.strKitColour1 && (
              <div className="boxes">
                Kit color 1:
                <div className="span-text" style={{ backgroundColor: team.strKitColour1, width: '16px', height: '16px' }} />
              </div>
            )}
            {team.strKitColour2 && (
              <div className="boxes">
                Kit color 2:
                <div className="span-text" style={{ backgroundColor: team.strKitColour2, width: '16px', height: '16px' }} />
              </div>
            )}
            <div className="boxes">
              Teams Website:
              <a target="_blank" rel="noreferrer" className="span-text" style={{ color: 'red' }} href={team?.strWebsite}>
                {team.strTeam}
              </a>
            </div>
            <div className="boxes">
              Teams Facebook:
              <a target="_blank" rel="noreferrer" className="span-text" style={{ color: 'red' }} href={team?.strFacebook}>
                {team.strTeam}
              </a>
            </div>
            <div className="boxes">
              Teams Twitter:
              <a target="_blank" rel="noreferrer" className="span-text" style={{ color: 'red' }} href={team?.strTwitter}>
                {team.strTeam}
              </a>
            </div>
            <div className="boxes">
              Teams Instagram:
              <a target="_blank" rel="noreferrer" className="span-text" style={{ color: 'red' }} href={team?.strInstagram}>
                {team.strTeam}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Players;
