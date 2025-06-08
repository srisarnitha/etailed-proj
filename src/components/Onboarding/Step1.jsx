import React from 'react';
import { FaUser, FaEnvelope } from 'react-icons/fa';

const Step1 = ({ formData, onChange }) => {
  return (
    <>
      <div className="input-group">
        <span className="input-icon"><FaUser /></span>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={onChange}
        />
      </div>
      <div className="input-group">
        <span className="input-icon"><FaEnvelope /></span>
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={onChange}
        />
      </div>
    </>
  );
};

export default Step1;
