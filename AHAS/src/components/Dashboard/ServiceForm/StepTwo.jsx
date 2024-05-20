import React, { Fragment } from "react";
import Select from "react-select";
import { useState } from "react";
import { motorbikeOptions } from "../../../utils/data";

export const StepTwo = ({
  step,
  handleChange,
  handleNextStep,
  handlePreviousStep,
}) => {
  const [selectedMotorbike, setSelectedMotorbike] = useState(null);

  // Calculate the minimum and maximum dates for the scheduled date
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1); // Next day
  const twoDaysAhead = new Date(today);
  twoDaysAhead.setDate(twoDaysAhead.getDate() + 2); // Two days ahead

  // Format the dates as strings
  const minDate = tomorrow.toISOString().split("T")[0];
  const maxDate = twoDaysAhead.toISOString().split("T")[0];

  // Handle motorbike type change
  const handleMotorbikeTypeChange = (selectedOption) => {
    setSelectedMotorbike(selectedOption);
    handleChange("motorbike_type", selectedOption.value);
  };

  return (
    <Fragment>
      {step === 2 && (
        <div>
          <h2 className="mt-4 mb-4 text-lg font-medium text-gray-500">
            Step 2: Lengapi Data Servis
          </h2>
          <div className="mt-12 space-y-2">
            <label
              htmlFor="plate_number"
              className="block mb-3 text-sm font-medium text-black"
            >
              Nomor BP
            </label>
            <input
              type="text"
              id="plate_number"
              onChange={(e) => handleChange("plate_number", e.target.value)}
              className="block w-full h-12 px-4 py-2 text-blue-500 duration-200 border rounded-lg appearance-none  border-zinc-300 placeholder-zinc-300 focus:border-zinc-300 focus:outline-none focus:ring-zinc-300 sm:text-sm"
              placeholder="Masukan nomor BP"
              required
            />
          </div>
          <div className="mt-4 space-y-2">
            <label
              htmlFor="motorbike_type"
              className="block mb-3 text-sm font-medium text-black"
            >
              Jenis Motor / Tipe Motor
            </label>
            <Select
              options={motorbikeOptions}
              value={selectedMotorbike}
              onChange={handleMotorbikeTypeChange} // Update this line
              placeholder="Pilih jenis motor..."
            />
          </div>
          <div className="mt-4 space-y-2">
            <label
              htmlFor="serviceType"
              className="block mb-3 text-sm font-medium text-black"
            >
              Tipe Service
            </label>
            <div className="flex items-center space-x-4">
              <input
                type="checkbox"
                id="oil_change"
                name="service_type"
                value="ganti_oli"
                onChange={(e) => handleChange("service_type", e.target.value)}
              />
              <label htmlFor="oil_change">Ganti Oli</label>
              <input
                type="checkbox"
                id="light_service"
                name="service_type"
                value="service_ringan"
                onChange={(e) => handleChange("service_type", e.target.value)}
              />
              <label htmlFor="light_service">Service Ringan</label>
              <input
                type="checkbox"
                id="heavy_service"
                name="service_type"
                value="service_lengkap"
                onChange={(e) => handleChange("service_type", e.target.value)}
              />
              <label htmlFor="heavy_service">Service Lengkap</label>
            </div>
          </div>
          <div className="mt-4 space-y-2">
            <label
              htmlFor="scheduled_date"
              className="block mb-3 text-sm font-medium text-black"
            >
              Scheduled Date and Time (10am - 3pm)
            </label>
            <input
              type="datetime-local"
              id="scheduled_date"
              min={minDate + "T10:00"}
              max={maxDate + "T15:00"}
              onChange={(e) => handleChange("scheduled_date", e.target.value)}
              className="block w-full h-12 px-4 py-2 text-blue-500 duration-200 border rounded-lg appearance-none bg-chalk border-zinc-300 placeholder-zinc-300 focus:border-zinc-300 focus:outline-none focus:ring-zinc-300 sm:text-sm"
              required
            />
          </div>
          <div className="mt-4 space-y-2">
            <label
              htmlFor="serviceDetails"
              className="block mb-3 text-sm font-medium text-black"
            >
              Service Perbaikan ( Jika ada )
            </label>
            <input
              type="text"
              id="serviceDetails"
              onChange={(e) =>
                handleChange("additional_service", e.target.value)
              }
              className="block w-full h-12 px-4 py-2 text-blue-500 duration-200 border rounded-lg appearance-none bg-chalk border-zinc-300 placeholder-zinc-300 focus:border-zinc-300 focus:outline-none focus:ring-zinc-300 sm:text-sm"
              placeholder="Enter service details"
              required
            />
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            <button
              className="inline-flex items-center justify-center w-full h-12 gap-3 px-5 py-3 font-medium duration-200 bg-gray-100 rounded-xl hover:bg-gray-200 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              onClick={handlePreviousStep}
            >
              Kembali
            </button>
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
