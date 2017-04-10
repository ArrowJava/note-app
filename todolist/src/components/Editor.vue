<template>
 <div id="note-editor">
	<div class="form-group">
		<input type="text" name="title" class="title form-control" placeholder="请输入标题
		" @input="updateNote" v-model="currentNote.title">
		<textarea v-model="currentNote.content" name="content" class="form-control" row="3" placeholder="请输入正文" @input="updateNote"></textarea>
	</div>
 </div>
</template>
<script type="text/javascript">
	
import { editNote } from '../vuex/actions';
import { activeNote } from '../vuex/getters';

export default{
	vuex:{
		actions:{
			editNote
		},
		getters:{
			activeNote
		}
	},
	computed:{
		currentNote:activeNote
	},
	mothods:{
		updateNote(){
			this.editNote(this.currentNote);
		}
	}
}
</script>