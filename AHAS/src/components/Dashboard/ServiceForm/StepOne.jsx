import React, { Fragment } from "react";

export const StepOne = ({ step, customer, handleNextStep, handleChange }) => {
  return (
    <Fragment>
      {step === 1 && (
        <div>
          <h2 className="mt-4 text-lg font-medium text-gray-500">
            Step 1: Data Pelanggan
          </h2>
          <div className="mt-12 space-y-2">
            <label htmlFor="fullname" className="block text-sm text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="fullname"
              value={customer?.fullname || "Loading..."}
              onChange={(e) => handleChange("fullname", e.target.value)}
              className="block w-full h-12 px-4 py-2 text-blue-500 duration-200 border rounded-lg appearance-none bg-chalk border-zinc-300 placeholder-zinc-300 focus:border-zinc-300 focus:outline-none focus:ring-zinc-300 sm:text-sm"
            />
          </div>
          <div className="mt-4 space-y-2">
            <label
              htmlFor="address"
              className="block mb-3 text-sm font-medium text-black"
            >
              Alamat
            </label>
            <input
              type="text"
              id="address"
              value={customer?.address || "Loading..."}
              readOnly
              className="block w-full h-12 px-4 py-2 text-blue-500 duration-200 border rounded-lg appearance-none bg-chalk border-zinc-300 placeholder-zinc-300 focus:border-zinc-300 focus:outline-none focus:ring-zinc-300 sm:text-sm"
              placeholder="Enter your email"
            />
          </div>
          <div className="mt-4 space-y-2">
            <label
              htmlFor="phone"
              className="block mb-3 text-sm font-medium text-black"
            >
              Nomor HP
            </label>
            <input
              type="number"
              id="phone"
              value={customer?.phone_number || "0"}
              readOnly
              className="block w-full h-12 px-4 py-2 text-blue-500 duration-200 border rounded-lg appearance-none bg-chalk border-zinc-300 placeholder-zinc-300 focus:border-zinc-300 focus:outline-none focus:ring-zinc-300 sm:text-sm"
              placeholder="Enter your email"
            />
          </div>
          <div className="mt-4">
            <button
              className="inline-flex items-center justify-center w-full h-12 gap-3 px-5 py-3 font-medium text-white duration-200 bg-gray-900 rounded-xl hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-black"
              onClick={handleNextStep}
            >
              Selanjutnya
            </button>
          </div>
        </div>
      )}
    </Fragment>
  );
};
