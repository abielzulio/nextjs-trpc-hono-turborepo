import { initTRPC } from "@trpc/server"

const t = initTRPC.create()

const publicProcedure = t.procedure
const createRouter = t.router

export { publicProcedure, createRouter }
