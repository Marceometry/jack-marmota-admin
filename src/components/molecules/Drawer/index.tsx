'use client'

import * as Dialog from '@radix-ui/react-dialog'
import { XIcon } from 'lucide-react'
import { twJoin } from 'tailwind-merge'
import { IconButton } from '@/components/atoms'

type Props = {
  open?: boolean
  onOpenChange?: (value: boolean) => void
  title?: string
  description?: string
  width?: number
  trigger: React.ReactNode
  children: React.ReactNode
}

export function Drawer({
  open,
  onOpenChange,
  title,
  description,
  width,
  children,
  trigger,
}: Props) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="bg-zinc-950/50 fixed inset-0 z-50 data-[state=open]:animate-overlayShow data-[state=closed]:animate-overlayHide" />

        <Dialog.Content
          style={{ width }}
          className={twJoin(
            'h-full w-96 max-w-[100vw] p-8 py-16 flex flex-col border-l border-l-zinc-800 bg-zinc-900',
            'fixed top-0 right-0 z-50 focus:outline-none data-[state=open]:animate-drawerShow data-[state=closed]:animate-drawerHide shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px]',
          )}
        >
          <Dialog.Close asChild>
            <IconButton
              className="absolute top-8 right-8"
              aria-label="Fechar modal"
              icon={<XIcon />}
            />
          </Dialog.Close>

          {title && (
            <Dialog.Title className="text-xl mb-6 font-semibold">
              {title}
            </Dialog.Title>
          )}
          {description && (
            <Dialog.Description className="-mt-4 mb-6">
              {description}
            </Dialog.Description>
          )}

          {children}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
