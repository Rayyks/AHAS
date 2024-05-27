import React from "react";
import { useParams } from "react-router-dom";
import { useService } from "../../context/ServiceContextProvider";
import Loader from "../../utils/Loader";
import ServiceTypeBadge from "../../components/ui/ServiceTypes";
import TableSkeletonLoader from "../../components/ui/TableSkeletonLoader";

const OrderDetail = () => {
  const { id } = useParams();
  const { services, loading, error } = useService();

  // Function to format date to a more detailed format
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      timeZoneName: "short",
    };
    return date.toLocaleDateString("id-ID", options);
  };

  // Convert id from useParams to a number
  const serviceOrder = services.find(
    (order) => order.service.id === Number(id)
  );

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

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
            Error: {error.message}
          </h2>
        </div>
      </div>
    );
  }

  if (loading) {
    return <Loader />;
  }

  if (!serviceOrder) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
            No service order found.
          </h2>
        </div>
      </div>
    );
  }

  return (
    <div className="flow-root rounded-lg border border-gray-100 py-3 shadow-sm dark:border-gray-700">
      {loading ? (
        <TableSkeletonLoader />
      ) : (
        <dl className="-my-3 divide-y divide-gray-100 text-sm dark:divide-gray-700">
          <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4 even:dark:bg-gray-800">
            <dt className="font-medium text-gray-900 dark:text-white">
              Nama Pelanggan
            </dt>
            <dd className="text-gray-700 sm:col-span-2 dark:text-gray-200">
              {serviceOrder?.customer.fullname}
            </dd>
          </div>

          <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4 even:dark:bg-gray-800">
            <dt className="font-medium text-gray-900 dark:text-white">
              Alamat
            </dt>
            <dd className="text-gray-700 sm:col-span-2 dark:text-gray-200">
              {serviceOrder?.customer.address}
            </dd>
          </div>

          <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4 even:dark:bg-gray-800">
            <dt className="font-medium text-gray-900 dark:text-white">
              Nomor Telepon
            </dt>
            <dd className="text-gray-700 sm:col-span-2 dark:text-gray-200">
              {serviceOrder?.customer.phone_number}
            </dd>
          </div>

          <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4 even:dark:bg-gray-800">
            <dt className="font-medium text-gray-900 dark:text-white">
              Nomor BP
            </dt>
            <dd className="text-gray-700 sm:col-span-2 dark:text-gray-200">
              {serviceOrder?.service.plate_number}
            </dd>
          </div>

          <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4 even:dark:bg-gray-800">
            <dt className="font-medium text-gray-900 dark:text-white">
              Jenis Service
            </dt>
            <dd className="text-gray-700 sm:col-span-2 dark:text-gray-200">
              {parseServiceTypes(serviceOrder?.service.service_type).map(
                (type, idx) => (
                  <ServiceTypeBadge key={idx} type={type} />
                )
              )}
            </dd>
          </div>

          <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4 even:dark:bg-gray-800">
            <dt className="font-medium text-gray-900 dark:text-white">
              Service perbaikan
            </dt>
            <dd className="text-gray-700 sm:col-span-2 dark:text-gray-200">
              {serviceOrder?.service.additional_service ||
                "Tidak ada perbaikan"}
            </dd>
          </div>

          <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4 even:dark:bg-gray-800">
            <dt className="font-medium text-gray-900 dark:text-white">
              Tanggal Service
            </dt>
            <dd className="text-gray-700 sm:col-span-2 dark:text-gray-200">
              {formatDate(serviceOrder?.service.scheduled_date)}
            </dd>
          </div>

          <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4 even:dark:bg-gray-800">
            <dt className="font-medium text-gray-900 dark:text-white">
              Status
            </dt>
            <dd
              className={`sm:col-span-2 dark:text-gray-900 rounded-xl px-2 ${
                serviceOrder?.service.status === "Antrian"
                  ? "bg-gray-100 w-fit "
                  : serviceOrder?.service.status === "Sedang di Service"
                  ? "bg-orange-200 w-fit"
                  : serviceOrder?.service.status === "Pembayaran"
                  ? "bg-blue-200 w-fit"
                  : "bg-green-200 w-fit"
              }`}
            >
              {serviceOrder?.service.status}
            </dd>
          </div>

          <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4 even:dark:bg-gray-800">
            <dt className="font-medium text-gray-900 dark:text-white">
              Harga Service
            </dt>
            <dd className="text-gray-700 sm:col-span-2 dark:text-gray-200">
              {parseFloat(serviceOrder?.service.price).toLocaleString("id-ID", {
                style: "currency",
                currency: "IDR",
              })}
            </dd>
          </div>
        </dl>
      )}
    </div>
  );
};

export default OrderDetail;
