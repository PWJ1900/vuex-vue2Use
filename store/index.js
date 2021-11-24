import Vue from 'vue'
import Vuex from 'vuex'
import state from './states'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
import allUseOne from './allUseOne'
Vue.use(Vuex)
 
export const store = new Vuex.Store({
	state,
	getters,
	mutations,
	actions,
	modules:{
		allUseOne
	}

})