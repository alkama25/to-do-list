import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import TodoItem from '../TodoItem.vue'
import { TodoStatus } from '@/enums'

describe('TodoItem.vue', () => {
  const props = {
    listItem: {
      createdDate: new Date('2023-04-12'),
      id: '96e50caa-2cf0-40c5-bec1-649ce971a2f2',
      status: TodoStatus.Pending,
      text: 'pending file'
    },
    value: false
  }

  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('should show todo text', () => {
    const wrapper = mount(TodoItem, {
      props
    })
    expect(wrapper.find('[data-test-id="todo-text"]').text()).toBe('pending file')
  })
  it('shoudl show todo created date', () => {
    const wrapper = mount(TodoItem, {
      props
    })
    expect(wrapper.find('[data-test-id="todo-created-date"]').text()).toBe('Apr 12, 2023')
  })

  it('should show dropdown and hide the dropdown when clicked', async () => {
    const wrapper = mount(TodoItem, {
      props
    })
    const dropdown = wrapper.find('[data-test-id="show-dropdown"]')
    dropdown.trigger('click')
    await wrapper.vm.$nextTick()
    expect(wrapper.find('[data-test-id="dropdown-options"]').exists()).toBe(true)
    dropdown.trigger('blur')
    await wrapper.vm.$nextTick()
    expect(wrapper.find('[data-test-id="dropdown-options"]').exists()).toBe(false)
  })
  it('should show dropdown items', async () => {
    const wrapper = mount(TodoItem, {
      props
    })

    const todoActionItems = wrapper.vm.todoActionItems
    const dropdown = wrapper.find('[data-test-id="show-dropdown"]')
    dropdown.trigger('click')
    await wrapper.vm.$nextTick()

    const dropdownItems = wrapper.findAll('[data-test-id="dropdown-menu-item"]')
    expect(dropdownItems).toHaveLength(2)
    dropdownItems.forEach((item, index) => {
      expect(item.text()).toBe(todoActionItems[index].text)
    })
  })
})
