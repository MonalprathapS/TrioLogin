import React, { useState } from 'react';
import FloatingBee from './components/FloatingBee';
import HoneycombPattern from './components/HoneycombPattern';
import LoginToggle from './components/LoginToggle';
import StudentLogin from './components/StudentLogin';
import TeacherLogin from './components/TeacherLogin';
import AdminLogin from './components/AdminLogin';
import { Sparkles, Star, BookOpen, Settings } from 'lucide-react';


const HoneybeeLogin = () => {
  const [userType, setUserType] = useState('student');
  const [showAdminAccess, setShowAdminAccess] = useState(false);

  const handleUserTypeChange = (type) => setUserType(type);

  const handleAdminAccess = () => {
    setShowAdminAccess(true);
    setUserType('admin');
  };

  const handleBackToUserLogin = () => {
    setShowAdminAccess(false);
    setUserType('student');
  };

  const handleSubmit = (data) => {
    console.log('Login Attempt:', data);
  };

  if (showAdminAccess) {
    return <AdminLogin onBack={handleBackToUserLogin} onSubmit={handleSubmit} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 relative overflow-hidden">
      <HoneycombPattern />
      <FloatingBee delay={0} />
      <FloatingBee delay={1} />
      <FloatingBee delay={2} />

      <button
        onClick={handleAdminAccess}
        className="absolute top-6 right-6 p-3 bg-gray-800 hover:bg-gray-700 text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110 opacity-60 hover:opacity-100"
        title="Admin Access"
      >
        <Settings size={20} />
      </button>

      <div className="absolute top-10 left-10 text-amber-300 opacity-30"><Sparkles size={32} /></div>
      <div className="absolute top-20 right-20 text-orange-300 opacity-30"><Star size={28} /></div>
      <div className="absolute bottom-20 left-20 text-yellow-300 opacity-30"><BookOpen size={30} /></div>

      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <div className="mx-auto w-20 h-20 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center mb-4 shadow-lg">
              <span className="text-3xl">🐝</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">The Honeybee Learning</h1>
            <p className="text-gray-600">Unlock Your Learning Potential</p>
          </div>

          <LoginToggle userType={userType} onChange={handleUserTypeChange} />

          {userType === 'student' && <StudentLogin onSubmit={handleSubmit} />}
          {userType === 'teacher' && <TeacherLogin onSubmit={handleSubmit} />}

          <div className="text-center mt-6 text-gray-500 text-sm">
            <p>© 2025 The Honeybee Learning. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HoneybeeLogin;
