'use client'

import { useForm } from 'react-hook-form'
import { Input } from '@/components/atoms'
import { Form } from '@/components/molecules'
import { SelectableSongsTable } from '@/components/organisms'
import { Song } from '@/types'

export default function Page() {
  const formMethods = useForm({
    defaultValues: { selectedSongs: [] as Song[] },
  })

  const selectedSongs = formMethods.watch('selectedSongs')
  const handleChangeSong = (song: Song) => {
    const index = selectedSongs.findIndex((s) => s.id === song.id)
    const value =
      index < 0
        ? [...selectedSongs, song]
        : [...selectedSongs.slice(0, index), ...selectedSongs.slice(index + 1)]
    formMethods.setValue('selectedSongs', value)
  }

  const handleSubmit = (data: any) => {
    console.log(data)
  }

  return (
    <div className="grid grid-cols-2 gap-8">
      <div>
        <Form formMethods={formMethods} onSubmit={handleSubmit}>
          <div className="grid grid-cols-[2fr_1fr] gap-4 mb-6 max-w-md">
            <Input name="name" label="Nome da setlist" required />
            <Input name="date" type="date" label="Data" required />
          </div>
        </Form>

        <SelectableSongsTable
          selectedSongs={selectedSongs}
          onChangeSong={handleChangeSong}
        />
      </div>

      <div>
        {selectedSongs.map((s, i) => (
          <p key={s.name}>
            {i + 1}. {s.name}
          </p>
        ))}
      </div>
    </div>
  )
}
