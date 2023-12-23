import { Menu, Trash2 } from 'lucide-react'
import { Draggable as LibDraggable } from 'react-beautiful-dnd'
import { twJoin } from 'tailwind-merge'

type Props = {
  index: number
  song: any
  removeSong: (id: string) => void
}

export const Draggable = ({ index, song, removeSong }: Props) => {
  return (
    <LibDraggable key={song.id} draggableId={song.id} index={index}>
      {(provided, snapshot) => (
        <div
          {...provided.draggableProps}
          ref={provided.innerRef}
          className={twJoin(
            'flex items-center gap-3 p-1.5 mb-0.5 rounded-sm border border-zinc-900 bg-zinc-900 transition-colors',
            snapshot.isDragging ? 'border-yellow-800' : '',
          )}
        >
          <div {...provided.dragHandleProps} className="cursor-grab">
            <Menu size={18} />
          </div>

          <div className="flex-1 flex items-center justify-between">
            <div>
              <strong>
                {index + 1}. {song.name}
              </strong>
              <span> - {song.artist}</span>
            </div>
            <div>
              <span className="center">{song.start}</span>
              {' | '}
              <span className="center">{song.end}</span>
            </div>
          </div>

          <div className="flex items-center ml-2">
            <button
              onClick={() => removeSong(song.id)}
              className="transition-colors hover:text-red-500"
            >
              <Trash2 size={16} />
            </button>
          </div>
        </div>
      )}
    </LibDraggable>
  )
}
