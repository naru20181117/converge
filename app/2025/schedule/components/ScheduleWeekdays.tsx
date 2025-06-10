import React from 'react'
import { WeekdaySchedule, SessionLevel } from '../types'

interface ScheduleWeekdaysProps {
  data: WeekdaySchedule[]
  levelFilter?: SessionLevel | 'all'
}

export const ScheduleWeekdays: React.FC<ScheduleWeekdaysProps> = ({
  data,
  levelFilter = 'all',
}) => {
  const filteredData = data
    .map((day) => ({
      ...day,
      slots: day.slots
        .map((slot) => ({
          ...slot,
          sessions: slot.sessions.filter(
            (session) => levelFilter === 'all' || session.level === levelFilter
          ),
        }))
        .filter((slot) => slot.sessions.length > 0),
    }))
    .filter((day) => day.slots.length > 0)

  return (
    <div className="space-y-8">
      {filteredData.map((day, dayIndex) => (
        <div key={`day-${dayIndex}`} className="border rounded-lg overflow-hidden bg-white">
          <div className="px-4 py-2 bg-muted/10 border-b">
            <h3 className="text-lg font-semibold">{day.date}</h3>
          </div>
          <div className="pt-2 pb-4 px-2 space-y-4">
            {day.slots.map((timeSlot, slotIndex) => (
              <div key={`slot-${dayIndex}-${slotIndex}`} className="border-t first:border-t-0">
                {timeSlot.sessions.map((session, sessionIndex) => {
                  // 時間帯に応じたボーダー色を設定
                  const borderColorClass = timeSlot.time.startsWith('19:00')
                    ? 'border-primary/70'
                    : 'border-secondary/70'

                  return (
                    <div
                      key={`session-${dayIndex}-${slotIndex}-${sessionIndex}`}
                      className={`${sessionIndex > 0 ? 'bg-muted/5' : ''}`}
                    >
                      <div className="p-3 grid grid-cols-[90px_1fr] gap-3">
                        {/* 時間表示は最初のセッションのみ表示 */}
                        <div
                          className={`text-sm font-medium text-muted-foreground whitespace-nowrap ${sessionIndex > 0 ? 'opacity-0' : ''}`}
                        >
                          {timeSlot.time}
                        </div>
                        <div className={`border-l-2 ${borderColorClass} pl-3`}>
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
                            <p className="text-sm text-muted-foreground mt-1">
                              {session.description}
                            </p>
                          )}
                          {session.note && (
                            <span className="block bg-gray-100 text-gray-800 px-2 py-1 rounded mt-2 text-xs">
                              {session.note}
                            </span>
                          )}
                          {session.sub && (
                            <p className="text-xs italic text-muted-foreground mt-1">
                              {session.sub}
                            </p>
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
                  )
                })}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default ScheduleWeekdays
