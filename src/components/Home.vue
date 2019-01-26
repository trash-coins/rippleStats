<template>
     <div id="app">
        <div class="container">
            <div>
            
            </div>
        </div>

        <div class="container">
            <div class="row white-text">
                <div class="class col s12 m4" id="tweet">
                <h4> Latest tweets from Ripple Lab CEO </h4>
                <div id="timeline">
                    <Timeline :id="'bgarlinghouse'" :sourceType="'profile'" :options="{ tweetLimit: '2' }"/>  
                </div>
                </div>

                <div class="col s12 m10 push-m1">
            <Body/>  
                </div>      
            </div>
        <div>                
        </div>
</div>
    </div>
</template>

<script>
import Body from './body';
import Timeline from 'vue-tweet-embed/timeline';

export default {
    components: {
        Body, 
        Timeline

    }

 
};
</script>

<style>
 h2 {
     color: white;
 }
#timeline {width:33%}
</style>
