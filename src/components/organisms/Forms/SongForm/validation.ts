import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

export const songFormSchema = z.object({
  name: z.string().trim().min(1, 'Este campo é obrigatório'),
  artist: z.string().trim().min(1, 'Este campo é obrigatório'),
  start: z.string().trim(),
  end: z.string().trim(),
  national: z.boolean(),
  ready: z.boolean(),
})

export const songFormResolver = zodResolver(songFormSchema)

export type SongFormInputs = z.infer<typeof songFormSchema>
