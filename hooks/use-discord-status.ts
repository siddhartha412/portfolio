"use client"

import { useEffect, useState } from "react"

export interface DiscordData {
  discord_user: {
    username: string
    discriminator: string
    avatar: string
    id: string
  }
  discord_status: "online" | "idle" | "dnd" | "offline"
  activities: Array<{
    name: string
    type: number
    state?: string
    details?: string
  }>
  listening_to_spotify: boolean
  spotify?: {
    song: string
    artist: string
    album: string
  }
}

export function useDiscordStatus() {
  const [discordData, setDiscordData] = useState<DiscordData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        setError(null)
        const response = await fetch("/api/discord")
        const data = await response.json()
        if (response.ok && data.success && data.data) {
          setDiscordData(data.data)
        } else {
          setError(data.error || "Status unavailable")
        }
      } catch {
        setError("Failed to load status")
      } finally {
        setLoading(false)
      }
    }

    fetchStatus()
    const interval = setInterval(fetchStatus, 30000)
    return () => clearInterval(interval)
  }, [])

  return { discordData, loading, error }
}
