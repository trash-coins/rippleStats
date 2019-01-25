<template>
<section class="app">
  <h6>Accounts</h6>
  <p>Hello {{accounts}}</p>
 <Charts />
</section>
</template>

<script>
import RippleApi from '../services/rippleApi';
// import { Line } from 'vue-chartjs';
import Charts from './charts';
export default {
    
    components: { 
        Charts
    },
    data: () => ({
        accounts: {
            labels: ['January', 'February'],
            datasets: [
                {
                    label: 'Data One',
                    backgroundColor: '#f87979',
                    data: [40, 20]
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    }),
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
