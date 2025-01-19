"use client"
import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function RedirectPage() {
  const router = useRouter()

  useEffect(() => {
    router.replace("https://calendly.com/marssmarsshan/30min")
  }, [router])

  return null // No content is displayed on this page
}
