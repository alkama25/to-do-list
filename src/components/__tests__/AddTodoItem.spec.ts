import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import router from '@/router'
import { createPinia, setActivePinia } from 'pinia'
import AddTodoItem from '@/components/AddTodoItem.vue'
import TDInput from '@/components/common/TDInput.vue'
import TDButton from '@/components/common/TDButton.vue'
import { useTodoListStore } from '@/stores/index'

describe('AddTodoItem.vue', () => {
  const wrapper = mount(AddTodoItem, {
    global: {
      plugins: [router]
    }
  })
  beforeEach(() => {
    setActivePinia(createPinia())
  })
  it('updates todoText when input event is emitted', async () => {
    const tdInputWrapper = wrapper.findComponent(TDInput)
    const updatedInputValue = 'New todo text'
    await tdInputWrapper.setValue(updatedInputValue)
    await wrapper.vm.updateTodoText(updatedInputValue)
    expect(wrapper.vm.todoText).toBe(updatedInputValue)
  })
  it('add todo when button is clicked', async () => {
    const todoListStore = useTodoListStore()
    const tdButtonWrapper = wrapper.findComponent(TDButton)
    await tdButtonWrapper.trigger('click')
    await wrapper.vm.addTask()
    todoListStore.addToList('New todo text', '/')
    expect(wrapper.vm.todoText).toBe('')
  })
})
