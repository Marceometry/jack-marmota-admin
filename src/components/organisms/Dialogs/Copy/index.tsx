'use client'

import { Copy } from 'lucide-react'
import { useState } from 'react'
import { Button, IconButton } from '@/components/atoms'
import { Modal } from '@/components/molecules'
import { SONG_COPY_TEMPLATES } from '@/constants'
import { useClipboard, useDisclose } from '@/hooks'

type Props = {
  list: object[]
  templates?: string[]
}

const datalistId = 'template-list'

export function CopyDialog({ list, templates = SONG_COPY_TEMPLATES }: Props) {
  const [template, setTemplate] = useState(templates[0])
  const { isOpen, onClose, onOpenChange } = useDisclose()
  const copy = useClipboard(template)

  const handleCopy = () => {
    copy(list)
    onClose()
  }

  return (
    <Modal
      open={isOpen}
      onOpenChange={onOpenChange}
      title="Copiar lista"
      description="Você pode customizar o template abaixo para alterar o formato do texto final"
      behaviour="dialog"
      trigger={
        <IconButton aria-label="Copiar lista" icon={<Copy size={16} />} />
      }
    >
      <input
        list={datalistId}
        value={template}
        onChange={(e) => setTemplate(e.target.value)}
        placeholder={templates[0]}
        className="mb-6 w-full rounded-md text-sm py-2 px-3 border border-zinc-700 hover:border-zinc-600 placeholder:text-zinc-500 bg-transparent transition-all"
      />
      <datalist id={datalistId}>
        {templates.map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </datalist>

      <div className="grid grid-cols-2 gap-4">
        <Button variant="outline" onClick={onClose}>
          Cancelar
        </Button>
        <Button onClick={handleCopy}>Copiar</Button>
      </div>
    </Modal>
  )
}
