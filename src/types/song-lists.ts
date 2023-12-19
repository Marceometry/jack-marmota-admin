import { Song } from '.'

export type SongList = {
  id: string
  name: string
  date: Date
  duration?: number
  songs: Song[]
  songsCount: number
}
