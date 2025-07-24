// components/StudentLogin.jsx
import React, { useState } from 'react';
import { User, Eye, EyeOff } from 'lucide-react';

const StudentLogin = ({ onSubmit }) => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...formData, userType: 'student' });
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-2xl border border-amber-100 relative overflow-hidden">
      <div className="flex justify-center mb-6">
        <div className="w-24 h-24 rounded-full flex items-center justify-center bg-blue-100 text-blue-600 hover:scale-110 transition-transform">
          <div className="text-center">
            <User size={32} />
            <div className="text-xs mt-1 font-medium">Student</div>
          </div>
        </div>
      </div>

      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold text-gray-800">Welcome back, Student!</h3>
        <p className="text-gray-600 text-sm mt-1">Ready to learn something amazing today?</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="student@example.com"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 pr-12"
              placeholder="Enter your password"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-3 px-4 rounded-lg font-medium text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-transform duration-300 hover:scale-105 shadow-lg"
        >
          🎓 Start Learning
        </button>

        <div className="text-center mt-4">
          <a href="#" className="text-sm text-gray-600 hover:text-amber-600 transition-colors">
            Forgot Password?
          </a>
        </div>
      </form>
    </div>
  );
};

export default StudentLogin;
