<template>
  <div>
    <pure-inbox-screen :error="error" />
  </div>  
</template>

<script>
import { mapState } from 'vuex'
import PureInboxScreen from './PureInboxScreen'

export default {
  name: 'inbox-screen',
  components: {
    PureInboxScreen
  },
  computed: {
    ...mapState(['error'])
  }
}
</script>
