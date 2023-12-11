import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

export const newEquipmentFormSchema = z.object({
  name: z.string().trim().min(1, 'Este campo é obrigatório'),
  quantity: z
    .string()
    .min(1, 'Este campo é obrigatório')
    .transform((value) => Number(value))
    .refine((value) => value > 0, {
      message: 'A quantidade deve ser maior que zero',
    }),
})

export const newEquipmentFormResolver = zodResolver(newEquipmentFormSchema)

export type NewEquipmentFormInputs = z.infer<typeof newEquipmentFormSchema>
