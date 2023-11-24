import { useEffect, useState } from "react"

export default function useWindowLoad() {
  const [loaded, setLoaded] = useState(false)

  const onLoad = () => {
    setLoaded(true)
  }

  useEffect(() => {
    setLoaded(true)
  }, [])

  return { loaded }
}
