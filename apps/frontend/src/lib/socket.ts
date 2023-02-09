import { io, Socket } from 'socket.io-client'
import { ServerToClientEvents, ClientToServerEvents } from 'backend'

export const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io(
  import.meta.env.VITE_WS_URL
)
