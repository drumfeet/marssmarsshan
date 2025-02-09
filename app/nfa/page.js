"use client"
import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function RedirectPage() {
  const router = useRouter()

  useEffect(() => {
    router.replace(
      "https://drumfeet.notion.site/Journal-57b17dbdd93d4c3d9d9402c07b205902?pvs=4"
    )
  }, [router])

  return null // No content is displayed on this page
}
