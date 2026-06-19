"use client"

import { useRef, useState } from "react"
import { Play } from "lucide-react"

export function VideoCard() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)

  function handlePlay() {
    const video = videoRef.current
    if (!video) return
    video.play()
    setPlaying(true)
  }

  return (
    <div className="px-4">
      <div className="relative w-full overflow-hidden rounded-xl bg-foreground" style={{ aspectRatio: '576/614' }}>
        <video
          ref={videoRef}
          src="/videos/porridge.mp4"
          poster="/images/porridge-poster.jpg"
          className="absolute inset-0 h-full w-full object-cover"
          playsInline
          controls={playing}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
        />
        {!playing && (
          <>
            <button
              type="button"
              onClick={handlePlay}
              aria-label="播放视频"
              className="absolute inset-0 flex items-center justify-center"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-foreground/40 backdrop-blur-sm">
                <Play className="h-6 w-6 fill-card text-card" aria-hidden="true" />
              </span>
            </button>
            <span className="pointer-events-none absolute bottom-2 right-2 rounded bg-foreground/60 px-1.5 py-0.5 text-xs font-medium text-card">
              03:25
            </span>
          </>
        )}
      </div>
    </div>
  )
}
