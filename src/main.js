import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

Vue.config.debug = true

import page_header from './components/header.vue'
Vue.component('page_header', page_header)

import page_footer from './components/footer.vue'
Vue.component('page_footer', page_footer)

import page from './components/page.vue'
Vue.component('page', page)

import home from './components/home.vue'
Vue.component('home', home)

// Routing
var routes = [
	{path: wp.base_path, component: Vue.component('home')}
];

for (var key in wp.routes) {
    var route = wp.routes[key]
    if (route.type == 'page'){
	    routes.push({
	    	path: wp.base_path + route.slug,
	        component: Vue.component(route.type), // page, post, ...
	    })
    }
}

const router = new VueRouter({
    mode: 'history',
    routes: routes
})

// App
var App = Vue.extend({

	template:`
		<div>
			<page_header></page_header>
	    	<router-view></router-view>
			<page_footer></page_footer>
		</div>
	`,

    ready() {
        this.updateTitle('');
    },

    methods: {
        updateTitle(pageTitle) {
            document.title = (pageTitle ? pageTitle + ' | ' : '') + wp.site_name
        }
    },

    events: {
        'page-title': function(pageTitle) {
            this.updateTitle(pageTitle)
        }
    }, 

    router: router
})

new App().$mount('#app');