import { ScreenLayout } from "@/components/screen-layout"
import { PostScreen } from "@/components/post-screen"
import { ExpertComments } from "@/components/expert-comments"
import { AiFollowUp } from "@/components/ai-follow-up"

export default function GroupEPage() {
  return (
    <ScreenLayout>
      <PostScreen showRiskLabel>
        <ExpertComments />
        <AiFollowUp />
      </PostScreen>
    </ScreenLayout>
  )
}
