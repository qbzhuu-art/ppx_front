import type { ReactNode } from "react"
import { PhoneFrame } from "@/components/phone-frame"
import { PostHeader } from "@/components/post-header"
import { PostBody } from "@/components/post-body"
import { VideoCard } from "@/components/video-card"
import { HashTags } from "@/components/hash-tags"
import { ActionBar } from "@/components/action-bar"
import { RiskLabel } from "@/components/risk-label"

interface PostScreenProps {
  showRiskLabel?: boolean
  /** 在话题标签之后、互动栏之前插入的内容（评论 / 追问入口） */
  children?: ReactNode
}

export function PostScreen({ showRiskLabel = false, children }: PostScreenProps) {
  return (
    <PhoneFrame>
      <PostHeader />
      {showRiskLabel && <RiskLabel />}
      <PostBody />
      <VideoCard />
      <HashTags />
      {children}
      <ActionBar />
    </PhoneFrame>
  )
}
