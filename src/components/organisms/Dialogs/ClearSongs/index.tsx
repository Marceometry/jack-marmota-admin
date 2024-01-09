import { CircleOff } from 'lucide-react'
import { Button, IconButton } from '@/components/atoms'
import { Modal } from '@/components/molecules'

type Props = {
  isOpen: boolean
  onOpenChange: (value: boolean) => void
  onConfirm: () => void
}

export function ClearSongs({ isOpen, onOpenChange, onConfirm }: Props) {
  return (
    <Modal
      open={isOpen}
      onOpenChange={onOpenChange}
      behaviour="dialog"
      title="Limpar lista de músicas?"
      trigger={
        <IconButton
          variant="fill"
          aria-label="Limpar lista"
          icon={<CircleOff size={16} />}
        />
      }
    >
      <div className="flex gap-4">
        <Button fullWidth variant="outline" onClick={() => onOpenChange(false)}>
          Cancelar
        </Button>
        <Button fullWidth variant="danger" onClick={onConfirm}>
          Confirmar
        </Button>
      </div>
    </Modal>
  )
}
