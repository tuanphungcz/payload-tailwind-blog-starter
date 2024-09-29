import { ReactNode } from 'react'
import clsx from 'clsx'

type ContainerSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'

interface ContainerProps {
  children: ReactNode
  size?: ContainerSize
  className?: string
}

const sizeClasses: Record<ContainerSize, string> = {
  xs: 'max-w-xl',
  sm: 'max-w-3xl',
  md: 'max-w-4xl',
  lg: 'max-w-5xl',
  xl: 'max-w-6xl',
  '2xl': 'max-w-7xl',
}

export const Container = ({ children, size = 'xl', className }: ContainerProps) => {
  return <div className={clsx(sizeClasses[size], 'mx-auto px-4', className)}>{children}</div>
}
