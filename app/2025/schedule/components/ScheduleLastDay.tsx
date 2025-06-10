import React from 'react'
import { LastDaySchedule, SessionLevel } from '../types'

interface ScheduleLastDayProps {
  data: LastDaySchedule
  levelFilter?: SessionLevel | 'all'
}

export const ScheduleLastDay: React.FC<ScheduleLastDayProps> = ({ data, levelFilter = 'all' }) => {
  const filteredData = data
    .map((timeSlot) => ({
      ...timeSlot,
      sessions: timeSlot.sessions.filter(
        (session) => levelFilter === 'all' || session.level === levelFilter
      ),
    }))
    .filter((timeSlot) => timeSlot.sessions.length > 0)

  return (
    <div className="space-y-4">
      {filteredData.map((timeSlot, index) => (
        <div
          key={`last-day-${timeSlot.time}-${index}`}
          className="border rounded-lg overflow-hidden"
        >
          {timeSlot.sessions.map((session, sessionIndex) => (
            <div
              key={`last-day-session-${index}-${sessionIndex}`}
              className={`${sessionIndex > 0 ? 'border-t bg-muted/5' : ''}`}
            >
              <div className="p-3 grid grid-cols-[90px_1fr] gap-3">
                {/* 時間表示は最初のセッションのみ表示 */}
                <div
                  className={`text-sm font-medium text-muted-foreground whitespace-nowrap ${sessionIndex > 0 ? 'opacity-0' : ''}`}
                >
                  {timeSlot.time}
                </div>
                <div className={session.bg || 'border-l-2 border-primary/70 pl-3'}>
                  <div className="flex justify-between items-start">
                    <h4 className="text-sm font-semibold">{session.title}</h4>
                    <div className="flex gap-1 ml-2">
                      {session.level && (
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded">
                          {session.level}
                        </span>
                      )}
                      {session.unit && (
                        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded">
                          {session.unit}
                        </span>
                      )}
                    </div>
                  </div>
                  {session.description && (
                    <p className="text-sm text-muted-foreground mt-1">{session.description}</p>
                  )}
                  {session.note && (
                    <p className="text-xs text-muted-foreground mt-1">{session.note}</p>
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

export default ScheduleLastDay
