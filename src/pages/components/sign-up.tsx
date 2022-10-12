import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterUserSchema } from "../../validation/registerUserSchema";

function SingUPComponent() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(RegisterUserSchema),
  });
  const onSubmit = (data: unknown) => {
    console.log(data);
  };

  console.log(watch("useremail")); // watch input value by passing the name of it

  return (
    <>
      <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <div className="mx-2 mt-4 bg-white px-8 py-8 text-left shadow-lg sm:w-1/2 md:w-1/3 lg:w-1/3">
          <h3 className="text-center text-2xl font-bold">Join us</h3>
          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <div className="mt-4">
              <div>
                <label className="block">Name</label>
                <input
                  type="text"
                  placeholder="Name"
                  className="mt-2 w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-600"
                  {...register("username")}
                />
                {errors.username && (
                  <span className="text-xs text-red-400">
                    {errors.username?.message as string}
                  </span>
                )}
              </div>
            </div>

            <div className="mt-4">
              <label className="block">Email</label>
              <input
                type="text"
                placeholder="Email"
                className="mt-2 w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-600"
                {...register("useremail")}
                aria-invalid={errors.useremail ? "true" : "false"}
              />
              {errors.useremail && (
                <span className="text-xs text-red-400">
                  {errors.useremail?.message as string}
                </span>
              )}
            </div>

            <div className="mt-4">
              <label className="block">Phone Number</label>
              <input
                type="text"
                placeholder="92xxxxxxxxxx"
                className="mt-2 w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-600"
                {...register("phone")}
                aria-invalid={errors.phone ? "true" : "false"}
              />
              {errors.phone && (
                <span className="text-xs text-red-400">
                  {errors.phone?.message as string}
                </span>
              )}
            </div>
            <div className="mt-4">
              <label className="block">Password</label>
              <input
                type="password"
                placeholder="Password"
                className="mt-2 w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-600"
                {...register("userpassword")}
                aria-invalid={errors.userpassword ? "true" : "false"}
              />
              {errors.userpassword && (
                <span className="text-xs text-red-400">
                  {errors.userpassword?.message as string}
                </span>
              )}
            </div>

            <div className="mt-4">
              <label className="block">Confirm Password</label>
              <input
                type="password"
                placeholder="Password"
                className="mt-2 w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-600"
                {...register("confirm_password", {
                  required: "Password should match",
                  validate: (val: string) => {
                    if (watch("userpassword") != val) {
                      return "Your passwords do no match";
                    }
                  },
                })}
              />
              {errors.confirm_password && (
                <span className="text-xs text-red-400">
                  {errors.confirm_password?.message as string}
                </span>
              )}
            </div>

            <div className="flex">
              <button className="mt-4 w-full rounded-lg bg-blue-600 px-6 py-2 text-white hover:bg-blue-900">
                Create Account
              </button>
            </div>

            <div className="text-grey-dark mt-6">
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
