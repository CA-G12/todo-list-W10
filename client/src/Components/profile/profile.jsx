import React from "react";
import NavProfile from "./NavProfile";
import "./Profile.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Profile() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [img, setImg] = useState("");
  const [userName, setUserName] = useState("");
  const [tasks, setTasks] = useState([]);

  const navigation = useNavigate();
  const getData = () => {
    fetch("/user/profile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((data) => data.json())
      .then((data) => {
        setUserName(data.name);
        setImg(data.img);
        setTasks(data.tasks);
      })
      .catch((err) => console.log(err));
  };

  const addTask = () => {
    const taskData = {
      title,
      content,
    };
    fetch("/user/add-task", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(taskData),
    })
      .then(() => getData())
      .then(() => {
        setTitle("");
        setContent("");
      })
      .catch((err) => console.log(err));
  };

  const deleteTask = (id) => {
    fetch(`/user/delete-task${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => getData())
      .catch((err) => console.log(err));
  };

  const logOut = () => {
    fetch("/user/sign-out", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => navigation("/user/sign-in"))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  }, []);

  const getAllTasks = () => {
    return tasks.map((task) => {
      return (
        <div className="card" key={tasks.id}>
          <img src="" alt="img-random" />
          <div className="card-content">
            <h1 className="card-header">{task.title}</h1>
            <p className="card-content">{task.content}</p>
            <button className="card-btn" onClick={() => deleteTask(task.id)}>
              Delete
            </button>
          </div>
        </div>
      );
    });
  };

  return (
    <>
      <NavProfile
      name={userName}
        LogOut={
          <button className="btn btn-primary" onClick={() => logOut()}>
            LOGOUT
          </button>
        }
      />

      <main className="main">
        <div className="container">
          <div id="add-card">
            <input
              type="text"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              id="add-card-text"
              name="add-card"
              placeholder="Add Task..."
              autofocus
            />

            <textarea
              onChange={(e) => setContent(e.target.value)}
              value={content}
            ></textarea>

            <button
              id="add-card-button"
              class="plus-button"
              type="submit"
              className="btn btn-primary"
              onClick={addTask}
            >
              Add Task
            </button>
          </div>

          {/* <h3>{userName}</h3> */}

          <div className="grid">
            <div className="grid-item">{getAllTasks()}</div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Profile;