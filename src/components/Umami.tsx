import Script from 'next/script.js'

export interface UmamiProps {
  id: string
  src?: string
}

export const Umami = ({ id, src = 'https://analytics.umami.is/script.js' }: UmamiProps) => {
  return <Script async defer data-website-id={id} src={src} />
}
