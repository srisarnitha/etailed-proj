import React, { useState, useContext } from 'react';
import Step1 from './Onboarding/Step1';
import Step2 from './Onboarding/Step2';
import Step3 from './Onboarding/Step3';
import ProgressBar from './Onboarding/ProgressBar';
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/Onboarding.css';

const Onboarding = () => {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    industry: '',
    size: 1,
    theme: 'light',
    layout: 'grid',
  });

  const { setUserData } = useContext(UserContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    const parsedValue = type === 'number' ? parseInt(value) : value;

    setFormData((prev) => ({ ...prev, [name]: parsedValue }));
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep((prev) => prev + 1);
    } else {
      alert('Please complete the required fields.');
    }
  };

  const handleBack = () => {
    if (step > 1) setStep((prev) => prev - 1);
  };

  const handleSubmit = () => {
    if (validateStep(3)) {
      setUserData(formData);
      navigate('/dashboard');
    } else {
      alert('Please complete all fields before submitting.');
    }
  };

  const validateStep = (s) => {
    if (s === 1) return formData.name.trim() && formData.email.trim();
    if (s === 2) return formData.company && formData.industry && formData.size > 0;
    return true;
  };

  return (
    <div className="onboarding-container">
      <motion.div
        className="onboarding-box"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <ProgressBar step={step} />
        {step === 1 && (
          <Step1 formData={formData} onChange={handleChange} />
        )}
        {step === 2 && (
          <Step2 formData={formData} onChange={handleChange} />
        )}
        {step === 3 && (
          <Step3 formData={formData} onChange={handleChange} setFormData={setFormData} />
        )}

        <div className="nav-buttons">
          {step > 1 && <button onClick={handleBack}>Back</button>}
          {step < 3 ? (
            <button onClick={handleNext}>Next</button>
          ) : (
            <button onClick={handleSubmit}>Submit</button>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Onboarding;
