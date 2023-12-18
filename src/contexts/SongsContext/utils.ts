import { Song, SongFilters } from '.'

export const songFilter = (song: Song, filters: SongFilters) => {
  const { region, status } = filters

  if (region && region !== 'ALL' && song.region !== region) return
  if (status && status !== 'ALL' && song.status !== status) return

  return true
}
