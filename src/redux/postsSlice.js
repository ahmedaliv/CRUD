import {createSlice} from '@reduxjs/toolkit'

export const postsSlice=createSlice({
    name:'posts',
    initialState:{
        posts:[]
    },
    reducers:{
        addPost:function(state,action){
            state.posts.push(action.payload)
        },
        deletePost:function(state,action){
            state.posts=state.posts.filter(item=>item.id!==action.payload.id)
        },
        editPost:function(state,action){
            state.posts=state.posts.map(item=>{
                if(item.id===action.payload.id){
                    item.title=action.payload.title
                    item.desc=action.payload.desc
                }
            })
        }

    },
})
export const {addPost,deletePost,updatePost} = postsSlice.actions
export default postsSlice.reducer