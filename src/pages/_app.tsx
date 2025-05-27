// pages/_app.tsx
import { useEffect } from "react"
import type { AppProps } from "next/app"
import "@/styles/globals.css"

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Disable Right Click
    const handleContextMenu = (e: MouseEvent) => e.preventDefault()
    document.addEventListener("contextmenu", handleContextMenu)

    // Disable Shortcut Keys
    const disableShortcuts = (e: KeyboardEvent) => {
      if (
        (e.ctrlKey && e.key.toLowerCase() === "u") || // Ctrl + U
        (e.ctrlKey && e.key.toLowerCase() === "v") || // Ctrl + c
        (e.ctrlKey && e.key.toLowerCase() === "s") || // Ctrl + S
        (e.ctrlKey && e.key.toLowerCase() === "c") || // Ctrl + C
        (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "i") || // Ctrl + Shift + I
        e.key === "F12"
      ) {
        e.preventDefault()
        return false
      }
    }

    document.addEventListener("keydown", disableShortcuts)

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu)
      document.removeEventListener("keydown", disableShortcuts)
    }
  }, [])

  return <Component {...pageProps} />
}
