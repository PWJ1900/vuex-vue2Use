const state ={
	info:"你好"
}
const mutations={
	useIt(state, v){
		state.info = v

	}
}
export default{
	state,
	mutations
}