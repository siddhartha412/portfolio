"use client"

import { useEffect, useState } from "react"
import { Badge } from "@/components/ui/badge"

interface DiscordData {
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

export function DiscordStatus() {
  const [discordData, setDiscordData] = useState<DiscordData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchDiscordStatus = async () => {
      try {
        setError(null)
        const response = await fetch("/api/discord")

        if (!response.ok) {
          throw new Error(`API error: ${response.status}`)
        }

        const data = await response.json()

        if (data.success && data.data) {
          setDiscordData(data.data)
        } else {
          setError("Status unavailable")
        }
      } catch (error) {
        console.error("Failed to fetch Discord status:", error)
        setError("Failed to load status")
      } finally {
        setLoading(false)
      }
    }

    fetchDiscordStatus()
    const interval = setInterval(fetchDiscordStatus, 30000) // Update every 30 seconds

    return () => clearInterval(interval)
  }, [])

  if (loading) {
    return (
      <div className="flex items-center space-x-3">
        <div className="w-3 h-3 bg-muted rounded-full animate-pulse" />
        <span className="text-sm text-muted-foreground">Loading status...</span>
      </div>
    )
  }

  if (error || !discordData) {
    return (
      <div className="flex items-center space-x-3">
        <div className="w-3 h-3 bg-gray-500 rounded-full" />
        <span className="text-sm text-muted-foreground">theminimaluser • Offline</span>
      </div>
    )
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "online":
        return "bg-green-500"
      case "idle":
        return "bg-yellow-500"
      case "dnd":
        return "bg-red-500"
      default:
        return "bg-gray-500"
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "online":
        return "Online"
      case "idle":
        return "Away"
      case "dnd":
        return "Do Not Disturb"
      default:
        return "Offline"
    }
  }

  const currentActivity = discordData.activities.find((activity) => activity.type === 0) // Playing
  const customStatus = discordData.activities.find((activity) => activity.type === 4) // Custom status

  return (
    <div className="flex flex-col items-center space-y-3">
      <div className="flex items-center space-x-3">
        <div className="relative">
          <div className={`w-3 h-3 rounded-full ${getStatusColor(discordData.discord_status)}`} />
          <div
            className={`absolute inset-0 w-3 h-3 rounded-full ${getStatusColor(discordData.discord_status)} animate-ping opacity-75`}
          />
        </div>
        <span className="text-sm font-medium">
          {discordData.discord_user.username} • {getStatusText(discordData.discord_status)}
        </span>
      </div>

      {customStatus && customStatus.state && (
        <Badge variant="outline" className="text-xs">
          💭 {customStatus.state}
        </Badge>
      )}

      {currentActivity && (
        <Badge variant="outline" className="text-xs">
          🎮 {currentActivity.name}
        </Badge>
      )}

      {discordData.listening_to_spotify && discordData.spotify && (
        <Badge variant="outline" className="text-xs">
          🎵 {discordData.spotify.song} by {discordData.spotify.artist}
        </Badge>
      )}
    </div>
  )
}
