import React from "react";

const TableSkeletonLoader = () => {
  return (
    <tr className="animate-pulse">
      {Array.from({ length: 4 }).map((_, index) => (
        <td key={index} className="whitespace-nowrap px-6 py-4">
          <div className="h-6 bg-gray-200 rounded dark:bg-gray-700 animate-pulse"></div>
        </td>
      ))}
    </tr>
  );
};

export default TableSkeletonLoader;
