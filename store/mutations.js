import * as TYPES from './types';
const mutations = {
	[TYPES.SET_COUNT](state, v){
		state.count = v
	},
	[TYPES.SET_COUNT_ADD](state, v){
		if(v){
			state.count += v
		}else{
		state.count++}
	},
	[TYPES.SET_COUNT_REDUCE](state, v){
		if(v){
			state.count -= v
		}else{
		state.count--}
	}
}

export default mutations