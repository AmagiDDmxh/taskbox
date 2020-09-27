import Vue from 'vue'
import PureTaskList from '../../src/components/PureTaskList.vue'
import { withPinnedTasksData } from '../../src/components/PureTaskList.stories'

it('renders pinned tasks at the start of the list', () => {
  const Constrocutor = Vue.extend(PureTaskList)
  const vm = new Constrocutor({
    propsData: { tasks: withPinnedTasksData }
  }).$mount()
  const firstTaskPinned = vm.$el.querySelector('.list-item:nth-child(1).TASK_PINNED')

  expect(firstTaskPinned).not.toBe(null)
})