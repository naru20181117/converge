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
    <div className="space-y-6 sm:space-y-8">
      {filteredData.map((day, dayIndex) => (
        <div
          key={`day-${dayIndex}`}
          className="border rounded-lg overflow-hidden bg-white shadow-sm"
        >
          <div className="px-3 sm:px-4 py-2 sm:py-3 bg-muted/10 border-b">
            <h3 className="text-base sm:text-lg font-semibold">{day.date}</h3>
          </div>
          <div className="pt-2 pb-3 sm:pb-4 px-2 space-y-3 sm:space-y-4">
            {day.slots.map((timeSlot, slotIndex) => (
              <div
                key={`slot-${dayIndex}-${slotIndex}`}
                className="border-t first:border-t-0 pt-3 first:pt-0"
              >
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
                      <div className="p-3 sm:p-4 grid grid-cols-[45px_1fr] sm:grid-cols-[90px_1fr] gap-2 sm:gap-3">
                        {/* 時間表示は最初のセッションのみ表示 */}
                        <div
                          className={`text-xs sm:text-sm font-medium text-muted-foreground ${sessionIndex > 0 ? 'opacity-0' : ''}`}
                        >
                          <div className="flex flex-col sm:block">
                            <span className="block sm:inline">{timeSlot.time.split('-')[0]}</span>
                            <span className="block sm:inline sm:before:content-['-'] text-center sm:text-left">
                              {timeSlot.time.split('-')[1]}
                            </span>
                          </div>
                        </div>
                        <div className={`border-l-2 ${borderColorClass} pl-2 sm:pl-3`}>
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                            <h4 className="text-sm sm:text-base font-semibold leading-tight">
                              {session.title}
                            </h4>
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
                            <p className="text-xs sm:text-sm text-muted-foreground mt-2 leading-relaxed">
                              {session.description}
                            </p>
                          )}
                          {session.note && (
                            <span className="block bg-gray-50 text-gray-800 px-2 py-2 rounded mt-2 text-xs leading-relaxed">
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
