<template lang="pug">
	header.navbar.navbar-inverse
		.container
			.navbar-header
				router-link.navbar-brand(:to="items.home.path" v-html="items.home.title")

			nav.navbar-right
				ul.nav.navbar-nav
					li(v-for="route in items.menu")
						router-link(:to="route.path" v-html="route.title")
</template>

<script>

export default {
	name: 'page_header',
	props: ['items'],
}
</script>

<style scoped>
	
</style>
