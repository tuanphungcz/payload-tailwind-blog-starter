import { getGlobalSettings } from '@/actions'
import { Container } from '@/components/common/Container'

export const Footer = async () => {
  const { footer } = await getGlobalSettings()

  return (
    <footer className="border-t py-6">
      <Container>
        <div className="text-sm text-gray-600">{footer?.text}</div>
      </Container>
    </footer>
  )
}
