import React from 'react';
import { Edit, Settings, Bell, LogOut, ShoppingCart, UserRound } from 'lucide-react';


const ProfilePage = ({ userProfile, onOpenOrderHistory, onOpenSettings, onOpenNotifications, onEditProfile }) => {
  return (
    <div>
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 px-4 py-3">
        <h1 className="text-lg font-semibold">Profile</h1>
      </div>

      <div className="px-4">
        {/* Profile Info */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 mb-6 text-center">
          <UserRound className="w-20 h-20 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-gray-900 mb-1">{userProfile.name}</h2>
          <p className="text-gray-500 text-sm">{userProfile.phone}</p>
          <button onClick={onEditProfile} className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-1xl text-sm font-semibold hover:bg-orange-600 transition-colors">
            <Edit className="w-4 h-4 inline mr-2" />
            Edit Profile
          </button>
        </div>

        {/* Menu Options */}
        <div className="space-y-4">
          <button onClick={onOpenOrderHistory} className="w-full bg-white dark:bg-gray-800 rounded-2xl p-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            <div className="flex items-center">
              <ShoppingCart className="w-5 h-5 text-gray-600 mr-3" />
              <span className="font-medium">Order History</span>
            </div>
            <span className="text-gray-400">›</span>
          </button>

          <button onClick={onOpenSettings} className="w-full bg-white dark:bg-gray-800 rounded-2xl p-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            <div className="flex items-center">
              <Settings className="w-5 h-5 text-gray-600 mr-3" />
              <span className="font-medium">Settings</span>
            </div>
            <span className="text-gray-400">›</span>
          </button>

          <button onClick={onOpenNotifications} className="w-full bg-white dark:bg-gray-800 rounded-2xl p-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            <div className="flex items-center">
              <Bell className="w-5 h-5 text-gray-600 mr-3" />
              <span className="font-medium">Notifications</span>
            </div>
            <span className="text-gray-400">›</span>
          </button>

          <button className="w-full bg-white dark:bg-gray-800 rounded-2xl p-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-red-600">
            <div className="flex items-center">
              <LogOut className="w-5 h-5 mr-3" />
              <span className="font-medium">Logout</span>
            </div>
            <span className="text-gray-400">›</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
