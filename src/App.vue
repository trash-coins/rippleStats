<template>
  <div id="app">


    <div class="container">
      <div>
        <Header class="blue darken-1 white-text"/>
      </div>
      <RouterView></RouterView>
    </div>

 
  </div>
</template>

<script>
import Header from './components/Header';

export default {
    components: {
        Header
    }
};
</script>

<style>

body {
  background-color: black;
}
.tweet {
  size: 50%;

}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
