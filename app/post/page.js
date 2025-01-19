"use client"
import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function RedirectPage() {
  const router = useRouter()

  useEffect(() => {
    router.replace(
      "https://drumfeet.notion.site/Comment-17f45d53d2b880b694e6cfd59a77076c?pvs=4"
    )
  }, [router])

  return null // No content is displayed on this page
}
