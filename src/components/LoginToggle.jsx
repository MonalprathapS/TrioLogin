// components/LoginToggle.jsx
import React from 'react';
import { User, GraduationCap } from 'lucide-react';

const LoginToggle = ({ userType, onChange }) => (
  <div className="flex mb-6 bg-gray-100 rounded-xl p-1 relative">
    <button
      onClick={() => onChange('student')}
      className={`flex-1 flex items-center justify-center py-3 px-4 rounded-lg transition-all duration-300 ${
        userType === 'student' 
          ? 'bg-blue-500 text-white shadow-lg transform scale-105' 
          : 'text-gray-600 hover:bg-gray-200'
      }`}
    >
      <User className="w-5 h-5 mr-2" />
      Student
    </button>
    <button
      onClick={() => onChange('teacher')}
      className={`flex-1 flex items-center justify-center py-3 px-4 rounded-lg transition-all duration-300 ${
        userType === 'teacher' 
          ? 'bg-green-500 text-white shadow-lg transform scale-105' 
          : 'text-gray-600 hover:bg-gray-200'
      }`}
    >
      <GraduationCap className="w-5 h-5 mr-2" />
      Teacher
    </button>
  </div>
);

export default LoginToggle;
