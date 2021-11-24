import * as TYPES from './types'
const actions = {
	ADD1000(vuex){
		vuex.commit(TYPES.SET_COUNT_ADD, 1000);

	},
	REdUCE1000(vuex){
		vuex.commit(TYPES.SET_COUNT_REDUCE, 1000);
	}
}

export default actions