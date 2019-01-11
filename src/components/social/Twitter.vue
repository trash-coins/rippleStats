  <template>
    <div>
        <Timeline :id="'twitterdev'" :sourceType="'profile'" :options="{ tweetLimit: '3' }"/>
    </div>
  </template>

<script>
import Timeline from 'vue-tweet-embed';

export default {
    components: {
        Timeline
    },

};
</script>
  <style scoped>

  </style>