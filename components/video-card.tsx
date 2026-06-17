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
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-foreground">
        <video
          ref={videoRef}
          src="/videos/porridge.mp4"
          poster="/images/porridge.png"
          className="h-full w-full object-cover"
          playsInline
          controls={playing}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
        />
        {!playing && (
          <>
            <div className="pointer-events-none absolute inset-y-0 left-0 flex w-3/5 flex-col justify-center gap-1.5 bg-gradient-to-r from-foreground/55 to-transparent px-4">
              <p className="text-pretty text-2xl font-extrabold leading-tight text-card drop-shadow-md">
                每天一碗！
              </p>
              <p className="text-pretty text-lg font-bold leading-snug text-card drop-shadow-md">
                小米+枸杞+大枣
              </p>
              <p className="text-pretty text-lg font-bold leading-snug text-card drop-shadow-md">
                血糖悄悄降下来？
              </p>
              <p className="mt-1 text-sm font-semibold text-card drop-shadow-md">亲测有效</p>
              <p className="text-sm font-semibold text-card drop-shadow-md">分享给更多人</p>
            </div>
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
              00:30
            </span>
          </>
        )}
      </div>
    </div>
  )
}
