import type { TodoStatus, SortOrder } from '@/enums'

export interface Todo {
  id: string
  text: string
  createdDate: Date 
  status?: TodoStatus
}

export interface TodoDropdownItem {
  text: string
  type: string
  action: (todo: Todo) => void
}

export interface SortParams {
  list: Todo[]
  property: keyof Todo
  sortOrder: SortOrder
}

export interface IconMap {
  [key: string]: string
}
