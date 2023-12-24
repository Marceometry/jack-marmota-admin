'use client'

import { Text, View } from '@react-pdf/renderer'
import { Printer } from 'lucide-react'
import { useState } from 'react'
import { ControlledInput, IconButton } from '@/components/atoms'
import { Modal, PdfDocument } from '@/components/molecules'
import { SONG_COPY_TEMPLATES } from '@/constants'
import { Song } from '@/types'
import { templateReplace } from '@/utils'

type Props = {
  songs: Song[]
}

export function PrintSetlistForm({ songs }: Props) {
  const [template, setTemplate] = useState(SONG_COPY_TEMPLATES[0])
  const [fontSize, setFontSize] = useState('18')
  const [columns, setColumns] = useState('1')

  const columnCount = Number(columns)
  const fraction = Math.ceil(songs.length / columnCount)
  const slices = Array.from({ length: columnCount }).map((_, i) =>
    songs.slice(i * fraction, (i + 1) * fraction),
  )

  const trigger = (
    <IconButton aria-label="Imprimir lista" icon={<Printer size={16} />} />
  )

  return (
    <Modal width={600} title="Imprimir setlist" trigger={trigger}>
      <ControlledInput
        id="template"
        label="Template"
        value={template}
        onChange={setTemplate}
        placeholder={SONG_COPY_TEMPLATES[0]}
        options={SONG_COPY_TEMPLATES}
      />
      <div className="grid grid-cols-2 gap-4 mt-3 mb-6">
        <ControlledInput
          id="font-size"
          type="number"
          label="Fonte"
          value={fontSize}
          onChange={setFontSize}
        />
        <ControlledInput
          id="columns"
          type="number"
          label="Colunas"
          value={columns}
          onChange={setColumns}
        />
      </div>

      <PdfDocument title="Setlist">
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          {Array.from({ length: columnCount }).map((_, i) => (
            <View key={i}>
              {slices[i].map((song, index) => (
                <Text key={song.name} style={{ fontSize }}>
                  {templateReplace(song, index + fraction * i, template)}
                </Text>
              ))}
            </View>
          ))}
        </View>
      </PdfDocument>
    </Modal>
  )
}
