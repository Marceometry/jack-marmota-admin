'use client'

import { useState } from 'react'

type Props = {
  onCloseCB?: () => void
  onOpenCB?: () => void
  defaultValue?: boolean
}

export type UseDiscloseReturn = {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
  onToggle: () => void
  onOpenChange: (value: boolean) => void
}

export function useDisclose(props?: Props): UseDiscloseReturn {
  const [isOpen, setIsOpen] = useState(props?.defaultValue || false)

  const onOpen = () => {
    setIsOpen(true)
    props?.onOpenCB && props.onOpenCB()
  }

  const onClose = () => {
    setIsOpen(false)
    props?.onCloseCB && props.onCloseCB()
  }

  const onToggle = () => {
    setIsOpen((o) => !o)
  }

  const onOpenChange = (value: boolean) => {
    setIsOpen(value)
  }

  return {
    isOpen,
    onOpen,
    onClose,
    onToggle,
    onOpenChange,
  }
}
