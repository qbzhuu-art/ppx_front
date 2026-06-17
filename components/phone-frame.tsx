import type { ReactNode } from "react"

export function PhoneFrame({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-[400px]">
      <div className="h-[720px] overflow-hidden rounded-xl border border-border bg-card shadow-sm">
        <div className="relative h-full overflow-y-auto">{children}</div>
      </div>
    </div>
  )
}
