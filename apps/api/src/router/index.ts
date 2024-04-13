import { trpcServer } from "@hono/trpc-server"
import { createRouter } from "~/libs/trpc"
import { mainRouter } from "./main"

export const appRouter = createRouter({
  main: mainRouter,
})

const trpcRouter = trpcServer({
  router: appRouter,
})

export default trpcRouter
