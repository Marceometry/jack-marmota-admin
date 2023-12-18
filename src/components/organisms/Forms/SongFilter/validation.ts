import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { RadioDefaultValueLabel, RadioValues } from '@/components/atoms'
import {
  SongRegion,
  SongRegionLabel,
  SongStatus,
  SongStatusLabel,
} from '@/contexts'
import { enumToRadioOption } from '@/utils'

const songRegions: RadioValues<SongRegion> = [
  'ALL',
  'NATIONAL',
  'INTERNATIONAL',
]
export const regionOptions = enumToRadioOption({
  ...RadioDefaultValueLabel,
  ...SongRegionLabel,
})

const songStatuses: RadioValues<SongStatus> = ['ALL', 'READY', 'IN_REHEARSAL']
export const statusOptions = enumToRadioOption({
  ...RadioDefaultValueLabel,
  ...SongStatusLabel,
})

export const songFilterSchema = z.object({
  region: z.enum(songRegions),
  status: z.enum(songStatuses),
})

export const songFilterResolver = zodResolver(songFilterSchema)

export type SongFilterInputs = z.infer<typeof songFilterSchema>

export const songFilterDefaultValues: SongFilterInputs = {
  region: 'ALL',
  status: 'ALL',
}
