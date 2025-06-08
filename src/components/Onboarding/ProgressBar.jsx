
import React from 'react';
import '../../styles/Onboarding.css';

const ProgressBar = ({ step }) => {
  return (
    <div className="progress-container">
      <div className={`step ${step >= 1 ? 'completed' : ''} ${step === 1 ? 'active' : ''}`}>
        <div className="circle">1</div>
        <p>Personal</p>
      </div>
      <div className={`step ${step >= 2 ? 'completed' : ''} ${step === 2 ? 'active' : ''}`}>
        <div className="circle">2</div>
        <p>Company</p>
      </div>
      <div className={`step ${step >= 3 ? 'completed' : ''} ${step === 3 ? 'active' : ''}`}>
        <div className="circle">3</div>
        <p>Customize</p>
      </div>
    </div>
  );
};

export default ProgressBar;

