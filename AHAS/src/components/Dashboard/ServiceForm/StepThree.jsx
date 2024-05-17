import React, { Fragment } from "react";

export const StepThree = ({
  step,
  formData,
  customer,
  loading,
  handlePreviousStep,
}) => {
  return (
    <Fragment>
      {step === 3 && (
        <div className="p-4 sm:p-6 bg-white rounded-lg shadow-lg max-w-3xl mx-auto ">
          <h2 className="text-xl font-semibold text-gray-700 mb-6">
            Step 3: Konfirmasi
          </h2>
          <div className="space-y-4 text-sm font-medium text-gray-600">
            {[
              ["Full Name", customer?.fullname, "None"],
              ["Alamat", customer?.address, "None"],
              ["Nomor HP", customer?.phone_number, "0"],
              ["Nomor BP", formData?.plate_number, "Belum di isi"],
              ["Type Motor", formData?.motorbike_type, "Belum di isi"],
              ["Jenis Service", formData?.service_type, "Belum dipilih"],
              ["Jenis Service", formData?.service_type, "Belum dipilih"],
              ["Jadwal Service", formData?.scheduled_date, "Belum dipilih"],
              [
                "Service Perbaikan",
                formData?.additional_service,
                "Tidak ada kendala",
              ],
            ].map(([label, value, defaultValue], index) => (
              <div key={index} className="flex flex-col">
                <span className="text-md font-semibold">{label}:</span>
                <span
                  className={` px-4 rounded-md text-md font-semibold text-center ${
                    value
                      ? "bg-green-100 text-green-700"
                      : label === "Service Perbaikan"
                      ? "bg-cyan-100 text-cyan-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {loading ? "LOADING..." : value || defaultValue}
                </span>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-2 mt-6">
            <button
              className="flex-1 py-3 text-gray-700 bg-gray-100 rounded-xl hover:bg-gray-200 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              onClick={handlePreviousStep}
            >
              Kembali
            </button>
            <button
              className="flex-1 py-3 text-white bg-gray-900 rounded-xl hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-black"
              onClick={() => console.log("Form submitted")}
            >
              Daftar Service
            </button>
          </div>
        </div>
      )}
    </Fragment>
  );
};
