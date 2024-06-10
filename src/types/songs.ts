export enum SongRegionLabel {
  'NATIONAL' = 'Nacional',
  'INTERNATIONAL' = 'Internacional',
}
export type SongRegion = keyof typeof SongRegionLabel

export enum SongStatusLabel {
  'READY' = 'Pronto pra tocar',
  'IN_REHEARSAL' = 'Em ensaio',
}
export type SongStatus = keyof typeof SongStatusLabel

export enum SongCheckLabel {
  'CHECKED' = 'Selecionada',
  'UNCHECKED' = 'Não selecionada',
}
export type SongCheck = keyof typeof SongCheckLabel

export type Song = {
  id: string
  name: string
  artist: string
  region: SongRegion
  status: SongStatus
  end: string
  start: string
}
