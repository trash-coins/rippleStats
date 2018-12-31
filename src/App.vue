<template>
  <div id="app">


    <div class="container">
      <div>
        <Header class="blue darken-1 white-text"/>
      </div>
    </div>

    <div class="container">
      <div class="row white-text">
        <div class="class col s12 m6">
          <h4> Latest tweets from Ripple Lab CEO </h4>
          <div id="timeline">
            <Timeline :id="'bgarlinghouse'" :sourceType="'profile'" :options="{ tweetLimit: '2' }"/>  
          </div>
        </div>

        <div class="col s12 m5 push-m1">
          <Body/>  
        </div>      
      </div>
    </div>

   
  </div>
</template>

<script>
import Header from './components/Header'
import Body from './components/body'
import Timeline from 'vue-tweet-embed/timeline'

export default {
  components: {
    Header, 
    Body, 
    Timeline

  }

 
}
</script>

<style>

body {
  background-color: black;
}
.timeline {
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
