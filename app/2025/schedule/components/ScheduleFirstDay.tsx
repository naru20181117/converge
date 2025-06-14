import React from 'react'
import { FirstDaySchedule, SessionLevel } from '../types'

interface ScheduleFirstDayProps {
  data: FirstDaySchedule
  levelFilter?: SessionLevel | 'all'
}

export const ScheduleFirstDay: React.FC<ScheduleFirstDayProps> = ({
  data,
  levelFilter = 'all',
}) => {
  const filteredData = data
    .map((timeSlot) => ({
      ...timeSlot,
      sessions: timeSlot.sessions.filter(
        (session) => levelFilter === 'all' || session.level === levelFilter
      ),
    }))
    .filter((timeSlot) => timeSlot.sessions.length > 0)

  return (
    <div className="space-y-3 sm:space-y-4">
      {filteredData.map((timeSlot, index) => (
        <div
          key={`first-day-${timeSlot.time}-${index}`}
          className="border rounded-lg overflow-hidden shadow-sm"
        >
          {timeSlot.sessions.map((session, sessionIndex) => (
            <div
              key={`first-day-session-${index}-${sessionIndex}`}
              className={`${sessionIndex > 0 ? 'border-t bg-muted/5' : ''}`}
            >
              <div className="p-3 sm:p-4 grid grid-cols-[70px_1fr] sm:grid-cols-[90px_1fr] gap-2 sm:gap-3">
                {/* 時間表示は最初のセッションのみ表示 */}
                <div
                  className={`text-xs sm:text-sm font-medium text-muted-foreground whitespace-nowrap ${sessionIndex > 0 ? 'opacity-0' : ''}`}
                >
                  {timeSlot.time}
                </div>
                <div className={session.bg || 'border-l-2 border-primary/70 pl-2 sm:pl-3'}>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                    <h4 className="text-sm sm:text-base font-semibold leading-tight">{session.title}</h4>
                    <div className="flex flex-wrap gap-1">
                      {session.level && (
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded whitespace-nowrap">
                          {session.level}
                        </span>
                      )}
                      {session.unit && (
                        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded whitespace-nowrap">
                          {session.unit}
                        </span>
                      )}
                    </div>
                  </div>
                  {session.description && (
                    <p className="text-xs sm:text-sm text-muted-foreground mt-2 leading-relaxed">{session.description}</p>
                  )}
                  {session.note && (
                    <p className="text-xs text-muted-foreground mt-2 leading-relaxed bg-gray-50 p-2 rounded">{session.note}</p>
                  )}
                  {session.link && (
                    <a
                      href={session.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-blue-600 hover:underline mt-1 block"
                    >
                      {session.linkLabel || session.link}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default ScheduleFirstDay
