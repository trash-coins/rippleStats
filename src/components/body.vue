<template>
    <div>
        <Graph/>
        <charts :chartdata="accounts" />

    </div>
</template>

<script>
import Graph from './graph.vue';
import charts from './charts.vue';
export default {
    components: {
        Graph, charts
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
    })
};
</script>

<style>

</style>
