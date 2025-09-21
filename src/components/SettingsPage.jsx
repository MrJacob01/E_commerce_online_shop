import React from 'react';
import { ArrowLeft } from 'lucide-react';

const SettingsPage = ({ settings, onUpdateSettings, onBack }) => {
  const toggle = (key) => onUpdateSettings({ ...settings, [key]: !settings[key] });

  return (
    <div>
      <div className="bg-white dark:bg-gray-800 px-4 py-3 flex items-center gap-3">
        <button onClick={onBack} className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
          <ArrowLeft className="w-4 h-4 text-gray-600 dark:text-gray-200" />
        </button>
        <h1 className="text-lg font-semibold">Settings</h1>
      </div>

      <div className="px-4 py-3 space-y-3">
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 flex items-center justify-between">
          <div>
            <p className="font-medium">Push notifications</p>
            <p className="text-xs text-gray-500">Enable order and promo alerts</p>
          </div>
          <label className="inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only" checked={!!settings.notifications} onChange={() => toggle('notifications')} />
            <div className={`w-10 h-6 rounded-full transition-colors ${settings.notifications ? 'bg-orange-500' : 'bg-gray-300'}`}>
              <div className={`w-5 h-5 bg-white rounded-full transform transition-transform ${settings.notifications ? 'translate-x-5' : 'translate-x-0'} mt-0.5 ml-0.5`} />
            </div>
          </label>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 flex items-center justify-between">
          <div>
            <p className="font-medium">Dark theme</p>
            <p className="text-xs text-gray-500">Experimental</p>
          </div>
          <label className="inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only" checked={!!settings.dark} onChange={() => toggle('dark')} />
            <div className={`w-10 h-6 rounded-full transition-colors ${settings.dark ? 'bg-orange-500' : 'bg-gray-300'}`}>
              <div className={`w-5 h-5 bg-white rounded-full transform transition-transform ${settings.dark ? 'translate-x-5' : 'translate-x-0'} mt-0.5 ml-0.5`} />
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
