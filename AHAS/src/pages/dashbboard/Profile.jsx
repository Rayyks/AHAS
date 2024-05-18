import React from "react";
import { useCustomer } from "../../context/CustomerContextProvider";
import ProfileForm from "../../components/forms/ProfileForm";
import { IconUserCircle } from "@tabler/icons-react";

const Profile = () => {
  const { customer, updateCustomerData } = useCustomer();

  const [profile, setProfile] = React.useState({
    address: customer?.address,
    phone_number: customer?.phone_number,
    profile_picture: null,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("address", profile.address);
    formData.append("phone_number", profile.phone_number);

    if (profile.profile_picture) {
      const isValidImageType =
        profile.profile_picture.type === "image/jpeg" ||
        profile.profile_picture.type === "image/png";

      if (isValidImageType) {
        formData.append("profile_picture", profile.profile_picture);
      } else {
        console.error("Invalid image file type");
        return;
      }
    }

    try {
      await updateCustomerData(formData);
      console.log("Profile updated successfully");
    } catch (error) {
      console.error("Error updating customer data:", error);
    }
  };

  const handleChange = (field, value) => {
    setProfile((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <form
      className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md"
      onSubmit={handleSubmit}
    >
      <div className="space-y-12">
        <div className="border-b border-gray-300 pb-12">
          <h2 className="text-2xl font-semibold text-gray-900">Profile</h2>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-6">
            <div className="col-span-full">
              <label
                htmlFor="photo"
                className="block text-sm font-medium text-gray-900"
              >
                Profile Picture
              </label>
              <div className="mt-2 flex items-center gap-x-3">
                {customer?.profile_picture ? (
                  <img
                    src={customer?.profile_picture}
                    alt="Profile"
                    className="h-12 w-12 rounded-full"
                  />
                ) : (
                  <IconUserCircle
                    className="h-12 w-12 text-gray-300"
                    aria-hidden="true"
                  />
                )}
                <input
                  type="file"
                  accept="image/jpeg, image/png"
                  className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm border border-gray-300 hover:bg-gray-50 focus:ring-2 focus:ring-indigo-500"
                  placeholder="Upload Profile Picture"
                  onChange={(e) =>
                    handleChange("profile_picture", e.target.files[0])
                  }
                />
              </div>
            </div>
          </div>
        </div>

        <ProfileForm handleChange={handleChange} customer={customer} />
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          className="text-sm font-semibold text-gray-900 hover:underline"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:ring-2 focus:ring-indigo-500"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default Profile;
