// Require the framework and instantiate it
import _fastify from "fastify"
const fastify = _fastify({ logger: true })

// Declare a route
fastify.get("/", async () => {
  return { hello: "world" }
})

// Run the server!
const start = async () => {
  try {
    await fastify.listen({ port: 8000 })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()
