import { FieldValues, FormProvider, UseFormReturn } from 'react-hook-form'

type Props<T extends FieldValues> = {
  children: React.ReactNode
  formMethods: UseFormReturn<T, object>
  onSubmit: (data: T) => void
}

export function Form<T extends FieldValues>({
  children,
  formMethods,
  onSubmit,
}: Props<T>) {
  return (
    <FormProvider {...formMethods}>
      <form onSubmit={formMethods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  )
}
