<template>
  <div>
    <div v-if="loading">
      <div class="loading-item" v-for="(n, index) in 5" :key="index">
        <span class="glow-checkbox" />
        <span class="glow-text">
          <span>Loading</span> 
          <span>cool</span> 
          <span>state</span>
        </span>
      </div>
    </div>
    <div class="list-items" v-if="!tasks.length && !loading">
      <div class="wrapper-message">
        <span class="icon-check" />
        <div class="title-message">You have no tasks</div>
        <div class="subtitle-message">Sit back and relax</div>
      </div>
    </div>
    <div class="list-items" v-if="!loading && tasks.length">
      <task 
        v-for="(task, index) in tasksInOrder"
        :key="index"
        :task="task"
        @archiveTask="$emit('archiveTask', $event)"
        @pinTask="$emit('pinTask', $event)"
      />
    </div>
  </div>
</template>

<script>
import Task from './Task'
export default {
  name: 'pure-task-list',
  components: {
    Task
  },
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    tasks: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    tasksInOrder() {
      return [
        ...this.tasks.filter(t => t.state === 'TASK_PINNED'),
        ...this.tasks.filter(t => t.state !== 'TASK_PINNED'),
      ]
    }
  }
}
</script>
