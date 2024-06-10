import { SongFilters } from '@/contexts'
import { Song } from '@/types'

export const songFilter = (
  song: Song,
  filters: SongFilters,
  selectedSongs?: Song[],
) => {
  const { region, status, checked } = filters

  if (region && region !== 'ALL' && song.region !== region) return
  if (status && status !== 'ALL' && song.status !== status) return

  if (checked && checked !== 'ALL') {
    const isChecked = selectedSongs?.some(({ id }) => id === song.id)

    if (checked === 'CHECKED' && !isChecked) return
    if (checked === 'UNCHECKED' && isChecked) return
  }

  return true
}
