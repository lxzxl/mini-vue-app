<template>
  <div class="inputs">
    <label>Name: <input type="text" v-model="name"></label>
    <label>Content: <input type="text" v-model="content"></label>
    <button @click="add">add</button>
    <p class="result">
      <span class="name">name: </span>{{name}}
      <br>
      <span class="name">content: </span>{{content}}
    </p>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'PageInput',
  data () {
    return {
      name: '',
      content: ''
    }
  },
  methods: {
    checkInputs () {
      return this.name || this.content
    },
    clearInputs () {
      this.name = ''
      this.content = ''
    },
    add () {
      if (!this.checkInputs()) {
        return false
      }
      this.addComment({
        name: this.name,
        content: this.content
      })
      this.clearInputs()
    },
    ...mapActions(['addComment'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.inputs > * {
  margin: 5px;
}
button {
  width: 50px;
}
.name {
  font-weight: 600;
  color: lightcoral;
}
.result {
  margin-top: 10px;
  border: 2px solid lightgray;
}
</style>
