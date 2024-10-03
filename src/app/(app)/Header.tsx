import { getGlobalSettings } from '@/actions/getGlobalSettings'
import { Container } from '@/components/common/Container'
import Socials from '@/components/Socials'
import Link from 'next/link'

export const Header = async () => {
  const { navbar } = await getGlobalSettings()

  return (
    <header className="sticky top-0 z-50 w-full border-b transition-shadow duration-300 bg-white">
      <Container>
        <div className="flex flex-wrap gap-4 justify-between w-full py-4">
          <Link
            href="/"
            className="mr-6 flex items-center space-x-2 hover:text-gray-600 transition-colors"
          >
            <span className="font-bold">{navbar?.title}</span>
          </Link>

          <div className="flex items-center gap-4">
            <Link
              href="/admin"
              className="border inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-gray-900 h-10 px-4 py-2"
            >
              Admin
            </Link>
            <Socials />
          </div>
        </div>
      </Container>
    </header>
  )
}
