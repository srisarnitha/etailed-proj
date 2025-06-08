import React from 'react';
 import '../../styles/Step3Preview.css';



const Step3 = ({ formData, onChange, setFormData }) => {
  const themes = ['light', 'dark', 'colorful'];
  const layouts = ['grid', 'list', 'compact'];

  const handleThemeSelect = (theme) => {
    setFormData((prev) => ({ ...prev, theme }));
  };

  const handleLayoutSelect = (layout) => {
    setFormData((prev) => ({ ...prev, layout }));
  };

  return (
    <>
      <div className="options">
        {themes.map((theme) => (
          <div
            key={theme}
            className={`option-box ${formData.theme === theme ? 'selected' : ''}`}
            onClick={() => handleThemeSelect(theme)}
          >
            {theme.charAt(0).toUpperCase() + theme.slice(1)} Theme
          </div>
        ))}
      </div>

      <div className="options">
        {layouts.map((layout) => (
          <div
            key={layout}
            className={`option-box ${formData.layout === layout ? 'selected' : ''}`}
            onClick={() => handleLayoutSelect(layout)}
          >
            {layout.charAt(0).toUpperCase() + layout.slice(1)} Layout
          </div>
        ))}
      </div>

      {/* Live Preview Panel */}
      <div className={`preview-panel ${formData.theme} ${formData.layout}`}>
        <h4>Preview:</h4>
        <div className="preview-content">
          <div className="box">Widget 1</div>
          <div className="box">Widget 2</div>
          <div className="box">Widget 3</div>
        </div>
      </div>
    </>
  );
};

export default Step3;
