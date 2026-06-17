import { AlertTriangle } from "lucide-react"

export function RiskLabel() {
  return (
    <div className="mx-4 mb-3 flex items-center gap-2 rounded-lg border border-warning/30 bg-warning/10 px-3 py-2">
      <AlertTriangle className="h-4 w-4 shrink-0 text-warning" aria-hidden="true" />
      <span className="text-sm font-semibold text-warning">个人经验不等于医学证据</span>
    </div>
  )
}
