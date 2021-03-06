import React from 'react';

const style = require('./index.scss');

const Ring = () => (
  <g>
    <ellipse
      className={style.slotOuter}
      cx="318"
      cy="284.8"
      rx="249.1"
      ry="247"
    />
    <ellipse
      className={style.slotInner}
      cx="317.7"
      cy="285.4"
      rx="223.2"
      ry="221.4"
    />
    <line
      className={style.slotInner}
      x1="170.8"
      y1="366.8"
      x2="92.7"
      y2="411.4"
    />
    <line
      className={style.slotInner}
      x1="541.3"
      y1="410.8"
      x2="465.2"
      y2="367.5"
    />
    <line className={style.slotInner} x1="318.2" y1="117" x2="317.1" y2="30" />
    <ellipse
      className={style.slotMiddle}
      cx="318"
      cy="284.8"
      rx="249.1"
      ry="247"
    />
    <ellipse
      className={style.st3}
      cx="317.1"
      cy="285.5"
      rx="257.9"
      ry="255.5"
    />
    <circle className={style.slotMiddle} cx="318.2" cy="285.4" r="168.4" />
  </g>
);

export default Ring;
