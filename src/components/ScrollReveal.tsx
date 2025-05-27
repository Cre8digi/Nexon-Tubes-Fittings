
import { useEffect } from "react"

export default function ScrollReveal() {
  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal")
    
    const revealOnScroll = () => {
      const windowHeight = window.innerHeight
      const revealPoint = 150
      
      revealElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top
        
        if (elementTop < windowHeight - revealPoint) {
          element.classList.add("active")
        } else {
          element.classList.remove("active")
        }
      })
    }
    
    // Initial check
    revealOnScroll()
    
    // Add event listener
    window.addEventListener("scroll", revealOnScroll)
    
    // Clean up
    return () => {
      window.removeEventListener("scroll", revealOnScroll)
    }
  }, [])
  
  return null
}
