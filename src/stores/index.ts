import { defineStore } from 'pinia'
import type { Todo } from './types.ts'
import { v4 as uuidv4 } from 'uuid'

interface State {
  todoListItems: Todo[]
}

export const useTodoListStore = defineStore('todoList', {
  state: (): State => ({
    todoListItems: []
  }),
  getters: {
    backlogList: (state: Todo): Todo[] => state.todoListItems.filter((todo: Todo) => todo.backlog),
    todoList: (state: Todo): Todo[] => state.todoListItems.filter((todo: Todo) => todo.pending),
    completeList: (state: Todo): Todo[] =>
      state.todoListItems.filter((todo: Todo) => todo.completed)
  },
  actions: {
    addToList(text: string, path: string) : void {
      const newTodo: Todo = { id: uuidv4(), text: text, createdDate: new Date() }
      this.todoListItems.push({
        ...newTodo,
        backlog: path === '/backlog',
        pending: path !== '/backlog',
        completed: false
      })
    },
    moveTodo(
      todoItem: Todo,
      status: 'completed' | 'pending' | 'backlog',
    ): void {
      let todoListItemsCopy = [...this.todoListItems]
      const index = todoListItemsCopy.findIndex((todo) => todo.id === todoItem.id)
      if (index !== -1)
        todoListItemsCopy[index] = {
          ...todoListItemsCopy[index],
          completed: status === 'completed',
          backlog: status === 'backlog',
          pending: status === 'pending'
        }

      this.todoListItems = [...todoListItemsCopy]
    }
  }
})
