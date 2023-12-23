import { Song } from '@/types'

type Props = {
  songs: Song[]
}

export function SelectedSongsContainer({ songs }: Props) {
  return (
    <div className="flex-1">
      {!songs.length ? (
        <div className="h-full grid place-items-center">
          <p>Não há músicas selecionadas</p>
        </div>
      ) : (
        songs.map((s, i) => (
          <p key={s.name}>
            {i + 1}. {s.name}
          </p>
        ))
      )}
    </div>
  )
}
