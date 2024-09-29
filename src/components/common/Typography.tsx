import clsx from 'clsx'
import { ReactNode } from 'react'

export const Title = ({ children, className }: { children: ReactNode; className?: string }) => {
  return (
    <h1 className={clsx('text-3xl lg:text-5xl font-bold text-gray-800 md:leading-14', className)}>
      {children}
    </h1>
  )
}

export const Description = ({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) => {
  return <div className={clsx('text-lg leading-7 text-gray-600', className)}>{children}</div>
}
