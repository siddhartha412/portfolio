"use client"

import { Badge } from "@/components/ui/badge"
import { useDiscordStatus } from "@/hooks/use-discord-status"

export function DiscordStatus() {
  const { discordData, loading, error } = useDiscordStatus()

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
        <span className="text-sm text-muted-foreground">penguin • Offline</span>
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
