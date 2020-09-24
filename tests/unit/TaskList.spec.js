import Vue from 'vue'
import TaskList from '../../src/components/TaskList.vue'
import { withPinnedTasksData } from '../../src/components/TaskList.stories'

it('', () => {
  const Constrocutor = Vue.extend(TaskList)
  const vm = new Constrocutor({
    propsData: { tasks: withPinnedTasksData }
  }).$mount()
  const firstTaskPinned = vm.$el.querySelector('.list-item:nth-child(1).TASK_PINNED')

  expect(firstTaskPinned).not.toBe(null)
})