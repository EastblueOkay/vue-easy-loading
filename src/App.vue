<template>
  <div
    id="app"
    v-load="true"
  >
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      loading: true
    }
  }
}
</script>

<style>
  #app{
    border-radius: 10px;
    overflow: hidden;
    width: 100%;
    height: 600px;
  }
</style>
