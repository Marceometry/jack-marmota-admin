import { Song } from '.'

export type SetList = {
  id: string
  name: string
  date: Date
  duration?: number
  songs: Song[]
  songsCount: number
}
