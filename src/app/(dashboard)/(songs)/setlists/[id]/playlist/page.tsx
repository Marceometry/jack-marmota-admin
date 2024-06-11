'use client'

import { ArrowLeft, Loader } from 'lucide-react'
import { Route } from 'next'
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from 'next/navigation'
import { useEffect, useState } from 'react'
import { twJoin } from 'tailwind-merge'
import { IconButton } from '@/components/atoms'
import { useSetLists } from '@/contexts'
import { SetList } from '@/types'

export default function Page() {
  const [isLoading, setIsLoading] = useState(true)
  const [isHidden, setIsHidden] = useState(true)
  const [setlist, setSetlist] = useState<SetList | null>(null)
  const { onChangeItem } = useSetLists()

  const params = useParams()
  const router = useRouter()
  const searchParams = useSearchParams()
  const index = Number(searchParams.get('index')) || 0

  useEffect(() => {
    const id = String(params.id)
    if (!id) return

    setIsLoading(true)
    const unsubscribe = onChangeItem(id, (data) => {
      setSetlist(data)
      setIsLoading(false)
    })

    return () => {
      unsubscribe()
    }
  }, [])

  const handleGoBack = () => {
    return router.push(`/setlists/${setlist?.id}`)
  }

  const handleChangeIndex = (newIndex: number) => {
    return router.push(`/setlists/${setlist?.id}/playlist?index=${newIndex}`)
  }

  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-zinc-950">
      {isLoading ? (
        <div className="h-full grid place-items-center">
          <Loader className="animate-spin" />
        </div>
      ) : !setlist ? (
        <div className="h-full grid place-items-center">
          <p>Letra não encontrada.</p>
        </div>
      ) : (
        <div className="h-full">
          <div
            className={twJoin(
              'fixed top-0 left-0 w-full text-sm flex items-center justify-between bg-zinc-800/90 border-b border-zinc-700/90 transition-all',
              isHidden && '-top-16',
            )}
          >
            <IconButton
              icon={<ArrowLeft />}
              onClick={handleGoBack}
              aria-label="Voltar"
              variant="ghost"
              className="py-3 px-4"
              square={false}
            />
            <span className="pr-4">{setlist.songs[index].name}</span>
          </div>

          <div
            className="h-full p-4 overflow-y-auto"
            onClick={() => setIsHidden(!isHidden)}
          >
            {!setlist.songs?.[index]?.lyrics ? (
              <div className="h-full grid place-items-center">
                <p>Letra não encontrada.</p>
              </div>
            ) : (
              <pre className="font-sans text-xs">
                {setlist.songs[index].lyrics}
              </pre>
            )}
          </div>

          <div
            className={twJoin(
              'fixed bottom-0 left-0 w-full text-sm flex items-center justify-between bg-zinc-800/90 border-t border-zinc-700/90 transition-all',
              isHidden && '-bottom-16',
            )}
          >
            {setlist.songs[index - 1] ? (
              <span
                className="p-4"
                onClick={() => handleChangeIndex(index - 1)}
              >
                {setlist.songs[index - 1].name}
              </span>
            ) : (
              <span />
            )}
            {setlist.songs[index + 1] && (
              <span
                className="p-4"
                onClick={() => handleChangeIndex(index + 1)}
              >
                {setlist.songs[index + 1].name}
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
