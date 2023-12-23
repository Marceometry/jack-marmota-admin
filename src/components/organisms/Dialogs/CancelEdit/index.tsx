import { Button } from '@/components/atoms'
import { Modal } from '@/components/molecules'

type Props = {
  isOpen: boolean
  onOpenChange: (value: boolean) => void
  onConfirm: () => void
  trigger: React.ReactNode
}

export function CancelEdit({
  isOpen,
  onOpenChange,
  onConfirm,
  trigger,
}: Props) {
  return (
    <Modal
      open={isOpen}
      onOpenChange={onOpenChange}
      trigger={trigger}
      behaviour="dialog"
      title="Cancelar edição?"
      description="As modificações não poderão ser recuperadas."
    >
      <div className="flex gap-4">
        <Button fullWidth variant="outline" onClick={() => onOpenChange(false)}>
          Continuar editando
        </Button>
        <Button fullWidth onClick={onConfirm}>
          Cancelar edição
        </Button>
      </div>
    </Modal>
  )
}
