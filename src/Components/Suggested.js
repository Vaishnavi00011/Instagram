import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Follow from "../Functions/Follow";

function Suggested({selfdata,AlluserData}) {
  const navigate = useNavigate()
  useEffect(()=>{getAllUserData()},[])

  const[phone,setPhone] = useState('')
  const[password,setPassword] = useState("")
  const[selfData,setSelfData] = useState({})
  const getAllUserData = ()=>{
    axios.get("http://localhost:5001/api/userdetail").then((res)=>setSelfData(res.data.data.filter((i)=>i.username==localStorage.getItem("username"))[0]))
  }


  const loginCheck = ()=>{
    let user = AlluserData.filter((i)=> i.username == phone)
    if(user.length > 0){
     if(user[0].password==password){
      localStorage.setItem("username",phone)
      navigate("/home")
      window.location.reload()
     }else{
      alert("wrong password")
     }
    }else{
      alert("user not found")
    }
  }


 
 const[showswitch,setShowSwitch] = useState(false)



  return (
  
    <div className="h-[60vh] w-[25%] pt-[50px] flex flex-col gap-3">
      <div className="h-[7vh] w-[100%]  flex justify-between px-4">
        <div className="w-[50%] h-[8vh] flex items-center gap-2 ">
          <img
            className="w-[45px] h-[45px] border-[2px] rounded-full "
            src="https://th.bing.com/th/id/OIP.KNP4Tdw8p95XEqs5AMmCoAHaHa?pid=ImgDet&w=208&h=208&c=7&dpr=1.5"
          ></img>
          <div className="flex flex-col">
            <label className="font-semibold">
              {localStorage.getItem("username")}
            </label>
            <label className="text-gray-500 text-[14px]">VAISHNAVI</label>
          </div>
        </div>
        
        <div
         className="w-[50%] h-[7vh] flex justify-end  items-center">
          <label onClick={()=>setShowSwitch(true)} className="text-[14px] text-blue-600 font-semibold hover:text-gray-500 cursor-pointer">
            switch
          </label>
        </div>
      </div>
      <div className="w-[100%] pt-3 pb-3  px-4 flex justify-between items-center">
        <label className="font-semibold text-[13px] text-gray-500">
          Suggested for you
        </label>
        <label className="text-[13px]">See All</label>
      </div>
      {AlluserData.filter((i)=>i.username != localStorage.getItem('username') && !(i.follower.includes(localStorage.getItem("username")))).map((i) => (
        <div className="h-[8vh] w-[100%]  flex   justify-between px-4">
          <div className="w-[70%] h-[7vh] flex items-center gap-3 ">
            <img
              className="w-[45px] h-[45px] border-[2px] rounded-full "
              src={i.dp}
            ></img>
            <div className="flex flex-col ">
              <label className="font-semibold text-[14px]">{i.username}</label>
              <label className="text-gray-500 text-[12px]">
                Suggested for you
              </label>
            </div>
          </div>
          <div className="w-[30%] h-[7vh] flex justify-end  items-center">
            <label className="text-[12px] text-blue-500 font-semibold hover:text-gray-500">
              <Follow selfData={selfData} userData={i}></Follow>
            </label>
          </div>
        </div>
      ))}
      <div className="  pt-6 w-[95%]  text-[12px] font-semibold flex gap-1 flex-wrap pl-[20px]">
        <button className=" text-gray-300 hover:underline">About.</button>
        <button className=" text-gray-300 hover:underline">Help.</button>
        <button className=" text-gray-300 hover:underline">Press.</button>
        <button className=" text-gray-300 hover:underline">API.</button>
        <button className=" text-gray-300 hover:underline">Jobs.</button>
        <button className=" text-gray-300 hover:underline">Privacy.</button>
        <button className=" text-gray-300 hover:underline">Terms.</button>
        <button className=" text-gray-300 hover:underline">Locations.</button>
        <button className=" text-gray-300 hover:underline">Language.</button>
        <button className=" text-gray-300 hover:underline">
          Meta Verified
        </button>
      </div>
      <label className=" pt-2 text-[12px] font-semibold text-gray-300 pl-[20px]">
        © 2024 INSTAGRAM FROM META
      </label>

      {/* --------------------------------------------switch-div---------------------------------- */}
  
       {showswitch == true &&
             <div className="h-[100vh] w-[100%] top-0 left-0  flex justify-center items-center   fixed ">
        <div className="h-[100vh] w-[100%] bg-black opacity-35  fixed top-0 left-0 "></div>
        <div className="w-[34%] h-[65vh] z-10 relative bg-white rounded-lg ">
          <div className="w-[100%] flex justify-end p-4">
            <label onClick={()=>setShowSwitch(false)} className="text-[25px] font-semibold">x</label>
          </div>
          <div className="flex w-[100%] h-[10vh] items-center justify-center ">
           <h1 className="text-[30px] font-semibold self-center">Instagram</h1>
          </div> 

          <div className="w-[100%] flex flex-col gap-3 items-center pt-[30px]">
            <input onChange={(e)=> setPhone(e.target.value)} className="w-[65%] h-[6vh] pl-2 bg-gray-100 border border-gray-300 text-[14px] text-gray-400  " placeholder="Phone number,username,email"></input>
            <input onChange={(e)=> setPassword(e.target.value)} className="w-[65%] h-[6vh] pl-2 bg-gray-100 border border-gray-300 text-[14px]  text-gray-400  " placeholder="Password"></input>
            <div className="flex w-[65%] gap-2">
            <input type="checkbox"></input>

            <label className=" text-[13px] text-gray-500">Save login info</label>
            </div>
            <button onClick={()=>loginCheck()}
             className="w-[65%] h-[5vh] rounded-lg bg-blue-400 text-white" > Log In</button>
            <label className="text-[13px]">forgot password ?</label>
 

          </div>
        </div>
      </div>}

    </div>
  );
}

export default Suggested;
