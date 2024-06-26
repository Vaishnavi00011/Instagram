import React, { useState } from 'react'
import Sidebar from '../Components/Sidebar'


function Chatting() {
    const[Message,setMessage]=useState("")

  return (
    <div className='flex'>
         <Sidebar/>
        <div className='flex flex-col w-[33%] h-[100vh]  gap-4 border-r-[1px] px-4'>
            <div className='w-[100%] h-[10vh] flex justify-between px-6 pt-10 '>
                <div className='flex items-center gap-2 font-bold text-[20px]'>
                    <label>vaishu._01</label>
                    <i class="fa fa-angle-down" aria-hidden="true"></i>
                </div>
                <div className='flex items-center justify-center font-semibold text-[20px]'>
                    <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                </div>
            </div>

            <div className='flex justify-between w-[100%] px-6'>
                <div className=' text-[14px] font-bold'>
                <label>Messages</label>
                </div>
                <div className='text-[14px] font-semibold  text-gray-500'>Requests</div>
           </div>
           
            <div className='flex gap-2 w-[100%] h-[10vh] px-6 hover:bg-pink-50 cursor-pointer'>
                <img className='w-[60px] h-[60px] rounded-full' src='https://i.pinimg.com/originals/6d/ea/20/6dea20828878ba42e45976eab72637a1.jpg'></img>
                <div className='flex flex-col gap- justify-center'>
                    <label className='text-[15px]'>DEEPIKA</label>
                    <label className='text-[14px] text-gray-500'>hey. 1h</label>
                </div>
            </div>

            <div className='flex gap-2 w-[100%] h-[10vh] px-6  hover:bg-pink-50 cursor-pointer'>
                <img className='w-[60px] h-[60px] rounded-full' src='https://i.pinimg.com/originals/6d/ea/20/6dea20828878ba42e45976eab72637a1.jpg'></img>
                <div className='flex flex-col gap- justify-center'>
                    <label className='text-[15px]'>DEEPIKA</label>
                    <label className='text-[14px] text-gray-500'>hey. 1h</label>
                </div>
            </div>
       </div>

       <div className='w-[60%] h-[100vh] flex flex-col gap-4'>
        <div className='w-[100%] h-[vh] flex justify-center pt-5 border-b-[1px] pb-4 '>
            <div className='w-[50%] flex items-center  px-4 gap-3'>
                <img className='w-[50px] h-[50px] rounded-full' src='https://i.pinimg.com/originals/6d/ea/20/6dea20828878ba42e45976eab72637a1.jpg'></img> 
                <label className='text-[18px] font-semibold'>DEEPIKA</label>
             </div>
             <div className='flex w-[50%] gap-4 items-center justify-end px-4'>
             <i class="fa fa-phone text-[25px]" aria-hidden="true"></i>
             <i class="fa fa-video-camera text-[25px]" aria-hidden="true"></i>
             <i class="fa fa-info-circle text-[25px]" aria-hidden="true"></i>
             </div>

        </div>

        <div className='w-[100%] h-[40vh] flex   items-center justify-center flex-col gap-3'>
            <img  className='w-[100px] h-[100px] rounded-full' src='https://i.pinimg.com/originals/6d/ea/20/6dea20828878ba42e45976eab72637a1.jpg'></img>
            <div className='flex flex-col items-center'>
            <label className='text-[18px] font-semibold'>DEEPIKA</label>
            <label className='text-[13px] text-gray-500'>deepikaaa._ instagram</label>
            </div>
            <button className='w-[100px] h-[30px] rounded-lg bg-gray-200 text-[13px] font-semibold'>View profile</button>

        </div>

        <div className='w-[61%] h-[10vh] flex items-center fixed bottom-4 right-0  px-2'>
            <div className='w-[100%] h-[8vh] border border-black rounded-3xl flex justify-between items-center'>
                <div className='flex gap-1 px-2'>
                <i class="fa fa-smile-o text-[25px]" aria-hidden="true"></i>
                <input onClick={()=>setMessage()} className=' outline-none pl-2 text-[px] text-gray-500' placeholder='Message..'></input>
                </div>
              {Message == "" ?
                
                <div className='flex gap-4 items-center px-4 '>
                <i class="fa fa-microphone text-[25px]" aria-hidden="true"></i>
                <i class="fa fa-picture-o text-[25px]" aria-hidden="true"></i>
                <i class="fa fa-heart-o text-[25px]" aria-hidden="true"></i>
                </div>:

                <div className='flex  items-center px-4 '>
                <label className='text-[14px] text-blue-500'>Send</label>
                </div>}

            </div>

        </div>

       </div>

    </div>
  )
}

export default Chatting