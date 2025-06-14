import React, { useEffect, useState } from 'react'

interface CountdownTimerProps {
  targetDate: Date
  endDate?: Date
}

export const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate, endDate }) => {
  const [timeLeft, setTimeLeft] = useState(targetDate.getTime() - Date.now())
  const [isEventStarted, setIsEventStarted] = useState(false)
  const [isEventEnded, setIsEventEnded] = useState(false)
  const [showCelebration, setShowCelebration] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now()
      const newTimeLeft = targetDate.getTime() - now
      setTimeLeft(newTimeLeft)

      if (newTimeLeft <= 0 && !isEventStarted) {
        setIsEventStarted(true)
        setShowCelebration(true)
        setTimeout(() => setShowCelebration(false), 5000) // 5秒後にお祝いアニメーション終了
      }

      if (endDate && endDate.getTime() <= now && !isEventEnded) {
        setIsEventEnded(true)
        setShowCelebration(true)
        setTimeout(() => setShowCelebration(false), 5000) // 5秒後にお祝いアニメーション終了
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [targetDate, endDate, isEventStarted, isEventEnded])

  const calculateTime = () => {
    const seconds = Math.max(0, Math.floor((timeLeft / 1000) % 60))
    const minutes = Math.max(0, Math.floor((timeLeft / 1000 / 60) % 60))
    const hours = Math.max(0, Math.floor((timeLeft / (1000 * 60 * 60)) % 24))
    const days = Math.max(0, Math.floor(timeLeft / (1000 * 60 * 60 * 24)))
    return { days, hours, minutes, seconds }
  }

  const { days, hours, minutes, seconds } = calculateTime()

  // イベント終了時の表示
  if (isEventEnded) {
    return (
      <div className="text-center space-y-12 bg-gradient-to-br from-blue-900 to-blue-950 text-white p-12 rounded-lg relative overflow-hidden">
        {/* 背景アニメーション */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>

        {/* 花火エフェクト */}
        {showCelebration && (
          <>
            <div className="absolute top-4 left-4 w-4 h-4 bg-yellow-400 rounded-full animate-ping"></div>
            <div className="absolute top-8 right-8 w-3 h-3 bg-pink-400 rounded-full animate-ping animation-delay-500"></div>
            <div className="absolute bottom-8 left-8 w-5 h-5 bg-green-400 rounded-full animate-ping animation-delay-1000"></div>
            <div className="absolute bottom-4 right-4 w-3 h-3 bg-blue-400 rounded-full animate-ping animation-delay-1500"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-red-400 rounded-full animate-ping animation-delay-2000"></div>
          </>
        )}

        {/* メインコンテンツ */}
        <div className="relative z-10">
          <h2 className="text-5xl font-bold flex items-center justify-center mb-4">Thank You!</h2>
          <div className="text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Coaching Converge 2025
            </span>
          </div>
          <p className="text-2xl mb-4 text-gray-300">Thank you for your participation!</p>
          <p className="text-xl animate-pulse">See you soon! 👋</p>
        </div>

        {/* スタイル追加用のCSS */}
        <style jsx>{`
          .animation-delay-500 {
            animation-delay: 0.5s;
          }
          .animation-delay-1000 {
            animation-delay: 1s;
          }
          .animation-delay-1500 {
            animation-delay: 1.5s;
          }
          .animation-delay-2000 {
            animation-delay: 2s;
          }
        `}</style>
      </div>
    )
  }

  // イベント開始時の表示
  if (isEventStarted && !isEventEnded) {
    return (
      <div className="text-center space-y-12 bg-gradient-to-br from-blue-900 to-blue-950 text-white p-12 rounded-lg relative overflow-hidden">
        {/* 背景アニメーション */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>

        {/* 花火エフェクト */}
        {showCelebration && (
          <>
            <div className="absolute top-4 left-4 w-4 h-4 bg-yellow-400 rounded-full animate-ping"></div>
            <div className="absolute top-8 right-8 w-3 h-3 bg-pink-400 rounded-full animate-ping animation-delay-500"></div>
            <div className="absolute bottom-8 left-8 w-5 h-5 bg-green-400 rounded-full animate-ping animation-delay-1000"></div>
            <div className="absolute bottom-4 right-4 w-3 h-3 bg-blue-400 rounded-full animate-ping animation-delay-1500"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-red-400 rounded-full animate-ping animation-delay-2000"></div>
          </>
        )}

        {/* メインコンテンツ */}
        <div className="relative z-10">
          <h2 className="text-5xl font-bold flex items-center justify-center mb-4">
            🎉 Welcome to 🎉
          </h2>
          <div className="text-5xl font-bold animate-pulse">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Coaching Converge 2025
            </span>
          </div>
          <p className="text-2xl mt-8 animate-pulse text-gray-300">イベントが開催中です！</p>
        </div>

        {/* スタイル追加用のCSS */}
        <style jsx>{`
          .animation-delay-500 {
            animation-delay: 0.5s;
          }
          .animation-delay-1000 {
            animation-delay: 1s;
          }
          .animation-delay-1500 {
            animation-delay: 1.5s;
          }
          .animation-delay-2000 {
            animation-delay: 2s;
          }
        `}</style>
      </div>
    )
  }

  return (
    <div className="text-center space-y-12 bg-gradient-to-br from-blue-900 to-blue-950 text-white p-12 rounded-lg">
      <h2 className="text-5xl font-bold flex items-center justify-center">See you in</h2>
      <div className="text-5xl">
        <span>{days} Days</span>, <span>{hours} Hours</span>, <span>{minutes} Minutes</span>,{' '}
        <span>{seconds} Seconds</span>
      </div>
    </div>
  )
}
