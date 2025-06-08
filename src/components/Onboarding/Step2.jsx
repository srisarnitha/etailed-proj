import React from 'react';

const Step2 = ({ formData, onChange }) => {
  return (
    <>
      <div className="input-group">
        <input
          type="text"
          name="company"
          placeholder="Company Name"
          value={formData.company}
          onChange={onChange}
        />
      </div>
      <div className="input-group">
        <input
          type="text"
          name="industry"
          placeholder="Industry"
          value={formData.industry}
          onChange={onChange}
        />
      </div>
      <div className="input-group">
        <input
          type="number"
          name="size"
          placeholder="Team Size"
          value={formData.size}
          min={1}
          onChange={onChange}
        />
      </div>
    </>
  );
};

export default Step2;
