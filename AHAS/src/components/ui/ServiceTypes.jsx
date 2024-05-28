// ServiceTypeBadge.js

import React from "react";

const ServiceTypeBadge = ({ type }) => {
  let badgeColor = "";
  let text = "";

  switch (type) {
    case "ganti_oli":
      badgeColor =
        "bg-emerald-100 text-emerald-700 dark:bg-emerald-700 dark:text-emerald-100";
      text = "Ganti Oli";
      break; // Add break statement here
    case "service_ringan":
      badgeColor =
        "bg-yellow-100 text-yellow-700 dark:bg-yellow-700 dark:text-yellow-100";
      text = "Service Ringan";
      break; // Add break statement here
    case "service_lengkap":
      badgeColor = "bg-red-100 text-red-700 dark:bg-red-700 dark:text-red-100";
      text = "Service Lengkap";
      break; // Add break statement here
    default:
      break;
  }

  return (
    <span
      className={`inline-flex items-center justify-center rounded-full px-2.5 py-0.5 text-sm ${badgeColor}`}
    >
      {/* Icon can be added here if needed */}
      <p className="whitespace-nowrap">{text}</p>
    </span>
  );
};

export default ServiceTypeBadge;
