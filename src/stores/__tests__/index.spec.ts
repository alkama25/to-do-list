import { createPinia, setActivePinia } from 'pinia'
import { beforeEach, describe, expect, it } from 'vitest'
import { useTodoListStore } from '../index'
import type { Todo } from '/types.ts'
import { TodoStatus } from '@/enums'

describe('The todo list store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  const todoListItems: Todo[] = [
    {
      createdDate: new Date(),
      id: '96e50caa-2cf0-40c5-bec1-649ce971a2f2',
      status: TodoStatus.Pending,
      text: 'pending file'
    },
    {
      createdDate: new Date(),
      id: '96e50caa-2cf1-40c5-bec1-649ce971a2f2',
      status: TodoStatus.Backlog,
      text: 'file in backlog'
    },
    {
      createdDate: new Date(),
      id: '96e50caa-2cf3-40c5-bec1-649ce971a2f2',
      status: TodoStatus.Completed,
      text: 'completed file'
    }
  ]

  it('Getters should return correct list item based on status', () => {
    const todoListStore = useTodoListStore()
    todoListStore.todoListItems = todoListItems

    const backlogList = todoListStore.backlogList
    const completedList = todoListStore.completeList
    const pendingList = todoListStore.todoList

    expect(backlogList[0].id).toBe('96e50caa-2cf1-40c5-bec1-649ce971a2f2')
    expect(completedList[0].id).toBe('96e50caa-2cf3-40c5-bec1-649ce971a2f2')
    expect(pendingList[0].id).toBe('96e50caa-2cf0-40c5-bec1-649ce971a2f2')
  })
  it('Adds new value to the todo list', () => {
    const todoListStore = useTodoListStore()

    todoListStore.addToList('new entry', '/backlog')
    todoListStore.addToList('second entry', '/')

    expect(todoListStore.todoListItems).toHaveLength(2)
    expect(todoListStore.backlogList).toHaveLength(1)
    expect(todoListStore.todoList).toHaveLength(1)
  })
  it('Change the status of the todo', () => {
    const todoListStore = useTodoListStore()
    todoListStore.todoListItems = todoListItems
    todoListStore.changeTodoStatus({ ...todoListItems[0], status: TodoStatus.Completed })

    expect(todoListStore.completeList).toHaveLength(2)
  })
  it('Delete todo', () => {
    const todoListStore = useTodoListStore()
    todoListStore.todoListItems = todoListItems
    todoListStore.deleteTodo(todoListItems[0])

    expect(todoListStore.todoListItems).toHaveLength(2)
  })
})
