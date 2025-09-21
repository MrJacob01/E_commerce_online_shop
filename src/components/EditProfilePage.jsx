import React, { useState } from 'react';
import { ArrowLeft, User, Phone } from 'lucide-react';

const EditProfilePage = ({ profile, onSave, onBack }) => {
  const [form, setForm] = useState(profile);

  const submit = (e) => {
    e.preventDefault();
    onSave(form);
  };

  return (
    <div>
      <div className="bg-white px-4 py-3 flex items-center gap-3">
        <button onClick={onBack} className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
          <ArrowLeft className="w-4 h-4 text-gray-600" />
        </button>
        <h1 className="text-lg font-semibold">Edit Profile</h1>
      </div>

      <form onSubmit={submit} className="px-4 py-3 space-y-3">
        <div className="bg-white rounded-2xl p-4 space-y-3">
          <div>
            <label className="text-xs text-gray-600 mb-1 block">Name</label>
            <div className="relative">
              <User className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
              <input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full border rounded-lg pl-9 pr-3 py-2.5 text-sm"
                placeholder="Your name"
              />
            </div>
          </div>
          <div>
            <label className="text-xs text-gray-600 mb-1 block">Email</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full border rounded-lg px-3 py-2.5 text-sm"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="text-xs text-gray-600 mb-1 block">Phone</label>
            <div className="relative">
              <Phone className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
              <input
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full border rounded-lg pl-9 pr-3 py-2.5 text-sm"
                placeholder="+998 xx xxx xx xx"
              />
            </div>
          </div>
        </div>

        <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-sm bg-white border-t p-4">
          <button type="submit" className="w-full bg-orange-500 text-white py-3 rounded-2xl font-semibold text-lg hover:bg-orange-600">
            Save changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfilePage;
