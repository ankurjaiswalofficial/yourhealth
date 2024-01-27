import React from 'react';

function Logo() {
  return (
    <div className="header_logo">
      <a href="https://www.red.health/">
        <img
          loading="lazy"
          src="https://redhealth.gumlet.io/build/images/red-health-logo.svg?w=240&amp;dpr=1.3"
          data-src="https://redhealth.gumlet.io/build/images/red-health-logo.svg"
          data-gmlazy="false"
          alt="Red Health"
          className="gm-loaded gm-observing gm-observing-cb"
        />
      </a>
    </div>
  );
}

export default Logo;
