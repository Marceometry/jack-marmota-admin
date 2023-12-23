'use client'

import { useEffect, useState } from 'react'
import { DroppableProps, Droppable as LibDroppable } from 'react-beautiful-dnd'

export const Droppable = ({ children, ...props }: DroppableProps) => {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const animation = requestAnimationFrame(() => setEnabled(true))
    return () => {
      cancelAnimationFrame(animation)
      setEnabled(false)
    }
  }, [])

  if (!enabled) return null

  return <LibDroppable {...props}>{children}</LibDroppable>
}
