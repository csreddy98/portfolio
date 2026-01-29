import React from 'react';
import './Tooltip.css';

const Tooltip = ({ text, visible, x, y }) => {
  if (!visible) return null;

  const style = {
    left: `${x}px`,
    top: `${y}px`,
    transform: 'translateX(-50%)',
  };

  return (
    <div className={`tooltip ${visible ? 'visible' : ''}`} style={style}>
      {text}
    </div>
  );
};

export default Tooltip;
