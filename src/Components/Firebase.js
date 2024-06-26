import React, { useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/storage";

function Firebase() {
  const firebaseConfig = {
    apiKey: "AIzaSyA1BVN2p4y665bvxoAUPzBkMsD-rcFMu0Q",
    authDomain: "newew-a58cd.firebaseapp.com",
    projectId: "newew-a58cd",
    storageBucket: "newew-a58cd.appspot.com",
    messagingSenderId: "1027758300491",
    appId: "1:1027758300491:web:4818f8aa95a6cf023f5cce",
    measurementId: "G-ELS1CSRQXJ",
  };
  firebase.initializeApp(firebaseConfig);
  const storage = firebase.storage();

  const [url, setUrl] = useState("");
  const handleChange = (e) => {
    const image = e.target.files[0];
    setUploadPost(1);
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            setUrl(url);
          });
      }
    );
  };
  return <div></div>;
}

export default Firebase;
