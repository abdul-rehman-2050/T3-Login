


import * as z from "zod";


export const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
export const RegisterUserSchema = z
  .object({
    username: z
      .string()
      .min(4, { message: "Please provide valid name: 4 character min" })
      .max(20, { message: "max length is 20" }),
    useremail: z
      .string()
      .min(6, { message: "provide valid email address" })
      .email({ message: "The email is invalid." }),
    phone: z
      .string()
      .min(1, { message: "This field is required" })      
      .regex(phoneRegExp,{message: "invalid phone pattern"})
      .transform((data) => Number(data)),
    userpassword: z
      .string()
      .min(4, "Password length should be at least 4 characters")
      .max(12, "Password cannot exceed more than 12 characters"),
    confirm_password: z
      .string()
      .min(4, "Password length should be at least 4 characters")
      .max(12, "Password cannot exceed more than 12 characters"),
  })
  // The refine method is used to add custom rules or rules over multiple fields.
  .refine((data) => data.userpassword === data.confirm_password, {
    message: "passwords don't match.",
    path: ["confirm_password"], // Set the path of this error on the confirmpassword field.
  });


  export type RegisterUserSchemaType = z.TypeOf<typeof RegisterUserSchema>;