import React from 'react';
import '../styles/InfoCards.css';

const InfoCards = ({ teamCount, activeProjects, notifications, theme = 'light', layout = 'grid' }) => (
  <div className={`info-cards-container ${theme} ${layout}`}>
    <div className="info-card">
      <h3>Team Members</h3>
      <p>{teamCount}</p>
    </div>
    <div className="info-card">
      <h3>Active Projects</h3>
      <p>{activeProjects}</p>
    </div>
    <div className="info-card">
      <h3>Notifications</h3>
      <p>{notifications}</p>
    </div>
  </div>
);

export default InfoCards;
