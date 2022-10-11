import { t } from "../trpc";
import { z } from "zod";


interface User {
    id: string;
    name: string;
    email: string;
    password: string;
  }

const userList: User[] = [
    {
        id:"3",
        name:"test user",
        email: "test@gmail.com",
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
    userCreate: t.procedure
    .input(z.object({ name: z.string(),email: z.string(),password:z.string() }))
    .mutation((req) => {
      const id = `${Math.random()}`;
      const user: User = {
        id,
        name: req.input.name,
        email: req.input.email,
        password: req.input.password
      };
      userList.push(user);
      return user;
    }),
})