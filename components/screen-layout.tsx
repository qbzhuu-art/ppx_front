import type { ReactNode } from "react"

export function ScreenLayout({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen bg-muted/40 px-4 py-8">
      <div className="mx-auto max-w-[400px]">
        {children}
      </div>
    </main>
  )
}
