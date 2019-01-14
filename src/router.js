import VueRouter from 'vue-router';
import Home from './components/Home';
import Docs from './components/Docs';




export default new VueRouter ({
    routes: [
        { path: '/', component: Home },
        { path: '/docs', component: Docs }, 
        { path: '/', redirect: '/' }

    ]
});