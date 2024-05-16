import React, { useState } from "react";
import { faq } from "../../utils/data";

const FAQ = () => {
  const [activeAccordion, setActiveAccordion] = useState("");

  const toggleAccordion = (id) => {
    setActiveAccordion(activeAccordion === id ? "" : id);
  };

  return (
    <section>
      <div className="px-8 py-24 mx-auto md:px-12 lg:px-32 max-w-7xl">
        <div className="text-center">
          <div>
            <p className="text-4xl font-semibold tracking-tighter text-gray-900">
              Frequent questions and answers
            </p>
            <p className="w-1/2 mx-auto mt-4 text-base font-medium text-gray-500 text-balance">
              Answers to commonly asked questions about our platform
            </p>
          </div>
        </div>
        <div className="max-w-3xl mx-auto mt-12">
          <div>
            {faq.map((item, index) => (
              <div
                key={index}
                className={`cursor-pointer group text-gray-600 hover:text-gray-500 transition-colors ${
                  activeAccordion === index ? "text-gray-900" : ""
                }`}
              >
                <button
                  className="flex items-center justify-between w-full p-4 pb-1 text-lg font-medium text-black select-none transition-transform"
                  onClick={() => toggleAccordion(index)}
                >
                  <span>{item.q}</span>
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className={`w-6 h-6 duration-300 transform ${
                      activeAccordion === index ? "rotate-45" : ""
                    }`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  className={`p-4 pt-2 text-base font-medium text-gray-500 text-balance ${
                    activeAccordion === index ? "block" : "hidden"
                  } transition-all`}
                >
                  {item.a}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
