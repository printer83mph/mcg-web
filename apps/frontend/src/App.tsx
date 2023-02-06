import { useEffect, useRef, useState } from 'react'

function App() {
  const [content, setContent] = useState<
    { fetched: false } | { fetched: true; data: string }
  >({ fetched: false })

  const fetchController = useRef<AbortController | null>(null)

  const fetchData = async () => {
    if (fetchController.current) {
      fetchController.current.abort()
    }
    fetchController.current = new AbortController()
    try {
      const res = await fetch('/api', {
        signal: fetchController.current.signal,
      })
      setContent({
        fetched: true,
        data: ((await res.json()) as { hello: string }).hello,
      })
      fetchController.current = null
    } catch (err) {
      console.error('Fetch error:', err)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="text-4xl container mx-auto mt-4">
      Data: {content.fetched || 'Fetching...'}
      {content.fetched && content.data}
    </div>
  )
}

export default App
