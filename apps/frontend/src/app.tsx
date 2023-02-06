import { useEffect } from 'react'
import io from 'socket.io-client'

const socket = io(import.meta.env.VITE_WS_URL)

export const App = () => {
  useEffect(() => {
    socket.on('connect', () => {
      console.log('connected!')
    })

    socket.on('disconnect', () => {
      console.log('disconnected')
    })

    socket.on('hello', ({ hello }: { hello: string }) => {
      alert(`got hello: ${hello}`)
    })

    return () => {
      socket.off('connect')
      socket.off('disconnect')
      socket.off('hello')
    }
  }, [])
  return (
    <div className="text-4xl container mx-auto mt-4">
      <button
        onClick={(evt) => {
          evt.preventDefault()
          socket.emit('ping')
          console.log('emitted ping')
        }}
      >
        <>Emit &quot;ping&quot;</>
      </button>
    </div>
  )
}
