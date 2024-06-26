import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Search({ showSearch }) {
  const navigate = useNavigate()
    useEffect(()=>{getUserDeatils()}, [])
  const [search, setSearch] = useState("");
  const [userDetail, setUserDetail] = useState([])
  
  const getUserDeatils = ()=>{
    axios.get("http://localhost:5001/api/userdetail").then((res)=>setUserDetail(res.data.data))

  }
  return (
    <div
      style={{ left: showSearch == true ? "5%" : "-50%" }}
      className="w-[35%] h-[100vh] transition-all  bg-white top-0 fixed rounded-r-[20px] flex ml-4 z-[100]  border-r-[2px] "
    >
      <div className="w-[1px] h-[100vh] bg-gray-400"></div>
      <div className=" w-[100%] flex flex-col pt-6 gap-8 ">
        <h1 className="text-[25px] px-4 font-semibold ">Search</h1>
        <div className="w-[80%] mx-4 h-[7vh] bg-gray-100  flex items-center justify-between px-2 rounded-lg">
          <input
            onChange={(e) => setSearch(e.target.value)}
            className=" outline-none  bg-gray-100"
            placeholder="Search"
          ></input>
          {/* <i class="fa fa-times-circle " aria-hidden="true"></i> */}
          <div className="w-[15px] h-[15px] rounded-full  bg-gray-300 flex justify-center items-center ">
            <label className="text-[12px] text-white">x</label>
          </div>
        </div>
        <div className="w-[100%] h-[1px] bg-gray-400"></div>
        <h1 className="text-[15px] font-semibold px-4">Recent</h1>

        <div className="w-[100%] h-[40vh] flex flex-col items-center gap-4">
            {search == "" ?
          <label className="text-[14px] text-gray-400 font-semibold">
            No recent searches.
          </label>:
        <>
        {userDetail.filter((i)=>i?.username?.includes(search) || i?.fullName?.includes(search)).map((i)=>
          <div onClick={()=> {localStorage.setItem("userdetail", JSON.stringify(i));navigate("/user-page"); window.location.reload()}} className="h-[8vh] w-[100%]  flex   justify-between px-4">
            <div className="w-[50%] h-[7vh] flex items-center gap-3 ">
              <img
                className="w-[45px] h-[45px] border-[2px] rounded-full "
                src={i.dp}
              ></img>
              <div className="flex flex-col ">
                <label className="font-semibold">{i.username}</label>
                <label className="text-gray-500 text-[12px]">
                  Suggested for you
                </label>
              </div>
            </div>
            <div className="w-[50%] h-[7vh] flex justify-end  items-center">
              <label className="text-[13px] text-blue-500 font-semibold hover:text-gray-500">
                Follow
              </label>
            </div>
          </div>)}
        </>
          }
        </div>
      </div>
    </div>
  );
}

export default Search;
