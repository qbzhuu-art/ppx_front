import Link from "next/link"
import { ChevronRight, Bot } from "lucide-react"

export function AiFollowUp({ withQuestion = false }: { withQuestion?: boolean }) {
  return (
    <div className="border-t border-border px-4 py-4">
      {withQuestion && (
        <p className="mb-3 text-sm font-medium text-foreground">您知道这个说法是否精准吗？</p>
      )}
      <Link
        href="/ai-chat"
        className="flex items-center justify-between rounded-xl border border-primary/30 bg-primary/5 px-4 py-3.5 transition-colors hover:bg-primary/10"
      >
        <span className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Bot className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="text-base font-semibold text-primary">进一步追问AI</span>
        </span>
        <ChevronRight className="h-5 w-5 text-primary" aria-hidden="true" />
      </Link>
    </div>
  )
}
