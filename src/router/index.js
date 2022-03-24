import {
	createRouter,
	createWebHistory
} from 'vue-router';
import Home from '../views/Home.vue';

const routes = [{
		path: '/',
		name: 'Home',
		component: Home,
		meta: {
			title: 'Céline - Accueil',
		},
	},
	{
		path: '/about',
		name: 'About',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import( /* webpackChunkName: "about" */ '../views/About.vue'),
		meta: {
			title: 'Céline - A propos',
		},
	},
	{
		path: '/news',
		name: 'News',
		// route level code-splitting
		// this generates a separate chunk (news.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import( /* webpackChunkName: "news" */ '../views/News.vue'),
		meta: {
			title: 'Céline - Toutes les news',
		},
	},
	{
		path: '/news/single-news/:id',
		name: 'Single News',
		// route level code-splitting
		// this generates a separate chunk (news.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(
				/* webpackChunkName: "singlenews" */
				'../views/SingleNews.vue'
			),
		meta: {
			title: 'Céline - La News',
		},
	},
	{
		path: '/contact',
		name: 'Contact',
		// route level code-splitting
		// this generates a separate chunk (news.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import( /* webpackChunkName: "contact" */ '../views/Contact.vue'),
		meta: {
			title: 'Céline - Contact',
		},
	},
	{
		path: '/admin',
		name: 'AdminLogin',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import( /* webpackChunkName: "adminlogin" */ '../views/admin/Login.vue'),
		meta: {
			title: 'Admin - Login',
		},
	},
	{
		path: '/admin/dashboard',
		name: 'AdminDashBoard',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import( /* webpackChunkName: "dashboard" */ '../views/admin/DashBoard.vue'),
		meta: {
			title: 'Admin - DashBoard',
		},
	},
	{
		path: '/admin/addnews',
		name: 'CreateNews',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import( /* webpackChunkName: "createnews" */ '../views/admin/createNews.vue'),
		meta: {
			title: 'Création Actualité',
		},
	},
	{
		path: '/admin/updatenews/:id',
		name: 'UpdateNews',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import( /* webpackChunkName: "updatenews" */ '../views/admin/updateNews.vue'),
		meta: {
			title: 'Mise à jour Actualité',
		},
	},
	{
		path: '/admin/updateinfos/:id',
		name: 'UpdateInfos',
		component: () =>
			import('../views/admin/updateInfos.vue'),
		meta: {
			title: 'Mise à jour Infos Admin',
		},
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
	scrollBehavior() {
		document.getElementById('app').scrollIntoView();
	},
});

export default router;

/**
 * Below code will display the component/active page title
 * Powered by: Nangialai Stoman
 */

// This callback runs before every route change, including on page load.
router.beforeEach((to, from, next) => {
	// This goes through the matched routes from last to first, finding the closest route with a title.
	// e.g., if we have `/some/deep/nested/route` and `/some`, `/deep`, and `/nested` have titles,
	// `/nested`'s will be chosen.
	const nearestWithTitle = to.matched
		.slice()
		.reverse()
		.find((r) => r.meta && r.meta.title);

	// Find the nearest route element with meta tags.
	const nearestWithMeta = to.matched
		.slice()
		.reverse()
		.find((r) => r.meta && r.meta.metaTags);

	const previousNearestWithMeta = from.matched
		.slice()
		.reverse()
		.find((r) => r.meta && r.meta.metaTags);

	// If a route with a title was found, set the document (page) title to that value.
	if (nearestWithTitle) {
		document.title = nearestWithTitle.meta.title;
	} else if (previousNearestWithMeta) {
		document.title = previousNearestWithMeta.meta.title;
	}

	// Remove any stale meta tags from the document using the key attribute we set below.
	Array.from(
		document.querySelectorAll('[data-vue-router-controlled]')
	).map((el) => el.parentNode.removeChild(el));

	// Skip rendering meta tags if there are none.
	if (!nearestWithMeta) return next();

	// Turn the meta tag definitions into actual elements in the head.
	nearestWithMeta.meta.metaTags
		.map((tagDef) => {
			const tag = document.createElement('meta');

			Object.keys(tagDef).forEach((key) => {
				tag.setAttribute(key, tagDef[key]);
			});

			// We use this to track which meta tags we create so we don't interfere with other ones.
			tag.setAttribute('data-vue-router-controlled', '');

			return tag;
		})
		// Add the meta tags to the document head.
		.forEach((tag) => document.head.appendChild(tag));

	next();
});