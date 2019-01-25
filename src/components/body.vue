<template>
    <div>
        <Graph/>
        <div>
            <charts :chartdata="accounts" />
        </div>
    </div>
</template>

<script>
import Graph from './graph.vue';
import charts from './charts.vue';
import RippleApi from '../services/rippleApi';

export default {
    components: {
        Graph, charts
    },
    data: () => ({
        accounts: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [
                {
                    label: 'Data One',
                    backgroundColor: '#f87979',
                    data: null
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        },
    }),

    created() {

        RippleApi.getStats()
            .then(s => {
                console.log('s', s);
                this.accounts.datasets[0].data = s.stats.map(stat => {
                    return stat.accounts_created;
                });
                console.log('hello', this.accounts);
            });
    
    }
};
</script>

<style>

</style>
