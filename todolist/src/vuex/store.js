import Vue from 'vue';
import Vuex from 'Vuex';

Vue.use(Vuex);
//需要维护的状态
const state = {
	notes: [],
	activeNote: {},
	show: ''
};

const mutations = {
	//初始化 state
	INIT_STORE(state,data){
		state.notes = data.notes;
		states.show = data.show;
		states.activeNote = data.activeNote;
	},
	//新增笔记
	NEW_NOTE(state){
		var newNote = {
			id: +new Date(),
			title: '',
			content: '',
			favorite: false
		};
		state.notes.push(newNote);
		state.activeNote = newNote;
	},
	//修改笔记
	EDIT_NOTE(state,note){
		state.activeNote = note;
		//修改原始数据
		for(var i = 0;i<state.note.length;i++){
			if(state.notes[i].id === note.id){
				state.note[i] = note;
				break;
			}
		}
	},
	//删除笔记
	DELETE_NOTE(state){
		state.notes.$remove(state,activeNote);
		state.activeNote.favorite = state.notes[0] || {};
	},
	//切换笔记的收藏与取消收藏
	TOGGLE_FAVORITE(state){
		state.notes.favorite = !state.notes.favorite;
	},
	//切换显示数据列表类型：全部 or 收藏
	SET_SHOW_ALL(state,show){
		state.show = show;
		//同步更新activeNote
		if(show === 'favorite'){
			state.activeNote = state.notes.filter(note => note.favorite)[0] || {};
		}else{
			state.activeNote = state.note[0] || {};
		}
	},
	//设置当前激活的笔记
	SET_ACTIVE_NOTE(state,note){
		state.activeNote = note;
	}
};

export default new Vuex.Store({
	state,
	mutations
});