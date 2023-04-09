import type { TodoStatus } from '@/enums'

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
