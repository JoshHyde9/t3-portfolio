// src/server/router/index.ts
import { createRouter } from "./context";
import superjson from "superjson";

import { guestBook } from "./guestbook";
import { email } from "./email";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("guestbook.", guestBook)
  .merge("email.", email);

// export type definition of API
export type AppRouter = typeof appRouter;
