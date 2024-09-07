import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { handleSuccess } from '../../utils/toast';
import { IoPowerOutline } from 'react-icons/io5';
import { Tooltip } from 'react-tooltip';

const Dashboard = () => {
  const [loggedInUser, setLoggedInUser] = useState('');
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('loggedInUser');
    handleSuccess('Logged out successfully');
    setTimeout(() => {
      navigate('/login');
    }, 1000);
  };

  useEffect(() => {
    setLoggedInUser(localStorage.getItem('loggedInUser'));
  }, []);

  return (
    <>
      <div className="bg-gray-100 min-h-screen">
        <div className="mb-6 p-9 rounded-lg shadow-lg bg-blue-600 text-white">
          <h2 className="flex items-center justify-between text-2xl font-semibold">
            <span>
              Welcome to Your Dashboard, {loggedInUser.split(' ')[0]}!!
            </span>
            <div className="relative">
              <a id="not-clickable">
                <IoPowerOutline
                  className="text-white text-2xl cursor-pointer"
                  onClick={handleLogout}
                />
              </a>
              <Tooltip anchorSelect="#not-clickable" clickable>
                Logout
              </Tooltip>
            </div>
          </h2>
        </div>
        <div className="max-w-5xl rounded-lg shadow-lg overflow-hidden bg-purple-400">
          <div className="p-6 bg-indigo-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Date</h2>
            <p className="text-gray-600 text-base">Name</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
