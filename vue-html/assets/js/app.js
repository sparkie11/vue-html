// const Home = { template: '<div>Home Page</div>' };
// const Page1 = { template: '<div>Page 1</div>' };
// const Page2 = { template: '<div>Page 2</div>' };
// const Page3 = { template: '<div>Page 3</div>' };

const Home = httpVueLoader('pages/home.vue');
const Page1 = httpVueLoader('pages/page1.vue');
const Page2 = httpVueLoader('pages/page2.php');
const Page3 = httpVueLoader('pages/page3.php');

const routes = [
    { path: '/', component: Home },
    { path: '/page1', component: Page1 },
    { path: '/page2', component: Page2 },
    { path: '/page3', component: Page3 }
];

const router = new VueRouter({
    routes
});

const app = new Vue({
    router,
    el: '#app',
    components: {
        HeaderComponent: httpVueLoader('components/header.php'),
        Header2Component: httpVueLoader('components/header2.php')

    }
});



