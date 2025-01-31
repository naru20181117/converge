import React, { useEffect, useState } from 'react'

interface CountdownTimerProps {
  targetDate: Date
}

export const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(targetDate.getTime() - Date.now())

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(targetDate.getTime() - Date.now())
    }, 1000)

    return () => clearInterval(interval)
  }, [targetDate])

  const calculateTime = () => {
    const seconds = Math.floor((timeLeft / 1000) % 60)
    const minutes = Math.floor((timeLeft / 1000 / 60) % 60)
    const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24)
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24))
    return { days, hours, minutes, seconds }
  }

  const { days, hours, minutes, seconds } = calculateTime()

  return (
    <div className="text-center space-y-12 bg-black text-white p-12 rounded-lg">
      <h2 className="text-5xl font-bold flex items-center justify-center">See you in</h2>
      <div className="text-5xl">
        <span>{days} Days</span>, <span>{hours} Hours</span>, <span>{minutes} Minutes</span>,{' '}
        <span>{seconds} Seconds</span>
      </div>
    </div>
  )
}
