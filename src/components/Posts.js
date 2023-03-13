import React from 'react'
import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {useSelector} from 'react-redux'
import {addPost,deletePost,updatePost} from '../redux/postsSlice';
function Posts() {
  const [title,setTitle]=useState('');
  const [desc,setDesc]=useState('');
  const [isEdit,setIsEdit]=useState(false);
  const [id,setId]=useState(0);
  const [updatedTitle,setUpdatedTitle]=useState('');
  const [updatedDesc,setUpdatedDesc]=useState('');
  const posts=useSelector(state=>state.posts.posts);
  
  const dispatch=useDispatch();

  return (
    <div>
      <div className="form">
         <input type="text" 
         placeholder="Enter Post Title"
         value={title}
         onChange={(e)=>setTitle(e.target.value)} />
        <input type="text"
         value={desc}     
         placeholder="Enter Post Desc"
         onChange={(e)=>setDesc(e.target.value)} />
        <button onClick={
          ()=>{
            dispatch(addPost({id:posts.length +1,title,desc}))
            setDesc("")
            setTitle("")
          }
        }>Submit</button>
      </div>
      <div className="posts">
        {posts.length > 0 ? posts.map(post=><div className="post" key={post.id}> 
          <h2>{post.title}</h2>
          <p>{post.desc}</p>
          <button onClick={()=>{
                setIsEdit(true)
                setId(post.id)  
              }
          }>Edit</button>
          <button onClick={(()=>dispatch(deletePost({id:post.id})))}>Delete</button>
          <br/>
          {isEdit  && id==post.id && (
            <>
              <input type="text" placeholder='updated title'
                onChange={(e)=>setUpdatedTitle(e.target.value)}
              />
              <input type="text" placeholder='updated desc'
               onChange={(e)=>setUpdatedDesc(e.target.value)}
              />
              <button onClick={(post)=>{
                console.log("asdasdsa")
                // dispatch(updatePost({id:post.id,title:updatedTitle,desc:updatedDesc}));
                 setIsEdit(false);
            }}>
            Update
            </button>
            </>
          ) }
        </div>): "There's No Posts"
        }
      </div>
    </div>
  )
}

export default Posts
