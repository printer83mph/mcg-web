// Require the framework and instantiate it
import _fastify from 'fastify'
import fastifyCors from '@fastify/cors'
import fastifySocketIO from 'fastify-socket.io'
import dotenv from 'dotenv'

dotenv.config()

const fastify = _fastify({ logger: true })
fastify.register(fastifyCors, {
  origin: '*',
  allowedHeaders: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
})
fastify.register(fastifySocketIO, {
  cors: {
    origin: process.env.FRONTEND_URL,
    allowedHeaders: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  },
})

fastify.ready((err) => {
  if (err) {
    throw err
  }

  fastify.io.on('connection', (socket) => {
    console.log('new connection:', socket.id)

    socket.on('ping', () => {
      console.log('recieved ping!')
      fastify.io.emit('hello', { hello: 'world' })
    })
  })
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
