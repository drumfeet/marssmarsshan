"use client"
import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function RedirectPage() {
  const router = useRouter()

  useEffect(() => {
    router.replace(
      "https://docs.google.com/forms/d/e/1FAIpQLSfZmyznQRwKG4WadBroBjRzMrzy7fi2NnYF3dHsEQMmpUleWg/viewform?usp=header"
    )
  }, [router])

  return null // No content is displayed on this page
}
