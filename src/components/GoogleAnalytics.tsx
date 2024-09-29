import Script from 'next/script.js'

export interface GoogleAnalyticsProps {
  id: string
}

export const GoogleAnalytics = ({ id }: GoogleAnalyticsProps) => {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
      />

      <Script strategy="afterInteractive" id="ga-script">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${id}');
        `}
      </Script>
    </>
  )
}
