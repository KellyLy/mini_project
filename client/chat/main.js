// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

global.EventHub = new Vue();

global.Me = {
  openId:"winys",
  icon:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLpY7YvdWLphsuZol9lYUQTPVDkb8u_0hF6ly0Ge1g3qoSFxBj"
}

global.Guest = {
  openId:"winys2",
  icon:""
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
