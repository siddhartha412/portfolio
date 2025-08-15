import { NextResponse } from "next/server"

export async function GET() {
  try {
    const response = await fetch("https://api.lanyard.rest/v1/users/1261577588669939755", {
      headers: {
        "User-Agent": "Portfolio-Website/1.0",
      },
    })

    if (!response.ok) {
      console.error(`Discord API HTTP error: ${response.status} ${response.statusText}`)
      return NextResponse.json(
        {
          success: false,
          error: "Discord API unavailable",
        },
        { status: 500 },
      )
    }

    const contentType = response.headers.get("content-type")
    if (!contentType || !contentType.includes("application/json")) {
      const text = await response.text()
      console.error("Expected JSON, got:", text.slice(0, 200))
      return NextResponse.json(
        {
          success: false,
          error: "Invalid response format",
        },
        { status: 500 },
      )
    }

    const data = await response.json()

    return NextResponse.json(
      {
        success: true,
        data: data.data,
      },
      {
        headers: {
          "Cache-Control": "public, s-maxage=30, stale-while-revalidate=60",
        },
      },
    )
  } catch (error) {
    console.error("Discord API Error:", error)
    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch Discord status",
      },
      { status: 500 },
    )
  }
}
