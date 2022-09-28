import React from "react";
import { useState , useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Profile () {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [img, setImg] = useState('');
    const [userName, setUserName] = useState('');
    const [tasks, setTasks] = useState([]);   
    
    const navigation = useNavigate();
    const getData = () => {
        fetch('/user/profile', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
          }).then((data) => data.json())
          .then((data) => {
            setUserName(data.name);
            setImg(data.img);
            setTasks(data.tasks);
          }).catch((err)=>console.log(err))
    }    

    const addTask = () => {
        const taskData = {
            title,
            content,
        }
        fetch('/user/add-task', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body : JSON.stringify(taskData),
          }).then(()=> getData()).then(()=>{
            setTitle('');
            setContent('');
          }).catch((err) => console.log(err))
    }

    const deleteTask = (id) =>{
        fetch(`/user/delete-task${id}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          }).then(()=> getData()).catch((err) => console.log(err))
    }

    const logOut = () =>{
        fetch('/user/sign-out', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          }).then(()=> navigation('/user/sign-in')).catch((err) => console.log(err))
    }


    useEffect(()=>{
        getData()
    },[])


    const getAllTasks = ()=>{
        return tasks.map(task => {
            return <div key={tasks.id}><p onClick={() => deleteTask(task.id)} >X</p><h4>task.title</h4><p>{task.content}</p></div>
        })
    }    

    return (
                <div id="profile">
                    {/* {getData()} */}
                    <h3>{userName}</h3>
                    <p  onClick={()=>logOut()} >log out</p>
                    <div id="form">
                        <input type="text" onChange={e => setTitle(e.target.value)} value={title} />
                        <textarea name="" id="" cols="30" rows="10" onChange={e => setContent(e.target.value)} value={content}></textarea>
                        <button type="submit" class="signUp"  onClick={addTask}>add Task</button>
                    </div>
                        {   
                            getAllTasks()
                        }
                    
                </div>
            );

  }

export default Profile;