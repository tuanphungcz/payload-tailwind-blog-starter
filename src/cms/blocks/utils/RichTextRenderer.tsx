import { serializeLexical } from '@/cms/blocks/utils/serialize'

interface RichTextRendererProps {
  content: any
}

export const RichTextRenderer: React.FC<RichTextRendererProps> = ({ content }) => {
  return (
    <div className="prose prose-lg max-w-none">
      {serializeLexical({ nodes: content.root.children })}
    </div>
  )
}
