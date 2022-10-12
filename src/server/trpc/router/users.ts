import { t } from "../trpc";
import { z } from "zod";


interface User {
    id: string;
    name: string;
    email: string;
    phone: number;
    password: string;
  }

const userList: User[] = [
    {
        id:"3",
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
      const user = userList.find((u) => u.id === input);
       
      return user;
    }),
    create: t.procedure
    .input(z.object({ name: z.string(),email: z.string(),phone:z.number(),password:z.string(),confirm_password:z.string() }))
    .mutation(async (req) => {
      const id = `${Math.random()}`;
      const user: User = {
        id,
        name: req.input.name,
        email: req.input.email,
        phone: req.input.phone,
        password: req.input.password

      };
      await req.ctx.prisma.user
      .create({
        data: { user },
      })
      .catch(() => ({}));

      userList.push(user);
      return user;
    }),

   
})