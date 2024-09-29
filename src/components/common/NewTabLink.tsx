export const NewTabLink = ({
  children,
  href,
  className,
}: {
  children: React.ReactNode
  href: string
  className: string
}) => {
  return (
    <a href={href} target="_blank" rel="noreferrer" className={className}>
      {children}
    </a>
  )
}
