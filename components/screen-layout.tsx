import type { ReactNode } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export function ScreenLayout({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen bg-muted/40 px-4 py-8">
      <div className="mx-auto max-w-[400px]">
        <div className="mb-4 flex items-center">
          <Link
            href="/"
            className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            返回
          </Link>
        </div>
        {children}
      </div>
    </main>
  )
}
