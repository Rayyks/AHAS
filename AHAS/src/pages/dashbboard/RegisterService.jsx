import React, { useState } from "react";
import { StepOne } from "../../components/Dashboard/ServiceForm/StepOne";
import { useCustomer } from "../../context/CustomerContextProvider";
import { StepTwo } from "../../components/Dashboard/ServiceForm/StepTwo";
import { StepThree } from "../../components/Dashboard/ServiceForm/StepThree";
import toast from "react-hot-toast";
import { useService } from "../../context/ServiceContextProvider";

const RegisterService = () => {
  // GET CUSTOMER DATA
  const { customer, loading } = useCustomer();

  // CREATE SERVICE
  const { createService } = useService();

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    plate_number: "",
    motorbike_type: "",
    service_type: [],
    additional_service: "",
    scheduled_date: "",
  });

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      customer?.fullname &&
      formData.plate_number &&
      formData.motorbike_type &&
      formData.service_type &&
      formData.scheduled_date
    ) {
      createService(formData);
      console.log("Form submitted", formData);
    } else {
      toast.error("Please fill up the form correctly.");
    }
  };

  const handleChange = (field, value) => {
    if (field === "service_type") {
      // If the checkbox is checked, add the value to the array
      // If it's unchecked, remove the value from the array
      const updatedServiceTypes = formData.service_type.includes(value)
        ? formData.service_type.filter((type) => type !== value)
        : [...formData.service_type, value];
      setFormData((prevState) => ({
        ...prevState,
        [field]: updatedServiceTypes,
      }));
    } else {
      setFormData((prevState) => ({ ...prevState, [field]: value }));
    }
  };

  return (
    <section>
      <div className="px-8 py-24 mx-auto md:px-12 lg:px-32 max-w-7xl">
        <div className="max-w-full mx-auto md:max-w-full md:w-full">
          <div className="flex flex-col text-center">
            <h1 className="text-3xl font-semibold tracking-tight text-gray-900">
              Fill up this multistep form
            </h1>
            <p className="mt-4 text-base font-medium text-gray-500"></p>
          </div>
          <div className="p-2 -mt-20 border bg-gray-50 rounded-3xl">
            <div className="p-10 bg-white border shadow-lg rounded-2xl">
              <form onSubmit={handleSubmit}>
                {/* Step 1 */}
                <StepOne
                  customer={customer}
                  loading={loading}
                  step={step}
                  formData={formData}
                  handleChange={handleChange}
                  handleNextStep={handleNextStep}
                />

                {/* Step 2 */}
                <StepTwo
                  step={step}
                  formData={formData}
                  handleChange={handleChange}
                  handleNextStep={handleNextStep}
                  handlePreviousStep={handlePreviousStep}
                />
                {/* Step 3 */}
                <StepThree
                  customer={customer}
                  loading={loading}
                  step={step}
                  handlePreviousStep={handlePreviousStep}
                  formData={formData}
                />
              </form>
            </div>
          </div>
        </div>
        {/* Ends component */}
      </div>
    </section>
  );
};

export default RegisterService;
