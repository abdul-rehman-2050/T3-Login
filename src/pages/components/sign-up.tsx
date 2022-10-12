import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const schema = z.object({
  username: z
    .string()
    .min(4, { message: "Please provide valid name: 4 character min" }),
  useremail: z
    .string()
    .email()
    .min(6, { message: "provide valid email address" }),
  userpassword: z
    .string()
    .min(4, "Password length should be at least 4 characters")
    .max(12, "Password cannot exceed more than 12 characters"),
  confirm_password: z
    .string()
    .min(4, "Password length should be at least 4 characters")
    .max(12, "Password cannot exceed more than 12 characters"),
});

function SingUPComponent() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });
  const onSubmit = (data: unknown) => {
    console.log(data);
  };

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <>
      <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <div className="mx-4 mt-4 bg-white px-8 py-6 text-left shadow-lg sm:w-1/3 md:w-1/3 lg:w-1/3">
          <h3 className="text-center text-2xl font-bold">Join us</h3>
          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <div className="mt-4">
              <div>
                <label className="block">Name</label>
                <input
                  type="text"
                  placeholder="Name"
                  className="mt-2 w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-600"
                  {...register("username", {
                    required: "Please provide valid name",
                    maxLength: 20,
                  })}
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
                {...register("useremail", {
                  required: "Email Address is required",
                })}
                aria-invalid={errors.useremail ? "true" : "false"}
              />
              {errors.useremail && (
                <span className="text-xs text-red-400">
                  {errors.useremail?.message as string}
                </span>
              )}
            </div>
            <div className="mt-4">
              <label className="block">Password</label>
              <input
                type="password"
                placeholder="Password"
                className="mt-2 w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-600"
                {...register("userpassword", {
                  required: "Enter valid password",
                })}
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
