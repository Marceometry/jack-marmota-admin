'use client'

import { Button } from '@/components/atoms'
import { Modal } from '@/components/molecules'
import { useAuth } from '@/contexts'
import { useDisclose } from '@/hooks'

export function LogoutDialog() {
  const { isOpen, onClose, onOpenChange } = useDisclose()
  const { signOut } = useAuth()

  const trigger = (
    <Button className="py-1 px-4" variant="outline">
      Sair
    </Button>
  )

  return (
    <Modal
      open={isOpen}
      onOpenChange={onOpenChange}
      trigger={trigger}
      behaviour="dialog"
      title="Deseja mesmo sair?"
      description="Você terá que logar novamente com sua senha"
    >
      <div className="grid grid-cols-2 gap-4">
        <Button variant="outline" onClick={onClose}>
          Cancelar
        </Button>
        <Button onClick={signOut}>Confirmar</Button>
      </div>
    </Modal>
  )
}
