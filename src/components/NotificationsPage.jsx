import React from 'react';
import { ArrowLeft, Bell } from 'lucide-react';

const NotificationsPage = ({ notifications, onMarkAllRead, onBack }) => {
  return (
    <div>
      <div className="bg-white dark:bg-gray-800 px-4 py-3 flex items-center gap-3">
        <button onClick={onBack} className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
          <ArrowLeft className="w-4 h-4 text-gray-600 dark:text-gray-200" />
        </button>
        <h1 className="text-lg font-semibold">Notifications</h1>
        <div className="ml-auto">
          <button onClick={onMarkAllRead} className="text-xs text-orange-500">Mark all read</button>
        </div>
      </div>

      <div className="px-4 py-3">
        {notifications.length === 0 ? (
          <div className="text-center py-16 text-gray-500">
            <Bell className="w-10 h-10 mx-auto mb-2 text-gray-300" />
            No notifications
          </div>
        ) : (
          <div className="space-y-2">
            {notifications.map((n) => (
              <div key={n.id} className={`bg-white dark:bg-gray-800 rounded-2xl p-4 ${n.read ? 'opacity-70' : ''}`}>
                <p className="text-sm font-medium">{n.title}</p>
                <p className="text-xs text-gray-500">{n.body}</p>
                <p className="text-[10px] text-gray-400 mt-1">{new Date(n.createdAt).toLocaleString()}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default NotificationsPage;
