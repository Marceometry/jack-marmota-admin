import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { RadioDefaultValueLabel } from '@/components/atoms'
import { SongRegionLabel, SongStatusLabel } from '@/types'
import { enumToRadioOption, enumToStringArray } from '@/utils'

const regions = { ...RadioDefaultValueLabel, ...SongRegionLabel }
const songRegions = enumToStringArray(regions)
export const regionOptions = enumToRadioOption(regions)

const statuses = { ...RadioDefaultValueLabel, ...SongStatusLabel }
const songStatuses = enumToStringArray(statuses)
export const statusOptions = enumToRadioOption(statuses)

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
