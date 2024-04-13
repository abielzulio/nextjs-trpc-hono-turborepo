import { createRouter, publicProcedure } from "~/libs/trpc"
import { z } from "zod"

export const mainRouter = createRouter({
  get: publicProcedure.input(z.string().nullish()).query(({ input }) => {
    return `Hello ${input ?? "World"}!`
  }),
})
