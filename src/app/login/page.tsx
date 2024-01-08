'use client'

import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { Button, Input } from '@/components/atoms'
import { Form } from '@/components/molecules'
import { useAuth } from '@/contexts'

type Data = { password: string }

export default function Page() {
  const formMethods = useForm<Data>()
  const { signIn } = useAuth()
  const router = useRouter()

  const login = async ({ password }: Data) => {
    await signIn(password)
    router.replace('/')
  }

  return (
    <div className="grid place-items-center h-screen">
      <div className="p-8 rounded-lg bg-zinc-900">
        <Form formMethods={formMethods} onSubmit={login}>
          <Input<Data> name="password" type="password" placeholder="Senha" />

          <Button type="submit" className="mt-6" fullWidth>
            Entrar
          </Button>
        </Form>
      </div>
    </div>
  )
}
