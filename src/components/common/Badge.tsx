import { cn } from '@/utils'
import { ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
  className?: string
  active?: boolean
  hoverable?: boolean
}

export const Badge = ({
  children,
  className = '',
  active = false,
  hoverable = false,
}: BadgeProps) => {
  return (
    <div
      className={cn(
        'bg-gray-200 text-gray-700 px-4 py-1.5 rounded-full text-sm font-semibold',
        active && 'bg-gray-500 text-white',
        hoverable && 'hover:bg-gray-500 transition-colors duration-200 hover:text-white',
        className,
      )}
    >
      {children}
    </div>
  )
}
