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
    if (route.type == 'page'){ // pages only for the moment
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

// Menu Items (get it from wordpress later)
var menu_items = {
	home: {
		path: wp.base_path,
		title: 'Home'
	},
	menu: [
		{path: "page-d-exemple", title: 'Page d&apos;exemple'},
	]
}

// App
var App = Vue.extend({

	template:`
		<div>
			<page_header :items="menu_items"></page_header>
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

    data(){
    	return{
    		menu_items: menu_items,
    	}
    },

    router: router
})

new App().$mount('#app');