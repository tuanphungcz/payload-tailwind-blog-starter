import SyntaxHighlighter from 'react-syntax-highlighter'
import { docco } from 'react-syntax-highlighter/dist/cjs/styles/hljs'
import { Block } from 'payload'

export const CodeBlockSchema: Block = {
  slug: 'codeBlock',
  fields: [
    {
      name: 'customCode',
      type: 'textarea',
      required: true,
    },
  ],
}

export const CodeBlock = ({ code }: { code: string }) => {
  return <SyntaxHighlighter style={docco}>{code}</SyntaxHighlighter>
}
