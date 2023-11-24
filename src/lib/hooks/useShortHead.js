import { useEffect, useState } from "react"

export const useShortHead = () => {
  const [smallHead, setSmallHead] = useState(false)

  const listener = () => {
    const doc = document.documentElement
    const top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0)
    const scroll_nav = top > 50
    setSmallHead(scroll_nav)
  }

  useEffect(() => {
    window.addEventListener("scroll", listener)
    return () => {
      window.removeEventListener("scroll", listener)
    }
  }, [])

  return smallHead
}
