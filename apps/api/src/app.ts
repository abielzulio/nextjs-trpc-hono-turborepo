import { Hono } from "hono"
import { showRoutes } from "hono/dev"
import trpcRouter from "./router"

const app = new Hono()

app.use("/trpc/*", trpcRouter)

showRoutes(app)

export default app
