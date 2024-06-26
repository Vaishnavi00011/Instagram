import React, { useEffect, useState } from 'react'
import Sidebar from '../Components/Sidebar'
import StoryData from '../json/Story.json'
import Suggested from '../Components/Suggested'
import axios from 'axios'


function Home() {
  useEffect(()=>{getUsersData()},[])

  

 const[allUserData,setAllUserData] = useState([])
 const[selfData,setSelfData] = useState({})
 const getUsersData = ()=>{
  axios.get("http://localhost:5001/api/userdetail").then((res)=>{setAllUserData(res.data.data);setSelfData(res.data.data.filter((i)=>i.username==localStorage.getItem("username"))[0])})
 }

 const allPostData = allUserData.filter((i)=> i.post.length>0 & selfData.following.includes(i.username)).map((i)=> i.post).flat()
 





  return (
    
    <div className='flex relative '>
      
      <Sidebar/>
      
      

      <div className="  w-[63%]   flex flex-col    text-[12px] gap-5  justify-center items-center ">
        <div className="  w-[100%] flex gap-3 justify-center items-center">
          {StoryData.map((i)=>
          <div className="flex flex-col items-center gap-1 w-[70px] rounded-[50px]  ">
            <img
              className="h-[60px] w-[60px] rounded-[50px] object-cover object-center border-[2px] border-solid border-red-400 "
              src={i.dp}
            ></img>
            <label>{i.username} </label>
          </div>
        
        )}
        </div>
        {allPostData.map((i)=>
        <div className="h-[90vh]  w-[50%] flex flex-col   gap-2  mt-5">
          <div className="h-[7vh] w-[100%]  flex  pl-[10px] items-center justify-between ">
            <div className="h-[5vh] w-[100%] flex items-center justify-between">
              <div className="h-[40px] w-[40px]  rounded-[50px]  flex items-center gap-1  ">
                <img
                  className="h-[40px] w-[40px] rounded-[50px] object-cover object-center border-[2px]  border-red-300 "
                  src={allUserData.filter((j)=> j.username == i.username )[0].dp}
                ></img>
                <h1 className="font-bold text-[12px]">{i.username}</h1>
                <label className="font-bold text-[15px] text-gray-400">.</label>
                <label className="font-bold text-[12px] text-gray-400">
                  6h
                </label>
              </div>

              <div className="flex h-[2vh] w-[10%] gap-1 justify-center items-center  ">
                <div className="h-[4px] w-[4px] bg-black rounded-[50px]"></div>
                <div className="h-[4px] w-[4px] bg-black rounded-[50px]"></div>
                <div className="h-[4px] w-[4px] bg-black rounded-[50px]"></div>
              </div>
            </div>
          </div>
          <img
            className="h-[70vh] w-[100%] object-cover object-center rounded-[5px]"
            src={i.image}
          ></img>

          <div className="h-[7vh] w-[100%]  flex  justify-between">
            <div className="h-[7vh] w-[25%] flex items-center gap-2 pl-[10px]">
              <i class="fa fa-heart-o fa-2x" aria-hidden="true"></i>
              <i class="fa fa-comment-o fa-2x" aria-hidden="true"></i>
              <i class="fa fa-share-alt fa-2x" aria-hidden="true"></i>
            </div>
            <div className="h-[7vh] w-[10%]   flex items-center">
              <i class="fa fa-bookmark-o fa-2x" aria-hidden="true"></i>
            </div>
          </div>
          <div className="h-[10vh] w-[100%]  flex flex-col ">
            <label className="font-bold text-[14px]">28,670 likes</label>
            <label className=" font-medium text-gray-400 text-[12px]">
              This view never gets old.
            </label>
            <label className=" font-thin text-gray-400 text-[12px]">
              view all 650 comments
            </label>
            <label className=" font-light text-gray-400">
              {" "}
              Add a Comment.....
            </label>
          </div>

          <div className="h-[1px] w-[100%] bg-gray-500 mt-3"></div>
        </div>)}

        <div className="h-[4vh] w-[50%] flex justify-between">
          <div className="h-[4vh] w-[50%]  flex items-center">
            <label className="text-[14px]">Suggested for you</label>
          </div>
          <div className="h-[4vh] w-[50%] flex justify-end pr-2">
          <i class="fa fa-times fa-lg" aria-hidden="true"></i>
          </div>
        </div>

        <div className="h-[100vh] w-[50%]  flex flex-col  gap-1">
          <div className="h-[7vh] w-[100%]  flex  pl-[10px] items-center justify-between">
            <div className="h-[5vh] w-[100%] flex items-center justify-between">
              <div className="h-[40px] w-[40px]  rounded-[50px]  flex items-center gap-1  ">
                <img
                  className="h-[40px] w-[40px] rounded-[50px] object-cover object-center border-[2px]  border-red-300 "
                  src="https://florette.ae/cdn/shop/collections/Screen_Shot_2022-04-30_at_5.15.56_PM_814x796.png?v=1696050634"
                ></img>
                <h1 className="font-bold text-[12px]">Flower</h1>
                <label className="font-bold text-[15px] text-gray-400">.</label>
                <label className="font-bold text-[12px] text-gray-400">
                  10h
                </label>
              </div>

              <div className="flex h-[2vh] w-[10%] gap-1 justify-center items-center  ">
                <div className="h-[4px] w-[4px] bg-black rounded-[50px]"></div>
                <div className="h-[4px] w-[4px] bg-black rounded-[50px]"></div>
                <div className="h-[4px] w-[4px] bg-black rounded-[50px]"></div>
              </div>
            </div>
          </div>
          <img
            className="h-[70vh] w-[100%] object-cover object-center rounded-[5px]"
            src="https://hips.hearstapps.com/hmg-prod/images/pink-lotus-flowers-and-leaves-in-the-lake-royalty-free-image-1686761539.jpg"
          ></img>

          <div className="h-[7vh] w-[1005]  flex  justify-between">
            <div className="h-[7vh] w-[25%] flex items-center gap-2 pl-[10px]">
              <i class="fa fa-heart-o fa-2x" aria-hidden="true"></i>
              <i class="fa fa-comment-o fa-2x" aria-hidden="true"></i>
              <i class="fa fa-share-alt fa-2x" aria-hidden="true"></i>
            </div>
            <div className="h-[7vh] w-[10%]   flex items-center">
              <i class="fa fa-bookmark-o fa-2x" aria-hidden="true"></i>
            </div>
          </div>
          <div className="h-[10vh] w-[100%]  flex flex-col ">
            <label className="font-bold text-[14px]">20,5706 likes</label>
            <label className=" font-medium text-gray-400 text-[12px]">
              Blossom by blossom, the garden reveals its secrets. 🌸
            </label>
            <label className=" font-thin text-gray-400 text-[12px]">
              view all 650 comments
            </label>
            <label className=" font-light text-gray-400">
              {" "}
              Add a Comment.....
            </label>
          </div>

          <div className="h-[1px] w-[100%] mt-4 bg-gray-500"></div>
        </div>
      </div>

     <Suggested selfdata={selfData} AlluserData={allUserData}/>

    </div>
    
  )
}

export default Home