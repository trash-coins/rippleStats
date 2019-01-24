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
export default {
    data() {
        return {
            stats: null
        };
    },


    created() {
        const today = new Date();
        console.log(today);

        RippleApi.getStats()
            .then(s => {
                this.stats = s;

            });
    }
};
</script>

<style>

</style>
