import React from 'react';

import { useState, useEffect } from 'react';
import './SwitchButton.css';

export const SwitchButton = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggleSwitch = () => {
    setIsOn(!isOn);
  };

  useEffect(() => {
    if (isOn) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isOn]);

  const checkIsOn = isOn ? 'on' : 'off';
  const toggleBGColor = { backgroundColor: isOn ? '#2c76f5' : '' };

  return (
    <>
      <div
        className="toggle-switch"
        style={toggleBGColor}
        onClick={handleToggleSwitch}
      >
        <div className={`switch ${checkIsOn}`}>
          <span className="switch-state">{checkIsOn}</span>
        </div>
      </div>
    </>
  );
};
