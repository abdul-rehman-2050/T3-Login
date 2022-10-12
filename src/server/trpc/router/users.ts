import { t } from "../trpc";
import { z } from "zod";


interface User {
    name: string;
    email: string;
    phone: number;
    password: string;
  }

const userList: User[] = [
    {
        name:"test user",
        email: "test@gmail.com",
        phone: 23423232,
        password: "hello123"
    },
  ];

export const usersRouter = t.router({
    userById: t.procedure
    .input((val: unknown) => {
      if (typeof val === 'string') return val;
      throw new Error(`Invalid input: ${typeof val}`);
    })
    .query((req) => {
      const { input } = req;
               
      //const user = ctx.prisma.example.findMany()
     // const user = userList.find((u) => u.id === input);
       
      //return user;
      return {name:"test"}
    }),
    create: t.procedure
    .input(z.object({ name: z.string(),email: z.string(),phone:z.number(),password:z.string(),confirm_password:z.string() }))
    .mutation(async ({ input, ctx }) => {
      
      const user: User = {
        name: input.name,
        email: input.email,
        phone: input.phone,
        password: input.password

      };
      const v = await ctx.prisma.user
      .create({data:user})
      

      
      return v;
    }),

   
})