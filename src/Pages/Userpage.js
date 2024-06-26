import React, { useEffect, useState } from 'react'
import Sidebar from '../Components/Sidebar'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Userpage() {

  // useEffect(()=>{getSelfData()},[])
  // const navigate = useNavigate()

  const userInfo = JSON.parse(localStorage.getItem("userdetail"))
  // const [selfData,setSelfData] = useState({})

  // const getSelfData = ()=>{
  //   axios.get("http://localhost:5001/api/userdetail").then((res)=>setSelfData(res.data.data.filter((i)=> i.username == localStorage.getItem("username"))[0]))
  // }
  return (
    <div className='flex'>
        <Sidebar/>
        <div className="w-[94%] z-50 flex flex-col items-center h-[100vh] bg-[white] gap-5">
        <div className="w-[70%] h-[30vh] flex  gap-10 pt-5 ">
          {/* {JSON.stringify(selfData)} */}
          <div className="w-[25%] ">
            
              <img 
                className="w-[140px] h-[140px] object-cover object-center rounded-full"
                src={userInfo?.dp}
              ></img>
            
          </div>
          <div className="w-[60%] flex flex-col  gap-5">
            <div className="w-[100%] flex gap-4 items-center">
              <label className="text-[18px] font-medium">
                {userInfo?.username}
              </label>
              <div  className="w-[23%] h-[5vh] bg-gray-300 rounded-md flex items-center justify-center border text-[14px] font-semibold">
                following

              </div>

              <div className="w-[24%] h-[5vh] bg-gray-300 rounded-md flex items-center justify-center border text-[14px] font-semibold">
                Messages
              </div>
              <div className='w-[40px] h-[5vh]  bg-gray-300 rounded-md flex items-center justify-center'>
              <i class="fa fa-user-plus" aria-hidden="true"></i>
                </div>
                <div className='w-[px] flex gap-1'>
                    <div className='h-[5px] w-[5px] bg-black rounded-full'></div>
                    <div className='h-[5px] w-[5px] bg-black rounded-full'></div>
                    <div className='h-[5px] w-[5px] bg-black rounded-full'></div>
                </div>

              
           </div>
            <div className="w-[60%] flex justify-between">
              <label>
                <span className="font-semibold">{userInfo.post.length}</span> posts
              </label>
              <label>
                <span className="font-semibold">{userInfo.follower.length}</span> followers
              </label>
              <label>
                <span className="font-semibold">{userInfo.following.length}</span> following
              </label>
            </div>
            <div className="flex flex-col gap-3">
              <label>{userInfo.fullName}</label>
              {/* <label className="text-[14px] font-semibold">Happy..🌸</label> */}
              <label className='text-[14px] font-semibold text-gray-500'>followed by <span className='text-[14px] text-black font-semibold'>vaishu._01</span> and...</label>
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
            {userInfo.post.map((i)=>
            <img src={i.image} className="w-[33%] h-[40vh]"></img>)}
          </div>
        
      </div>
    </div>
  )
}

export default Userpage