<template>
<section class="app">
  <h6>Accounts</h6>
  <p>Hello {{accounts}}</p>
  <line-chart></line-chart>
</section>
</template>

<script>
import RippleApi from '../services/rippleApi';
// import { Line } from 'vue-chartjs';

export default {
    
    


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
        
        // Vue.component('line-chart', {
        //     extends: Line,
        //     mounted() {
        //         this.renderChart({
        //             labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        //             datasets: [
        //                 {
        //                     label: 'Data One',
        //                     backgroundColor: '#f87979',
        //                     data: [1, 2, 3, 4, 5, 6, 7]
        //                 }
        //             ]
        //         }, { responsive: true, maintainAspectRatio: false });
        //     }

        // });

        

    }
};
</script>

<style>
</style>
