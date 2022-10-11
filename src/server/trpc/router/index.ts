// src/server/trpc/router/index.ts
import { t } from "../trpc";
import { exampleRouter } from "./example";
import { authRouter } from "./auth";
import { groceryRouter } from "./grocery";
import { usersRouter } from "./users";


export const appRouter = t.router({
  example: exampleRouter,
  auth: authRouter,
  grocery: groceryRouter,
  users: usersRouter,

});

// export type definition of API
export type AppRouter = typeof appRouter;
