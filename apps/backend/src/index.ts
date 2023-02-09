// Require the framework and instantiate it
import _fastify from 'fastify'
import fastifyCors from '@fastify/cors'
import fastifySocketIO from 'fastify-socket.io'
import dotenv from 'dotenv'

import { SocketInstance, SocketServer } from './types/socket'

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

  const io = fastify.io as SocketServer

  io.on('connection', (socket: SocketInstance) => {
    console.log('new connection:', socket.id)

    // TODO: logic lol
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
