<template>
    <div >
        <h3>This is the graph component</h3>
        <p v-if="stats !== null">Accounts Created: {{stats.stats[0].accounts_created}} On {{stats.stats[0].date}}</p>
    <div>

    </div>
    </div>
</template>

<script>
import RippleApi from '../services/rippleApi';
import { Bar } from 'vue-chartjs'
export default {
    extends: Bar,
 mounted () {
   // Overwriting base render method with actual data.
   this.renderChart({
     labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
     datasets: [
       {
         label: 'GitHub Commits',
         backgroundColor: '#f87979',
         data: stats.stats
       }
     ]
   })
 },
    data() {
        return {
            accounts: null
        };
    },

    created() {

        RippleApi.getStats()
            .then(s => {
                console.log('s', s);
                this.accounts = s.stats.map(stat => {
                    return stat.accounts_created;
                });
                    console.log('hello', this.accounts);
            });
    }
};
</script>

<style>

</style>
