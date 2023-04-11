import { SortOrder } from '../enums'
import type { Todo, SortParams } from '@/types'

export function sortByProperty<T>(params: SortParams): Todo[] {
  const { list, property, sortOrder } = params
  const modifier = sortOrder === SortOrder.ASC ? 1 : -1
  return list.sort((a: Todo, b: Todo) => {
    const propA = a[property]
    const propB = b[property]

    switch (typeof propA) {
      case 'string':
        return propA.localeCompare(propB as string) * modifier
      case 'object':
        if (propA instanceof Date && propB instanceof Date) {
          return (propA as Date).getTime() - (propB as Date).getTime() * modifier
        }
      default:
        return propA && propB ? (propA < propB ? -1 : propA > propB ? 1 : 0) * modifier : 0
    }
  })
}
