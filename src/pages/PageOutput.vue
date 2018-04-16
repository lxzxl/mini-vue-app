<template>
  <div class="outputs">
    <h3>All data in store:</h3>
    <p v-for="comment in comments" :key="comment.uid">
      <span class="name">{{comment.name}}</span>: {{comment.content}}
    </p>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'PageOutput',
  data () {
    return {}
  },
  computed: {
    ...mapState({
      comments: state => state.comments
    })
  }
}
</script>

<style scoped>
.name {
  font-weight: 600;
  color: lightcoral;
}
</style>
