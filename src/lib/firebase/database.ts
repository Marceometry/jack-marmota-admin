import { getDatabase, onValue, ref, remove, set } from 'firebase/database'
import { firebaseApp } from './config'

type FirebaseDatabasePath = 'songs' | 'set-lists'

type Item = { id: string }

export type FirebaseDataSnapshot<T extends Item> = {
  [id: string]: T
}

export function snapshotToList<T extends Item>(
  data: FirebaseDataSnapshot<T>,
): T[] {
  return Object.entries(data).map(([id, values]) => ({ ...values, id }))
}

export const useFirebaseDatabase = <T extends Item>(
  path: FirebaseDatabasePath,
) => {
  const database = getDatabase(firebaseApp)

  const onChange = (callback: (data: T[]) => void) => {
    return onValue(ref(database, path), (data) =>
      callback(data.exists() ? snapshotToList(data.val()) : []),
    )
  }

  const remoteAdd = (item: T) => {
    return set(ref(database, `${path}/${item.id}`), item)
  }

  const remoteRemove = (id: string) => {
    return remove(ref(database, `${path}/${id}`))
  }

  return {
    onChange,
    add: remoteAdd,
    remove: remoteRemove,
  }
}
