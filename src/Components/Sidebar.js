import React, { useEffect, useState } from "react";
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import axios from "axios";
import Search from "./Search";
import { useNavigate } from "react-router-dom";


function Sidebar() {
  const navigate = useNavigate()
  useEffect(()=>{getUserData()},[])
  const [showdiv, setShowDiv] = useState(false);

  const [uploadPost, setUploadPost] = useState(0) 
  const[userdata,setUserData] = useState([])
  
  const getUserData = ()=>{
    axios.get("http://localhost:5001/api/userdetail").then((res)=>{setUserData(res.data.data.filter(
      (i)=>i.username == localStorage.getItem("username")
    ))})
  }
 const[caption,setCaption] = useState("")

 const putPostData = ()=>{
    const obj = {
      ...userdata[0],
      post : [
        ...userdata[0]?.post,
        {
          image : url,
          caption : caption,
          likes : [],
          Comment : [],
          caption: ""
        }
      ]
    }
    axios.put("http://localhost:5001/api/userdetail/"+ userdata[0]._id, obj).then((res)=>alert(JSON.stringify(res)))
  }

  const firebaseConfig = {
    apiKey: "AIzaSyA1BVN2p4y665bvxoAUPzBkMsD-rcFMu0Q",
  authDomain: "newew-a58cd.firebaseapp.com",
  projectId: "newew-a58cd",
  storageBucket: "newew-a58cd.appspot.com",
  messagingSenderId: "1027758300491",
  appId: "1:1027758300491:web:4818f8aa95a6cf023f5cce",
  measurementId: "G-ELS1CSRQXJ"
  };
  firebase.initializeApp(firebaseConfig);
  const storage = firebase.storage();
   
  const [url, setUrl ] = useState('')
  const handleChange = (e) => {
    const image = e.target.files[0];
    setUploadPost(1)
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      'state_changed',
      (snapshot) => {},
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref('images')
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            setUrl(url);
          });
      }
    );
  };
  

  
  const createDiv = () => {
    if (showdiv == true) {
      setShowDiv(false);
    } else {
      setShowDiv(true);
    }
  };

  const[searchDiv , setSearchDiv] = useState(false)

  const searchId = ()=>{
    if(searchDiv==true){
      setSearchDiv(false)
    }else{
      setSearchDiv(true)
    }
  }
 const [profile,setProfile] = useState(0)
  const profileDiv = ()=> {
    if(profile == 1){
      setProfile(0)
    }else{
      setProfile(1)
    }
  }

  const[more,setMore] = useState(false)

  const moreDiv = ()=>{
    if(more==true){
      setMore(false)
    }else{
      setMore(true)
    }
  }

  
  

  return (
    <div className="w-[6%]">
      <div className=" h-[100vh] w-[6%] border-[1px] flex fixed flex-col gap-0  ">
        {/* <h1 className="text-[30px] pl-[30px] py-[20px] font-semibold">
          Instagram
        </h1> */}
        <div className="w-[100%]  pt-10 pb-10 " >
        <i onClick={()=>navigate("/home")} class="fa fa-instagram text-[25px] pl-6 pt-" aria-hidden="true"></i>
        </div>
        


        <div className="flex flex-col  gap-4 hover:cursor-pointer   ">
          <div className="flex gap-2 items-center pl-6 w-[90%] h-[6vh] hover:bg-slate-100 cursor-pointer">
            <i onClick={()=>navigate("/home")} class="fa fa-home fa-lg text-[25px]" aria-hidden="true"></i>
            {/* <label>HOME</label> */}
          </div>

          <div onClick={()=>searchId()}
          // style={{transform : searchDiv == true ? "translateX(0%)" : "translateX(-100%)"}}
          
          className="flex gap-2 items-center pl-6 w-[90%] h-[6vh] hover:bg-slate-100 ">
            <i class="fa fa-search fa-lg " aria-hidden="true"></i>

            {/* <label>Search</label> */}
          </div>

          <div className="flex gap-2 items-center pl-6 w-[90%] h-[6vh] hover:bg-slate-100 ">
            <i class="fa fa-compass fa-lg text-[25px]" aria-hidden="true"></i>
            {/* <label>Explore</label> */}
          </div>

          <div className="flex gap-2 items-center pl-6 w-[90%] h-[6vh] hover:bg-slate-100 ">
            <i class="fa fa-play-circle fa-lg text-[25px]" aria-hidden="true"></i>
            {/* <label>Reels</label> */}
          </div>

          <div className="flex gap-2 items-center pl-6 w-[90%] h-[6vh] hover:bg-slate-100 ">
            <i onClick={()=>navigate("/message")} class="fa fa-commenting-o fa-lg text-[25px]" aria-hidden="true"></i>
            {/* <label>Messages</label> */}
          </div>

          <div className="flex gap-2 items-center pl-6 w-[90%] h-[6vh] hover:bg-slate-100 ">
            <i class="fa fa-heart-o fa-lg text-[25px]" aria-hidden="true"></i>
            {/* <label>Notofication</label> */}
          </div>

          <div
            onClick={() => createDiv()}
            className="flex gap-2 items-center pl-6 w-[90%] h-[6vh] hover:bg-slate-100 "
          >
            <i class="fa fa-plus-circle fa-lg text-[25px]" aria-hidden="true"></i>
            {/* <label>Create</label> */}
          </div>

          <div
          onClick={()=> navigate('/profile')}
           className="flex gap-2 items-center pl-6 w-[90%] h-[6vh] hover:bg-slate-100 ">
            <i class="fa fa-user fa-lg text-[25px]" aria-hidden="true"></i>
            {/* <label>Profile</label> */}
          </div>

          <div className="flex flex-col gap-3 pt-6">
            {/* <div className="flex gap-2 items-center   pl-[30px] w-[90%] h-[6vh] hover:bg-slate-100  ">
              <i class="fa fa-plus fa-lg" aria-hidden="true"></i>
              <label>Treads</label>
            </div> */}

            <div className="flex gap-2 items-center pl-6 w-[90%] h-[6vh] hover:bg-slate-100 ">
              <i onClick={()=>moreDiv()} class="fa fa-bars text-[25px]" aria-hidden="true"></i>
              {/* <label>More</label> */}
            </div>
          </div>
        </div>
      </div>

      {/* -------------------------Create PopUp------------------------------------- */}
      {showdiv == true && (
        <div className=" w-[100%] h-[100vh] fixed flex justify-center flex-col top-0 left-0 z-[100]">
          <div
            onClick={() => setShowDiv(false)}
            className="h-[100vh] w-[100%] bg-black opacity-[.6] fixed z-10"
          >
            <div className="text-[20px] text-[white] flex justify-end p-4">
              <lable>X</lable>
            </div>
          </div>
           {uploadPost == 0 ?
          <div className="w-[30%] z-20 h-[70vh] bg-white border rounded self-center flex flex-col items-center ">
            <h1 className="mt-3 font-semibold">Create new post</h1>
            <div className="w-[100%] h-[1px] bg-slate-200 mt-3"></div>

            <div className="w-[100%]  flex flex-col  gap-5 items-center justify-center h-[50vh]">
              <i class="fa fa-picture-o text-[35px] " aria-hidden="true"></i>
              <label className="text-[20px]">Drag photos and videos here</label>
              <input onChange={(e)=>handleChange(e)} type="file" placeholder="Select from computer" className="w-[50%] h-[6vh] bg-blue-500 text-[14px] text-white font-bold  rounded-lg  cursor-pointer hover:bg-blue-600">
               
              </input>
            </div>
          </div>:
           uploadPost == 1 ?
          <div className="w-[30%] z-20 h-[70vh] bg-white border rounded self-center flex flex-col items-center  ">
            <div className="flex items-center justify-between w-[100%] px-4">
            <label className="mt-3 font-semibold  text-blue-600">Back</label>
            <label className="mt-3 font-semibold">Crop</label>
            <label onClick={()=>setUploadPost(2)} className="mt-3 font-semibold text-blue-600">Next</label>
            </div>
            <div className="w-[100%] h-[1px] bg-slate-200 mt-3"></div>

            <img className="w-[100%] h-[60vh] object-fill" src={url}></img>
          </div>:
          <div className="w-[60%]  z-20 h-[70vh] bg-white border rounded self-center flex flex-col items-center gap-4 ">
            <div className="w-[100%] h-[4vh] items-center flex-col ">
            <div className="flex w-[100%] justify-between px-4">
            <label className="mt-4 font-semibold text-blue-500">Back</label>
            <label className="mt-4 font-semibold ">Create new post</label>
            <label onClick={()=>putPostData()} className="mt-4 font-semibold text-blue-500">Share</label>
            </div>
            </div>
            <div className="w-full h-[vh]">
            <div className="w-[100%] h-[1px] bg-slate-200 mt-4"></div>
            </div>
            <div className="w-[100%]  flex h-[60vh]">
              <img className="w-[55%] object-cover" src={url}></img>
              <div className="w-[45%] h-[50vh]">
              <textarea className="w-[100%] h-[40vh] pl-2 outline-none" placeholder="Write a caption..." ></textarea>
              </div>
            </div>
          </div>}




        </div>
      )}
     {/* --------------------------------Search-div----------------------------------- */}
      
     <Search showSearch={searchDiv}></Search>


     {/* --------------------------------------logout--------------------------------- */}

     {more == true &&

     <div className="w-[23%] h-[83vh] left-[55px] z-[100000] bg-white fixed top-[90px] log rounded-lg  flex flex-col gap-4 ">
      <div className="w-[100%] pt-4 flex flex-col px-4 gap-">
              <div className="w-[100%] h-[8vh] hover:bg-gray-300  rounded-lg flex items-center pl-4 gap-2">
      <i class="fa fa-cog text-[19px]" aria-hidden="true"></i>
      <label className="text-[14px]">Setting</label>
      </div>

      <div className="w-[100%] h-[8vh]  hover:bg-gray-300 flex items-center rounded-lg pl-4 gap-2">
      <i class="fa fa-picture-o text-[19px]" aria-hidden="true"></i>
      <label className="text-[14px]">Your activity</label>
      </div>

      <div className="w-[100%] h-[8vh]  hover:bg-gray-300 flex items-center rounded-lg pl-4 gap-2">
      <i class="fa fa-bookmark-o text-[19px]" aria-hidden="true"></i>
      <label className="text-[14px]">Saved</label>
      </div>

      <div className="w-[100%] h-[8vh]   hover:bg-gray-300 flex items-center rounded-lg pl-4 gap-2">
      <i class="fa fa-sun-o text-[19px]" aria-hidden="true"></i>
      <label className="text-[14px]">Switch appearance</label>
      </div>

      <div className="w-[100%] h-[8vh]  hover:bg-gray-300 pl-4 flex items-center rounded-lg  gap-2">
      <i class="fa fa-exclamation-triangle text-[19px]" aria-hidden="true"></i>
      <label className="text-[14px]">Report a problem</label>
      </div>

     </div>

     <div className="w-[100%] h-[13vh] border-t-4 border-b-4 flex items-center  gap-2 px-4 ">
      <div className="w-[100%] h-[8vh] hover:bg-gray-300 rounded-lg pl-4 flex  items-center gap-2">
     <i class="fa fa-at text-[19px]" aria-hidden="true"></i>
      <label className="text-[14px]">Threads</label>
      </div>
     </div>
     <div className="w-[100%] h-[10vh] border-b-[1px] flex items-center px-4 pb-4 text-[14px] ">
      <div className="w-[100%] h-[8vh] flex items-center hover:bg-gray-300 rounded-lg pl-4">
      <label>Switch account</label>
      </div>
    </div>

    <div className="w-[100%] h-[10vh] flex items-center pb-4 px-4 text-[14px]">
      <div className="w-[100%] h-[8vh] flex items-center pl-4 hover:bg-gray-300 rounded-lg">
      <label onClick={()=>navigate("/")}>Log Out</label>
      </div>
    </div>
     </div>}

     </div>
  );
}

export default Sidebar;
