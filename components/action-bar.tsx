import { Heart, MessageCircle, Star, Share2 } from "lucide-react"

export function ActionBar() {
  const actions = [
    { icon: Heart, count: "1286", label: "点赞" },
    { icon: MessageCircle, count: "346", label: "评论" },
    { icon: Star, count: "892", label: "收藏" },
    { icon: Share2, count: "235", label: "分享" },
  ]
  return (
    <div className="flex items-center justify-between border-t border-border px-6 py-3">
      {actions.map(({ icon: Icon, count, label }) => (
        <button
          key={label}
          type="button"
          className="flex items-center gap-1.5 text-muted-foreground"
          aria-label={label}
        >
          <Icon className="h-5 w-5" aria-hidden="true" />
          <span className="text-sm">{count}</span>
        </button>
      ))}
    </div>
  )
}
