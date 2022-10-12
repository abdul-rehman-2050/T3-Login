import Link from "next/link";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  RegisterUserSchema,
  RegisterUserSchemaType,
} from "../../validation/registerUserSchema";
import { trpc } from "../../utils/trpc";



function SingUPComponent() {
    const mutation = trpc.users.create.useMutation();
    const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterUserSchemaType>({
    resolver: zodResolver(RegisterUserSchema),
  });
  const onSubmit: SubmitHandler<RegisterUserSchemaType> = (data) => {
    console.log("testing");
    console.log(data);
    mutation.mutate(data);
  };

  console.log(watch("email")); // watch input value by passing the name of it

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
                  {...register("name")}
                />
                {errors.name && (
                  <span className="text-xs text-red-400">
                    {errors.name?.message as string}
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
                {...register("email")}
                aria-invalid={errors.email ? "true" : "false"}
              />
              {errors.email && (
                <span className="text-xs text-red-400">
                  {errors.email?.message as string}
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
                {...register("password")}
                aria-invalid={errors.password ? "true" : "false"}
              />
              {errors.password && (
                <span className="text-xs text-red-400">
                  {errors.password?.message as string}
                </span>
              )}
            </div>

            <div className="mt-4">
              <label className="block">Confirm Password</label>
              <input
                type="password"
                placeholder="Password"
                className="mt-2 w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-600"
                {...register("confirm_password")}
              />
              {errors.confirm_password && (
                <span className="text-xs text-red-400">
                  {errors.confirm_password?.message as string}
                </span>
              )}
            </div>

            <div className="flex">
              <button
                type="submit"
                disabled={mutation.isLoading}
                className="mt-4 w-full rounded-lg bg-blue-600 px-6 py-2 text-white hover:bg-blue-900"
              >
                Create Account
              </button>
            </div>
            {mutation.error && (
              <p>Something went wrong! {mutation.error.message}</p>
            )}
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
