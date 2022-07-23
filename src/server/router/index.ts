// src/server/router/index.ts
import { createRouter } from "./context";
import superjson from "superjson";

import { guestBook } from "./guestbook";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("guestbook.", guestBook);

// export type definition of API
export type AppRouter = typeof appRouter;
