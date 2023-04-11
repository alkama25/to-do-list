import { defineStore } from 'pinia'
import type { Todo } from '/types.ts'
import { TodoStatus } from '@/enums'
import { v4 as uuidv4 } from 'uuid'

interface State {
  todoListItems: Todo[]
}

export const useTodoListStore = defineStore('todoList', {
  state: (): State => ({
    todoListItems: []
  }),
  getters: {
    backlogList: (state: Todo): Todo[] =>
      state.todoListItems.filter((todo: Todo) => todo.status === TodoStatus.Backlog),
    todoList: (state: Todo): Todo[] =>
      state.todoListItems.filter((todo: Todo) => todo.status === TodoStatus.Pending),
    completeList: (state: Todo): Todo[] =>
      state.todoListItems.filter((todo: Todo) => todo.status === TodoStatus.Completed)
  },
  actions: {
    addToList(text: string, path: string): void {
      const newTodo: Todo = { id: uuidv4(), text: text, createdDate: new Date() }
      this.todoListItems.push({
        ...newTodo,
        status: path === '/backlog' ? TodoStatus.Backlog : TodoStatus.Pending
      })
    },
    changeTodoStatus(todoItem: Todo): void {
      const todoToUpdate = this.todoListItems.find((todo) => todo.id === todoItem.id)
      if (todoToUpdate) Object.assign(todoToUpdate, { ...todoItem })
    },
    deleteTodo(todoItem: Todo): void {
      const index = this.todoListItems.findIndex((todo) => todo.id === todoItem.id)
      if (index !== -1) this.todoListItems.splice(index, 1)
    }
  }
})
