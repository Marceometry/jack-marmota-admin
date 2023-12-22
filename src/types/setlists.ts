import { Song } from '.'

export type SetList = {
  id: string
  name: string
  date: Date | string
  duration?: number
  songs: Song[]
  songsCount: number
}
