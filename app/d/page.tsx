import { ScreenLayout } from "@/components/screen-layout"
import { PostScreen } from "@/components/post-screen"
import { AiFollowUp } from "@/components/ai-follow-up"

export default function GroupDPage() {
  return (
    <ScreenLayout>
      <PostScreen>
        <AiFollowUp withQuestion />
      </PostScreen>
    </ScreenLayout>
  )
}
