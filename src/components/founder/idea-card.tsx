"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Eye, Check, Clock, X } from "lucide-react"

interface StatusProps {
  icon: JSX.Element
  label: string
  classes: string
}

interface IdeaCardProps {
  idea: {
    id: number
    title: string
    status: "approved" | "pending" | "rejected"
    statusBadges: Array<{ label: string; color?: string; icon?: boolean }>
    views: number
    fundRaised: string | null
    fundGoal: string | null
    investors: number
    equity: string
    createdDate: string
    marketSize: string
    offeredEquity: string
    pauseInfo: boolean
  }
}

const STATUS_MAP: Record<string, StatusProps> = {
  approved: {
    icon: <Check size={16} className="text-green-600" />,
    label: "Approved",
    classes:
      "bg-green-50 dark:bg-green-950 text-green-700 dark:text-green-400 border-green-200 dark:border-green-800",
  },
  pending: {
    icon: <Clock size={16} className="text-amber-600" />,
    label: "Pending",
    classes:
      "bg-amber-50 dark:bg-amber-950 text-amber-700 dark:text-amber-400 border-amber-200 dark:border-amber-800",
  },
  rejected: {
    icon: <X size={16} className="text-red-600" />,
    label: "Rejected",
    classes:
      "bg-red-50 dark:bg-red-950 text-red-700 dark:text-red-400 border-red-200 dark:border-red-800",
  },
}

const BADGE_COLOR_MAP: Record<string, string> = {
  amber:
    "bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200 border border-amber-200 dark:border-amber-800",
  teal:
    "bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 border border-teal-200 dark:border-teal-800",
  default:
    "bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-600",
}

export default function IdeaCard({ idea }: IdeaCardProps) {
  const [isPaused, setIsPaused] = useState(idea.pauseInfo)
  const status = STATUS_MAP[idea.status]

  const InfoRow = ({ label, value }: { label: string; value: React.ReactNode }) => (
    <div className="flex text-xs sm:text-sm text-slate-600 dark:text-slate-400">
      <span className="min-w-[130px] font-medium">{label}</span>
      <span>{value}</span>
    </div>
  )

  return (
    <div className="bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm p-4 sm:p-5">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-4">
        <h3 className="text-md sm:text-lg font-semibold text-slate-900 dark:text-white">
          {idea.title}
        </h3>

        <div className="flex items-center gap-2">
          <button
            className={`flex items-center gap-1 px-2 py-1 rounded-full text-sm font-medium border ${status.classes}`}
          >
            {status.icon}
            {status.label}
          </button>
          <button className="flex items-center gap-1 px-2 py-1 rounded-full text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800">
            <Eye size={14} />
            View
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 border-t border-slate-200 dark:border-slate-800 pt-3">
        {/* Left */}
        <div className="space-y-2">
          <div className="flex flex-wrap items-center gap-1 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            <span className="min-w-[130px] font-medium">Status:</span>
            {idea.statusBadges.map((badge, idx) => (
              <Badge
                key={idx}
                variant="secondary"
                className={`text-xs py-0.5 px-2 ${BADGE_COLOR_MAP[badge.color || "default"]}`}
              >
                {badge.icon && "✓"} {badge.label}
              </Badge>
            ))}
          </div>

          <InfoRow label="Created:" value={idea.createdDate} />
          <InfoRow label="Market Size:" value={idea.marketSize} />
          <InfoRow label="Offered Equity:" value={idea.offeredEquity} />
        </div>

        {/* Right */}
        <div className="space-y-2">
          <InfoRow label="Views:" value={idea.views} />

          {idea.fundRaised && (
            <InfoRow
              label="Fund Raised:"
              value={`${idea.fundRaised} raised of ${idea.fundGoal}`}
            />
          )}

          <InfoRow label="Equity:" value={idea.equity} />

          <div className="flex items-center text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            <span className="min-w-[130px] font-medium">Investors:</span>
            <div className="flex -space-x-1">
              {Array.from({ length: idea.investors }).map((_, i) => (
                <Avatar key={i} className="h-6 w-6 border-2 border-white dark:border-slate-900">
                  <AvatarFallback className="bg-slate-300 dark:bg-slate-700 text-xs">
                    {String.fromCharCode(65 + i)}
                  </AvatarFallback>
                </Avatar>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Pause */}
      {idea.pauseInfo && (
        <div className="mt-3 pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <div>
            <h4 className="font-semibold text-sm text-slate-900 dark:text-white">
              Pause Idea
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              Already funded or building? Pause new intros, stay visible.
              <span className="font-semibold"> Resume</span> anytime.
            </p>
          </div>

          <button
            onClick={() => setIsPaused(!isPaused)}
            className={`relative inline-flex h-6 w-12 items-center rounded-full ${
              isPaused ? "bg-blue-600" : "bg-slate-300 dark:bg-slate-600"
            }`}
          >
            <span
              className={`inline-block h-5 w-5 rounded-full bg-white transform transition ${
                isPaused ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </button>
        </div>
      )}
    </div>
  )
}
