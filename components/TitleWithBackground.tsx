import React from 'react'

interface TitleWithBackgroundProps {
  title: string
  backgroundText: string
}

export const TitleWithBackground = ({ title, backgroundText }: TitleWithBackgroundProps) => {
  return (
    <div className="text-center relative space-y-2 py-12">
      <div className="relative inline-block">
        <div className="relative inline-block py-2">
          <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 text-8xl font-bold text-gray-300 select-none pointer-events-none transition-all">
            {backgroundText}
          </span>
          <h1 className="text-3xl font-bold relative text-foreground">{title}</h1>
        </div>
      </div>
    </div>
  )
}
