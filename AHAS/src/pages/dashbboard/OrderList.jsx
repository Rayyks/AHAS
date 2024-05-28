import React from "react";
import { Link } from "react-router-dom";
import { useService } from "../../context/ServiceContextProvider";
import TableSkeletonLoader from "../../components/ui/TableSkeletonLoader";
import ServiceTypeBadge from "../../components/ui/ServiceTypes";

const OrderList = () => {
  const { loading, services } = useService();

  // Function to parse the JSON array string
  const parseServiceTypes = (types) => {
    if (typeof types !== "string") return [];
    try {
      return JSON.parse(types);
    } catch (error) {
      console.error("Error parsing service types:", error);
      return [];
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="overflow-x-auto bg-white rounded-lg shadow-md dark:bg-gray-800">
        <table className="min-w-full divide-y-2 divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-900">
            <tr>
              <th className="whitespace-nowrap px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">
                Nomor BP
              </th>
              <th className="whitespace-nowrap px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">
                Jenis Motor
              </th>
              <th className="whitespace-nowrap px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">
                Jenis Service
              </th>
              <th className="whitespace-nowrap px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">
                Status
              </th>
              <th className="whitespace-nowrap px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {loading ? (
              <TableSkeletonLoader />
            ) : services.length === 0 ? (
              <tr>
                <td
                  colSpan="5"
                  className="text-center py-4 text-gray-700 dark:text-gray-100"
                >
                  No service orders found.
                </td>
              </tr>
            ) : (
              services.map((service, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-700 dark:text-gray-200">
                    {service?.service.plate_number}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-700 dark:text-gray-200">
                    {service?.service.motorbike_type}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-700 dark:text-gray-200">
                    {parseServiceTypes(service?.service.service_type).map(
                      (type, idx) => (
                        <ServiceTypeBadge key={idx} type={type} />
                      )
                    )}
                  </td>
                  <td
                    className={`text-center font-bold text-md rounded-xl whitespace-nowrap px-2 text-gray-100 dark:text-gray-900 ${
                      service?.service.status === "Antrian"
                        ? "bg-gray-300"
                        : service?.service.status === "Sedang di Service"
                        ? "bg-orange-300"
                        : service?.service.status === "Pembayaran"
                        ? "bg-blue-300"
                        : service?.service.status === "Selesai"
                        ? "bg-green-300"
                        : ""
                    }`}
                  >
                    {service?.service.status}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm">
                    <Link
                      to={`/dashboard/lihat-daftar/${service.service.id}`}
                      className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                    >
                      View
                    </Link>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderList;
