import { useEffect } from 'react'

import { socket } from './lib/socket'

export const App = () => {
  useEffect(() => {
    socket.on('connect', () => {
      console.log('connected!')
    })

    socket.on('disconnect', () => {
      console.log('disconnected')
    })

    return () => {
      socket.off('connect')
      socket.off('disconnect')
    }
  }, [])
  return (
    <div className="text-4xl container mx-auto mt-4">
      <button
        type="button"
        onClick={(evt) => {
          evt.preventDefault()
          console.log('emitted ping')
        }}
      >
        Emit &quot;ping&quot;
      </button>
    </div>
  )
}
