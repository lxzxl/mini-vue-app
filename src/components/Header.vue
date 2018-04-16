<template>
  <div class="header">
    <div class="link">
      <router-link :to="{ name: 'PageInput'}">Input Page</router-link>
      </div>
    <div class="link">
      <router-link :to="{ name: 'PageOutput'}">Output Page</router-link>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {}
  }
}
</script>

<style>
.header {
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: aquamarine;
}
.link {
  margin: 5px;
}
</style>
