import { ScreenLayout } from "@/components/screen-layout"
import { PostScreen } from "@/components/post-screen"
import { ExpertComments } from "@/components/expert-comments"

export default function GroupCPage() {
  return (
    <ScreenLayout>
      <PostScreen>
        <ExpertComments />
      </PostScreen>
    </ScreenLayout>
  )
}
