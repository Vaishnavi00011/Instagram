import React, { useEffect, useState } from "react";
import Sidebar from "../Components/Sidebar";
import axios from "axios";
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate()
  useEffect(() => {
    getSelfData();
  }, []);
  const [selfData, setSelfData] = useState({});
  const getSelfData = () => {
    axios
      .get("http://localhost:5001/api/userdetail")
      .then((res) =>
        setSelfData(
          res.data.data.filter(
            (i) => i.username == localStorage.getItem("username")
          )[0]
        )
      );
  };

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

  const handleChange = (e) => {
    const image = e.target.files[0];
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
            axios
              .put("http://localhost:5001/api/userdetail/" + selfData._id, {
                dp: url,
              })
              .then(
                (res) => {
                  getSelfData();
                  console.log(res);
                },
                (err) => alert(err)
              );

            console.log(url);
          });
      }
    );
  };

  const[changeprofile,setChangeProfile] = useState(false)

  return (
    <div className="flex">
      <Sidebar></Sidebar>
      <div className="w-[94%] z-50 flex flex-col items-center h-[100vh] bg-[white] gap-5">
        <div className="w-[70%] h-[30vh] flex  gap-10 pt-5 ">
          {/* {JSON.stringify(selfData)} */}
          <div className="w-[25%] ">
            {!selfData.dp ? (
              <input onChange={(e) => handleChange(e)} type="file"></input>
            ) : (
              <img onClick={()=>setChangeProfile(true)}
                className="w-[140px] h-[140px] object-cover object-center rounded-full"
                src={selfData.dp}
              ></img>
            )}
          </div>
          <div className="w-[60%] flex flex-col  gap-5">
            <div className="w-[100%] flex gap-4 items-center">
              <label className="text-[18px] font-medium">
                {selfData.username}
              </label>
              <div onClick={()=>navigate('/edit-profile')} className="w-[23%] h-[5vh] bg-gray-300 rounded-md flex items-center justify-center border text-[14px] font-semibold">
                Edit profile
              </div>

              <div className="w-[24%] h-[5vh] bg-gray-300 rounded-md flex items-center justify-center border text-[14px] font-semibold">
                View archive
              </div>
              <i class="fa fa-sun-o text-[25px]" aria-hidden="true"></i>
            </div>
            <div className="w-[60%] flex justify-between">
              <label>
                <span className="font-semibold">0</span> posts
              </label>
              <label>
                <span className="font-semibold">0</span> followers
              </label>
              <label>
                <span className="font-semibold">0</span> following
              </label>
            </div>
            <div className="flex flex-col">
              <label>{selfData.fullName}</label>
              <label className="text-[14px] font-semibold">Happy..🌸</label>
            </div>
          </div>
        </div>
        <div className="w-[70%] h-[20vh] bg-red flex items-center mt-6 gap-5">
          <div className="flex items-center justify-center flex-col ">
            <div className="w-[80px] h-[80px] rounded-full border"></div>
            <label>.</label>
          </div>
          <div className="flex flex-col items-center justify-center gap-1">
            <div className="w-[80px] h-[80px] rounded-full border flex items-center justify-center">
              <label className="text-[35px] text-gray-400">+</label>
            </div>
            <label className="text-[13px] font-semibold">New</label>
          </div>
          
        </div>
       <div className="w-[70%] mt-7 flex items-center">
        <div className="w-[100%] h-[1px] bg-gray-400 "></div>
        </div>
        <div className="w-[70%] flex items-center justify-center gap-20  ">
            <div className="flex items-center justify-center gap-2">
            <i class="fa fa-th text-[12px]" aria-hidden="true"></i>
           <label className="text-[13px]">POST</label> 
            </div>
            <div className="flex  items-center justify-center gap-2 ">
            <i class="fa fa-bookmark-o text-[12px]" aria-hidden="true"></i>
            <label className="text-[13px]"> SAVED</label>

            </div>
        </div>
        <div className=" flex flex-wrap  gap-4 h-[40vh] w-[70%]">
            {selfData.post?.map((i)=>
            <img className="w-[33%] h-[40vh]" src={i.image}></img>)}
          </div>
        
      </div>
{/* -------------------------------------profile-div----------------------------------------- */}
 
 {changeprofile == true &&
 <div className="w-[100%] h-[100vh] fixed top-0 left-0 flex items-center justify-center z-50 ">
  <div  className="w-[100%] h-[100vh] fixed bg-black opacity-50 top-0 left-0 "></div>
  <div className="w-[35%] h-[37vh] bg-white z-10 rounded-lg ">
    <div className="w-[100%] h-[12vh] border-b-2  flex items-center justify-center">
     <h1 className="text-[20px]">Change Profile Photos</h1>
    </div>
    <div className="w-[100%] h-[8vh]  border-b-2 flex items-center justify-center">
      <label className=" text-blue-500 text-[14px] font-bold">Upload Photo</label>
      
    </div>

    <div className="w-[100%] h-[8vh]  border-b-2 flex items-center justify-center">
      <label className=" text-red-600 text-[14px] font-bold">Remove current photo</label>
    </div>
    <div className="w-[100%] h-[10vh] flex items-center justify-center">
      <label onClick={()=>setChangeProfile(false)}>Cancel</label>
    </div>
  </div>
</div>}


     
    </div>
  );
}

export default Profile;
