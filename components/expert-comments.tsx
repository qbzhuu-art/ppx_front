import Image from "next/image"
import { Heart, MessageCircle, Bot } from "lucide-react"

function OfficialBadge() {
  return (
    <span className="rounded bg-primary/10 px-1.5 py-0.5 text-[10px] font-semibold text-primary">
      官方
    </span>
  )
}

function CommentStats({ likes, replies }: { likes: number; replies: number }) {
  return (
    <div className="mt-2 flex items-center gap-4 text-muted-foreground">
      <span className="flex items-center gap-1 text-xs">
        <Heart className="h-3.5 w-3.5" aria-hidden="true" />
        {likes}
      </span>
      <span className="flex items-center gap-1 text-xs">
        <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
        {replies}
      </span>
      <button type="button" className="text-xs">
        回复
      </button>
    </div>
  )
}

export function ExpertComments() {
  return (
    <div className="space-y-4 border-t border-border px-4 py-3">
      {/* AI 助手评论 */}
      <div className="flex gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10">
          <Bot className="h-5 w-5 text-primary" aria-label="AI助手头像" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-primary">AI助手</span>
            <OfficialBadge />
            <span className="ml-auto text-xs text-muted-foreground">5月18日 10:45</span>
          </div>
          <p className="mt-1 text-sm leading-relaxed text-foreground/90">
            小米含有一定量淀粉和膳食纤维，枸杞、大枣含有植物营养，但其降低血糖效果尚缺乏高质量的研究证据。
          </p>
          <CommentStats likes={125} replies={20} />
        </div>
      </div>

      {/* 内分泌科医生评论 */}
      <div className="flex gap-3">
        <Image
          src="/images/avatar-doctor.png"
          alt="内分泌科医生头像"
          width={36}
          height={36}
          className="h-9 w-9 shrink-0 rounded-full object-cover"
        />
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-foreground">内分泌科医生</span>
            <OfficialBadge />
            <span className="ml-auto text-xs text-muted-foreground">5月18日 11:02</span>
          </div>
          <p className="mt-1 text-sm leading-relaxed text-foreground/90">
            目前没有可靠证据支持小米、枸杞、大枣一起煮粥可以降血糖，请注意监测血糖，根据身体状况，如有疑问咨询医生。
          </p>
          <CommentStats likes={165} replies={66} />
        </div>
      </div>
    </div>
  )
}
