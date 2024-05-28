import React from "react";

const ProfileForm = ({ handleChange, customer }) => {
  return (
    <div className="border-b border-gray-300 pb-12">
      <h2 className="text-2xl font-semibold text-gray-900">
        Informasi Personal
      </h2>
      <p className="mt-1 text-sm text-gray-600">Gunakan alamat yang benar.</p>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-6">
        <div className="sm:col-span-4">
          <label
            htmlFor="address"
            className="block text-sm font-medium text-gray-900"
          >
            Alamat
          </label>
          <div className="mt-2">
            <input
              id="address"
              type="text"
              placeholder={customer?.address || "Alamat"}
              onChange={(e) => handleChange("address", e.target.value)}
              className="block w-full rounded-md border-gray-300 py-2 text-gray-900 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="phone_number"
            className="block text-sm font-medium text-gray-900"
          >
            Nomor HP
          </label>
          <div className="mt-2">
            <input
              type="tel"
              id="phone_number"
              placeholder={customer?.phone_number || "Nomor HP"}
              onChange={(e) => handleChange("phone_number", e.target.value)}
              className="block w-full rounded-md border-gray-300 py-2 text-gray-900 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileForm;
