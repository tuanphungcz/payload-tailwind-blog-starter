import { getGlobalSettings } from '@/actions/getGlobalSettings'
import { Container } from '@/components/common/Container'
import Socials from '@/components/Socials'
import Link from 'next/link'

export const Header = async () => {
  const { navbar } = await getGlobalSettings()

  return (
    <header className="sticky top-0 z-50 w-full border-b transition-shadow duration-300 bg-white">
      <Container>
        <div className="flex justify-between w-full py-4">
          <Link
            href="/"
            className="mr-6 flex items-center space-x-2 hover:text-gray-600 transition-colors"
          >
            <span className="font-bold">{navbar?.title}</span>
          </Link>
          <Socials />
        </div>
      </Container>
    </header>
  )
}
