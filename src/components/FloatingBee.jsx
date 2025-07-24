// components/FloatingBee.jsx
import React from 'react';

const FloatingBee = ({ delay = 0 }) => (
  <div 
    className="absolute animate-bounce"
    style={{ animationDelay: `${delay}s`, animationDuration: '3s' }}
  >
    <div className="text-4xl">🐝</div>
  </div>
);

export default FloatingBee;
