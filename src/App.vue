<template>
  <div id="app">

    <div class="menu">
      <div
        v-for="(item, index) in menu"
        :key="index"
        :class="{'active': index === active}"
        @click="itemClick(index)"
      >{{item}}</div>
    </div>

    <div
      class="container"
      v-load="loading"
      :load-type="menu[active]"
      :load-background="bgColor[active]"
    ></div>

  </div>
</template>

<script>

  export default {
    name: 'App',
    data: function() {
      return {
        loading: true,
        active: 0
      }
    },
    created() {
      this.menu = [
        "rotating-plane",
        "double-bounce",
        "wave",
        "wandering-cubes",
        "spinner",
        "chasing-dots",
        "three-bounce",
        "circle",
        "cube-grid",
        "fading-circle",
        "folding-cube"
      ];
      this.bgColor = [
        "rgba(0, 0, 0, 0.7)",
        "RGBA(229, 68, 0, .7)",
        "RGBA(41, 61, 81, .7)",
        "RGBA(0, 196, 159, .7)",
        "RGBA(0, 126, 188, .7)",
        "RGBA(123, 140, 141, .7)",
        "RGBA(255, 205, 88, .7)",
        "RGBA(0, 183, 99, .7)",
        "RGBA(41, 61, 81, .7)",
        "RGBA(0, 196, 159, .7)",
        "RGBA(0, 126, 188, .7)"
      ];
    },
    methods: {
      itemClick(index){
        this.active = index;
      }
    }
  }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }

  #app {
    width: 100%;
    height: 100vh;
    background: #F4F5F5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
  }

  .container {
    width: 366px;
    height: 515px;
    background-image: url('/static/placeholder.png');
    background-size: 100% 100%;
    border-radius: 10px;
    overflow: hidden;
  }

  .menu{
    overflow: hidden;
    display: flex;
    flex-direction: column;
    font-size: 15px;
    line-height: 44px;
    margin-right: 20px;
    text-align: center;
    background: #FFFFFF;
    border-radius: 10px;
  }
  .menu > div{
    cursor: pointer;
    padding: 0 20px;
    font-weight: 500;
  }
  .menu > div.active{
    background: #FCFCFC;
  }
</style>
