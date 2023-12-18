import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { SongRegionLabel, SongStatusLabel } from '@/contexts'
import { enumToRadioOption, enumToStringArray } from '@/utils'

const songRegions = enumToStringArray(SongRegionLabel)
export const regionOptions = enumToRadioOption(SongRegionLabel)

const songStatuses = enumToStringArray(SongStatusLabel)
export const statusOptions = enumToRadioOption(SongStatusLabel)

export const songFormSchema = z.object({
  name: z.string().trim().min(1, 'Este campo é obrigatório'),
  artist: z.string().trim().min(1, 'Este campo é obrigatório'),
  start: z.string().trim(),
  end: z.string().trim(),
  region: z.enum(songRegions, { invalid_type_error: 'Obrigatório' }),
  status: z.enum(songStatuses, { invalid_type_error: 'Obrigatório' }),
})

export const songFormResolver = zodResolver(songFormSchema)

export type SongFormInputs = z.infer<typeof songFormSchema>
