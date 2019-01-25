<template>
<section class="app">
  <h6>Accounts</h6>
  <p>Hello {{accounts}}</p>
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
    
    }
};
</script>

<style>
</style>
