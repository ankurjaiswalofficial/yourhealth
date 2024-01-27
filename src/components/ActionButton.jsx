import React from 'react';

function ActionButton() {
  return (
    <div className="action">
      <a href="tel:1800 121 911 911" className="call_button">
        <i className="fa-solid fa-phone-volume" aria-hidden="true"></i> &nbsp; 1800 121 911 911
      </a>
    </div>
  );
}

export default ActionButton;
