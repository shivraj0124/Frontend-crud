import {useState,useEffect} from 'react';
import postServices from '../services/postServices';
import Updatecomponent from './Updatecomponent';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

export default function ShowComponent() {
    const [posts,setPosts]=useState({});

    const fetchPosts=async()=>{
        setPosts(await postServices.getPost());
    }
    
    
    useEffect(()=>{
        fetchPosts()
    },[posts])
    console.log(posts);
    const handleDelete =async(id,e)=>{
       const response = await postServices.deletePost(id);
       if(response.data.success ==true){
           document.getElementById(id).parentElement.parentElement.remove;
           alert(response.data.msg)
        //    fetchPosts()        
       }else{
         alert(response.data.msg)
       }
    }
    return (
        <>
            <center>
                <div>
                    <h1>Posts </h1>
                    {
                        posts.data != undefined && posts.data.data.length >0 && (
                            <table style={{width:'90%',padding:'4%'}} border='2' >
                                <thead>
                                    <th>Title</th>
                                    <th>Date</th>
                                    <th>Image</th>
                                    <th>Delete</th>
                                    <th>Edit</th>
                                </thead>
                                <tbody>
                                    {
                                        posts.data.data.map(post =>(
                                            <tr>
                                                <td>{post.title}</td>
                                                <td>{post.date}</td>
                                                <td>
                                                    <img src={'https://crud-backend-swart.vercel.app/api/postimages/'+post.image} style={{width:'100px',height:'100px'}} />
                                                </td>
                                                <td>
                                                    <button id={post._id} onClick={(e)=>handleDelete(post._id,e)} style={{backgroundColor:'blueviolet'}}>Delete</button>
                                                </td>
                                                <td>
                                                    <Updatecomponent  id={post._id} title={post.title} date={post.date} />
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        )
                    }
                </div>
            </center>
        </>
    );

}
