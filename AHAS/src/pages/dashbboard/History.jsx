import { useService } from "../../context/ServiceContextProvider";
import { Link } from "react-router-dom";
import TableSkeletonLoader from "../../components/ui/TableSkeletonLoader";
import ServiceTypeBadge from "../../components/ui/ServiceTypes";

const History = () => {
  const { services, loading } = useService();

  // Function to check if there are any services with a status other than "Selesai"
  const hasUnfinishedServices = () => {
    return services.some((service) => service?.service.status !== "Selesai");
  };

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

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-md">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-xl font-semibold text-gray-800">
            Riwayat Service Motor
          </h3>
          <p className="text-gray-600">
            Semua data service motor yang telah dilakukan
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Tipe Service
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Kendala
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Tanggal Service
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Detail
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {loading ? (
                <TableSkeletonLoader />
              ) : hasUnfinishedServices() ? (
                <tr>
                  <td
                    colSpan="4"
                    className="px-6 py-4 text-center text-gray-700"
                  >
                    No service orders found.
                  </td>
                </tr>
              ) : (
                services.map((service, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex flex-col">
                        {parseServiceTypes(service?.service.service_type).map(
                          (type, idx) => (
                            <ServiceTypeBadge key={idx} type={type} />
                          )
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-gray-700">
                        {service?.service.additional_service ||
                          "Tidak ada kendala"}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-gray-700">
                        {formatDate(
                          service?.service.scheduled_date || "Tidak ada kendala"
                        )}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-start">
                      <Link
                        to={`/dashboard/lihat-daftar/${service?.service.id}`}
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        Lihat
                      </Link>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default History;
