import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

export const setlistFormSchema = z.object({
  name: z.string().trim().min(1, 'Este campo é obrigatório'),
  date: z.string().trim().min(1, 'Este campo é obrigatório'),
})

export const setlistFormResolver = zodResolver(setlistFormSchema)

export type SetListFormInputs = z.infer<typeof setlistFormSchema>
