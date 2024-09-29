import Image from 'next/image'
import { NewTabLink } from './common/NewTabLink'
import { getGlobalSettings } from '@/actions'

export default async function Socials() {
  const { socials } = await getGlobalSettings()

  const socialItems = [
    {
      name: 'Twitter',
      href: socials?.twitter,
      icon: '/socials/twitter.svg',
    },
    {
      name: 'GitHub',
      href: socials?.github,
      icon: '/socials/github.svg',
    },
    {
      name: 'LinkedIn',
      href: socials?.linkedin,
      icon: '/socials/linkedin.svg',
    },
  ].filter(
    (item): item is { name: string; href: string; icon: string } =>
      typeof item.href === 'string' && item.href.trim() !== '',
  )

  return (
    <div className="flex justify-center space-x-6 md:order-2">
      {socialItems.map((item) => (
        <NewTabLink
          key={item.name}
          href={item.href}
          className="text-gray-400 transform hover:text-gray-500 filter hover:contrast-0"
        >
          <span className="sr-only">{item.name}</span>
          <Image src={item.icon} alt="social-icon" width={24} height={24} />
        </NewTabLink>
      ))}
    </div>
  )
}
