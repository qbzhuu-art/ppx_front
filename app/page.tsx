import Link from "next/link"
import { ArrowRight } from "lucide-react"

const groups = [
  { id: "a", name: "A组：对照组（无干预）", desc: "仅展示原始导导性帖子" },
  { id: "b", name: "B组：标签组", desc: "在帖子顶部添加风险提示标签" },
  { id: "c", name: "C组：AI-专家协同评论组", desc: "添加 AI 助手与专家协同置顶评论" },
  { id: "d", name: "D组：AI核验式交互组", desc: "提供 AI 核验交互入口（嵌入豆包AI）" },
  { id: "e", name: "E组：协同组", desc: "同时包含标签、评论与核验入口（嵌入豆包AI）" },
]

export default function HomePage() {
  return (
    <main className="min-h-screen bg-muted/40 px-4 py-12">
      <div className="mx-auto max-w-2xl">
        <header className="mb-8 text-center">
          <h1 className="text-pretty text-2xl font-bold text-foreground sm:text-3xl">
            实验界面示例
          </h1>
          <p className="mt-2 text-balance text-sm text-muted-foreground">
            围绕一篇养生帖的五组实验设计界面，点击进入对应组别查看。
          </p>
        </header>

        <nav className="space-y-3">
          {groups.map((group) => (
            <Link
              key={group.id}
              href={`/${group.id}`}
              className="flex items-center justify-between rounded-xl border border-border bg-card px-5 py-4 transition-colors hover:border-primary/40 hover:bg-primary/5"
            >
              <span className="flex flex-col">
                <span className="text-base font-semibold text-foreground">{group.name}</span>
                <span className="mt-0.5 text-sm text-muted-foreground">{group.desc}</span>
              </span>
              <ArrowRight className="h-5 w-5 shrink-0 text-muted-foreground" aria-hidden="true" />
            </Link>
          ))}
        </nav>

        <p className="mt-8 text-center text-xs text-muted-foreground">
          * 以上为实验设计界面示例，仅用于研究材料展示，不代表真实平台内容。
        </p>
      </div>
    </main>
  )
}
