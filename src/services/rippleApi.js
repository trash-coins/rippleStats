export default {
    getStats() {
        return fetch('https://data.ripple.com/v2/stats/?start=2015-08-20&end=2015-08-31&interval=day&family=metric&metrics=accounts_created,exchanges_count,ledger_count,payments_count')
            .then(response => response.json());
    }
  };
  