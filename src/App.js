import React, { useState } from "react";
import "./App.css";
import { getFirestore, addDoc, collection } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

import { app } from "./Firebase";

function App() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [avatar, setAvatar] = useState("");

  const db = getFirestore(app);
  const storage = getStorage();

  async function handleData(e) {
    e.preventDefault();
    // const mountainImagesRef = ref(storage, 'images/mountains.jpg');

    await addDoc(collection(db, "PostCol"), {
      text: desc,
      title: title,
      currentDateInMilis: Date.now(),
      image: avatar,
    })
      .then(alert("Data Submitted"))
      .catch((e) => alert("Error", e.message));
  }

  const onFileChange = async (e) => {
    const file = e.target.files[0];
    const storageRef = ref(storage, file.name);
    await uploadBytes(storageRef, file)
      .then((snapshot) => {
        alert("Uploaded a blob or file!");
      })
      .catch((e) => alert("Error => ", e.message));
    getDownloadURL(storageRef)
      .then((url) => {
        // alert("URL of Image =>", url);
        setAvatar(url);
      })
      .catch((e) => {
        alert("Error", e.message);
      });
  };

  return (
    <>
      <form onSubmit={handleData} id="file_form">
        Title:
        <input
          type="text"
          placeholder="title"
          name="title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        ></input>
        <br></br> <br></br>
        description:
        <input
          type="text"
          placeholder="description"
          name="desc"
          onChange={(e) => setDesc(e.target.value)}
          value={desc}
        ></input>
        <br></br>
        <label>Select Image :</label>
        <input
          type="file"
          name="avatar"
          // onChange={(e) => setAvatar(e.target.files[0])}
          onChange={onFileChange}
        />
        <br></br>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App;
