'use client'

import { DragDropContext, DropResult } from 'react-beautiful-dnd'
import { useSetLists } from '@/contexts'
import { reorder } from '@/utils'
import { Draggable } from './Draggable'
import { Droppable } from './Droppable'

export const ChangeableList = () => {
  const { selectedSongs, setSelectedSongs } = useSetLists()

  const onDragEnd = (result: DropResult) => {
    const { destination, source } = result

    if (!destination) return
    if (destination.index === source.index) return

    const reordered = reorder(selectedSongs, source.index, destination.index)
    setSelectedSongs(reordered)
  }

  const onRemoveSong = (id: string) => {
    const index = selectedSongs.findIndex((s) => s.id === id)
    setSelectedSongs([
      ...selectedSongs.slice(0, index),
      ...selectedSongs.slice(index + 1),
    ])
  }

  return (
    <div>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="checked-songs" direction="vertical">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {selectedSongs.map((song, index) => (
                <Draggable
                  key={song.id}
                  index={index}
                  song={song}
                  removeSong={onRemoveSong}
                />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  )
}
