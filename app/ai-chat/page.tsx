"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Bot } from "lucide-react"

const ROUNDS = [
  {
    user: "我看到一条信息，说小米和枸杞、大枣一起煮粥，坚持每天早晚喝，3个月后血糖真的下降了。还说这个方法对控制糖尿病特别有效。这个说法可信吗？",
    ai: "我们先别急着相信，也不用马上否定。我陪你一起从几个问题来判断一下：\n问题1：这条信息有没有说明来自正规医院、医学指南或临床研究？\n问题2：它是用科学证据说明“能降血糖”，还是主要依靠个人经历来证明？\n问题3：小米粥、大枣和枸杞本身是否含有碳水或糖分，长期早晚喝会不会影响餐后血糖？\n问题4：它有没有把普通食物说成具有明确“降糖”“控糖”效果？",
  },
  {
    user: "它没有写具体研究，只是说自己62岁，血糖一直偏高，后来听别人和专家说这样煮有效，坚持喝了3个月，血糖真的下降了。",
    ai: "那我们可以继续想一想。\n如果一条信息主要靠“我自己喝了以后血糖下降”来证明，它听起来很真实，但还不能说明血糖下降一定是这碗粥带来的。血糖变化可能和吃药、运动、整体饮食控制、测量时间等都有关系。\n另外，小米属于主食，大枣和枸杞也含有一定糖分。如果每天早晚都喝，并不一定会帮助降血糖，还需要看总量和个人血糖情况。\n所以，这条信息里比较需要警惕的是：它把一种普通饮食经验说成了明确的“降血糖方法”。",
  },
  {
    user: "这样看，好像确实不能只凭一个人的经历就相信。那我该怎么理解这条信息呢？",
    ai: "你这样判断就很稳妥了。简单来说，这条信息可信度不高，更像是把个人饮食经验包装成了“降糖妙招”。\n小米、枸杞和大枣可以作为普通食物看待，但不要把它们当成专门的降血糖方法。血糖偏高时，还是要看血糖记录，并听医生或营养师的建议。\n以后再看到类似说法，你可以先问自己一句：\n“它有没有可靠证据，还是只是在讲个人故事？”\n这样就不容易被误导啦。",
  },
]

type Phase = "idle" | "thinking" | "typing" | "done"

export default function AiChatPage() {
  const [activeRound, setActiveRound] = useState(0)
  const [sentCount, setSentCount] = useState(0)
  const [phase, setPhase] = useState<Phase>("idle")
  const [typedText, setTypedText] = useState("")
  const scrollRef = useRef<HTMLDivElement>(null)

  function askQuestion() {
    if (phase === "thinking" || phase === "typing") return
    setSentCount((c) => c + 1)
    setActiveRound((r) => r + 1)
    setPhase("thinking")
  }

  useEffect(() => {
    if (phase !== "thinking") return
    const t = setTimeout(() => {
      setTypedText("")
      setPhase("typing")
    }, 1400)
    return () => clearTimeout(t)
  }, [phase])

  useEffect(() => {
    if (phase !== "typing") return
    const full = ROUNDS[sentCount - 1].ai
    let i = 0
    const timer = setInterval(() => {
      i += 1
      setTypedText(full.slice(0, i))
      if (i >= full.length) {
        clearInterval(timer)
        setPhase("done")
      }
    }, 35)
    return () => clearInterval(timer)
  }, [phase, sentCount])

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" })
  }, [typedText, phase, activeRound])

  const answeringRound = sentCount - 1
  const showPreset = activeRound < ROUNDS.length && phase !== "thinking" && phase !== "typing"

  // 目标链接
  const targetUrl =
    "https://vp.fact.qq.com/article?question=XBB%20%E6%8B%89%E8%82%9A%E5%AD%90&id=84693b3e22fa29ccac13ee6d2baef001"

  return (
    <main className="min-h-screen bg-muted/40 px-4 py-8">
      <div className="mx-auto w-full max-w-[400px]">
        <div className="flex h-[720px] flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm">
          {/* 顶部标题栏 */}
          <header className="flex items-center gap-2 border-b border-border bg-card px-3 py-3">
            <h1 className="text-pretty text-[15px] font-semibold leading-tight text-foreground">
              小米、枸杞、大枣一起煮能降血糖吗？
            </h1>
          </header>

          {/* 对话区 */}
          <div ref={scrollRef} className="flex-1 space-y-4 overflow-y-auto px-3 py-4">
            {ROUNDS.map((round, idx) => {
              if (idx >= sentCount) return null
              const isAnswering = idx === answeringRound
              return (
                <div key={idx} className="space-y-4">
                  {/* 用户气泡 */}
                  <div className="flex items-start justify-end gap-2">
                    <div className="max-w-[78%] rounded-2xl rounded-tr-sm bg-primary px-3.5 py-2.5 text-[14px] leading-relaxed text-primary-foreground">
                      {round.user}
                    </div>
                    <Image
                      src="/images/avatar-elder-cartoon.png"
                      alt="用户头像"
                      width={36}
                      height={36}
                      className="h-9 w-9 shrink-0 rounded-full object-cover"
                    />
                  </div>

                  {/* AI 气泡 */}
                  <div className="flex items-start gap-2">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <Bot className="h-5 w-5 text-primary" aria-hidden="true" />
                    </div>
                    <div className="max-w-[78%] rounded-2xl rounded-tl-sm bg-muted px-3.5 py-2.5 text-[14px] leading-relaxed text-foreground">
                      {isAnswering && phase === "thinking" ? (
                        <span className="flex items-center gap-1.5 py-0.5 text-muted-foreground">
                          <span className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground/60 [animation-delay:-0.3s]" />
                          <span className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground/60 [animation-delay:-0.15s]" />
                          <span className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground/60" />
                          <span className="ml-1 text-xs">AI 正在思考…</span>
                        </span>
                      ) : (
                        <p className="whitespace-pre-line">
                          {isAnswering && phase === "typing" ? typedText : round.ai}
                          {isAnswering && phase === "typing" && (
                            <span className="ml-0.5 inline-block h-4 w-0.5 animate-pulse bg-foreground align-middle" />
                          )}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}

            {/* 预设提问入口 */}
            {showPreset && (
              <div className="flex flex-col items-end gap-2 pt-1">
                <button
                  type="button"
                  onClick={askQuestion}
                  className="max-w-[85%] rounded-2xl border border-primary/40 bg-primary/5 px-3.5 py-2.5 text-left text-[14px] leading-relaxed text-primary transition-colors hover:bg-primary/10"
                >
                  {ROUNDS[activeRound].user}
                </button>
                <button
                  type="button"
                  onClick={askQuestion}
                  className="flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/80 active:bg-primary/70"
                >
                  发送
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
            )}

            {activeRound >= ROUNDS.length && phase === "done" && (
              <div className="space-y-2 pt-2">
                <p className="text-center text-xs text-muted-foreground">本次对话已结束</p>
                <p className="text-center text-sm">
                  <span>🔎 辟谣链接：</span>
                  {/* 直接跳转至目标网页 */}
                  <a
                    href={targetUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-blue-500 hover:underline"
                  >
                    查看详细辟谣内容
                  </a>
                </p>
              </div>
            )}
          </div>

          {/* 底部提示 */}
          <div className="border-t border-border bg-card px-3 py-3">
            <p className="text-center text-xs text-muted-foreground">
              {showPreset ? "点击问题或发送按钮，继续向 AI 提问" : "AI 正在回答…"}
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}