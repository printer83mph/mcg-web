import { useCallback, useEffect, useState } from 'react'

import { socket } from '../lib/socket'

export const useRoom = () => {
  const [roomId, setRoomId] = useState<string | null>(null)
  const [joining, setJoining] = useState(false)

  // making a new room
  const requestNewRoom = useCallback(() => {
    setJoining(true)
    socket.emit('request-new-room')
  }, [])

  const requestJoinRoom = useCallback((id: string) => {
    setJoining(true)
    socket.emit('request-join-room', { id })
  }, [])

  useEffect(() => {
    const setup = () => {
      socket.on('set-room', ({ id }) => {
        setRoomId(id)
        setJoining(false)
      })
    }
    socket.on('connect', setup)

    return () => {
      socket.off('connect', setup)
    }
  }, [])

  return { roomId, joining, requestNewRoom, requestJoinRoom }
}
