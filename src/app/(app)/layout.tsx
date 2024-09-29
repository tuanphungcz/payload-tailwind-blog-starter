import { Header } from '@/app/(app)/Header'
import { Analytics } from '@vercel/analytics/react'

import { Footer } from '@/app/(app)/Footer'
import './globals.css'
import { Umami } from '@/components/Umami'
import { getGlobalSettings } from '@/actions/getGlobalSettings'
import { GoogleAnalytics } from '@/components/GoogleAnalytics'

const RootLayout: React.FC<{ children: React.ReactNode }> = async ({ children }) => {
  const { analytics } = await getGlobalSettings()

  return (
    <html>
      <head></head>

      <body>
        <Analytics />
        {analytics?.googleAnalyticsId && <GoogleAnalytics id={analytics.googleAnalyticsId} />}
        {analytics?.umami?.umamiWebsiteId && analytics?.umami?.umamiSrc && (
          <Umami id={analytics.umami.umamiWebsiteId} src={analytics.umami.umamiSrc} />
        )}
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

export default RootLayout
