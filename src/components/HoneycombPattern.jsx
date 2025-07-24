// components/HoneycombPattern.jsx
import React from 'react';

const HoneycombPattern = () => (
  <div className="absolute inset-0 opacity-5 overflow-hidden">
    <div className="grid grid-cols-8 gap-2 transform rotate-12 scale-150">
      {[...Array(64)].map((_, i) => (
        <div key={i} className="w-8 h-8 bg-amber-400 hexagon"></div>
      ))}
    </div>
  </div>
);

export default HoneycombPattern;
