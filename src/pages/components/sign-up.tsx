import Link from "next/link";
import React from "react";

function SingUPComponent() {
  return (
    <>
      <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <div className="mx-4 mt-4 bg-white px-8 py-6 text-left shadow-lg sm:w-1/3 md:w-1/3 lg:w-1/3">
          <h3 className="text-center text-2xl font-bold">Join us</h3>
          <form action="">
            <div className="mt-4">
              <div>
                <label className="block">Name</label>
                <input
                  type="text"
                  placeholder="Name"
                  className="mt-2 w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="block">Email</label>
              <input
                type="text"
                placeholder="Email"
                className="mt-2 w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
            </div>
            <div className="mt-4">
              <label className="block">Password</label>
              <input
                type="password"
                placeholder="Password"
                className="mt-2 w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
            </div>

            <div className="mt-4">
                    <label className="block">Confirm Password</label>
                            <input type="password" placeholder="Password"
                                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                </div>
                <span className="text-xs text-red-400">Password must be same!</span>
                <div className="flex">
                    <button className="w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">Create
                        Account</button>
                </div>

                <div className="mt-6 text-grey-dark">
                    Already have an account?
                    
                    <Link className="text-blue-600 hover:underline" href="/">
                        Log in
                    </Link>
                </div>

          </form>
        </div>
      </div>
    </>
  );
}

export default SingUPComponent;
