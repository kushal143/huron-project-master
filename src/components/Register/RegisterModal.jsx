import axios from "axios";
import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function RegisterModal({ showModal, setShowModal }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const [role,setRole] = useState("");
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = { firstName, lastName, email, mobileNumber, password, role};
  //   localStorage.setItem("userData", JSON.stringify(data));
  //   toast.success("You are successfully registered. Kindly login.");
  // };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5046/api/Users', {
        FirstName: firstName,
        LastName: lastName,
        EmailAddress: email,
        MobileNumber: mobileNumber,
        Password: password,
        Role: role
      });
      console.log('Data successfully updated in the database');
    } catch (error) {
      console.error('Error:', error.response.status, error.response.statusText, error.response.data);
    }
  };
  
  if (!showModal) return null;
  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <ToastContainer />
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true">          ​
        </span>
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3
                  className="text-lg leading-6 font-medium text-gray-900"
                  id="modal-title">
                  Registration
                </h3>
                <div className="mt-2">
                  <form onSubmit={handleSubmit}>
                    <input
                      className="border rounded w-full py-2 px-3 text-grey-darker mb-3"
                      type="text"
                      placeholder="First Name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                    />
                    <input
                      className="border rounded w-full py-2 px-3 text-grey-darker mb-3"
                      type="text"
                      placeholder="Last Name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      required
                    />
                    <input
                      className="border rounded w-full py-2 px-3 text-grey-darker mb-3"
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <input
                      className="border rounded w-full py-2 px-3 text-grey-darker mb-3"
                      type="tel"
                      placeholder="Mobile Number"
                      value={mobileNumber}
                      onChange={(e) => setMobileNumber(e.target.value)}
                      required
                    />
                    <input
                      className="border rounded w-full py-2 px-3 text-grey-darker mb-3"
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <input
                      className="border rounded w-full py-2 px-3 text-grey-darker mb-3"
                      type="role"
                      placeholder="role"
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      required
                    />
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      type="submit"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              onClick={() => setShowModal(false)}
              type="button"
              className="mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
