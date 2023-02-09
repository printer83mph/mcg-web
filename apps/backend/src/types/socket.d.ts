import type { Socket, Server } from 'socket.io'

export type ServerToClientEvents = {
  'set-room': ({ id: string }) => void
}

export type ClientToServerEvents = {
  'request-new-room': () => void
  'request-join-room': ({ id: string }) => void
}

export type SocketServer = Server<ClientToServerEvents, ServerToClientEvents>
export type SocketInstance = Socket<ClientToServerEvents, ServerToClientEvents>
