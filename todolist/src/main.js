// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'

Vue.config.productionTip = false

Vue.use(VueRouter)

const router = new VueRouter();

router.map({
	'/index':{
		components:App
	}
});

router.redirect({
	'*':'/index'
});

router.start(App,'#app');