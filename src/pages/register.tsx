import React from "react";
import Form from "./components/form";

function Register() {
  return (
    <div className="flex bg-gray-100">
    <div className="max-w-xl mx-auto w-full">
      <div className="flex justify-center my-12">
        <div className="w-full lg:w-11/12 bg-white p-5 rounded-lg shadow-xl">
          <h3 className="pt-4 text-2xl text-center font-bold">
            Create New Account
          </h3>
          <Form />
        </div>
      </div>
    </div>
    </div>
  );
}

export default Register;