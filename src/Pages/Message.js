import React from 'react'
import Sidebar from '../Components/Sidebar'
import { useNavigate } from 'react-router-dom'

function Message() {
    const navigate = useNavigate()
  return (
    <div className='flex '>
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
           
            <div onClick={()=> navigate("/chatting")} className='flex gap-2 w-[100%] h-[10vh] px-6 hover:bg-pink-50 cursor-pointer'>
                <img className='w-[60px] h-[60px] rounded-full' src='https://i.pinimg.com/originals/6d/ea/20/6dea20828878ba42e45976eab72637a1.jpg'></img>
                <div className='flex flex-col gap- justify-center'>
                    <label className='text-[15px]'>DEEPIKA</label>
                    <label className='text-[14px] text-gray-500'>hey. 1h</label>
                </div>
            </div>

            <div className='flex gap-2 w-[100%] h-[10vh] px-6  hover:bg-pink-50 cursor-pointer'>
                <img className='w-[60px] h-[60px] rounded-full' src='https://i.pinimg.com/originals/6d/ea/20/6dea20828878ba42e45976eab72637a1.jpg'></img>
                <div className='flex flex-col gap- justify-center'>
                    <label className='text-[15px]'>kunalzz</label>
                    <label className='text-[14px] text-gray-500'>hey. 1h</label>
                </div>
            </div>
       </div>

       <div className='w-[60%] h-[100vh] flex  items-center justify-center'>
        <div className='w-[50%] h-[40vh] flex flex-col items-center justify-center gap-3'>
            <div className='w-[100px] h-[100px] border-[3px] border-black rounded-full flex items-center justify-center'>
            <i class="fa fa-commenting-o text-[40px]" aria-hidden="true"></i>
            </div>
             <div className='flex flex-col  items-center justify-center'>
            <label className='text-[18px]'>Your messages</label>
           <label className='text-[14px] text-gray-500'>Send a message start a chat</label>
           </div>
           <button className='w-[130px] h-[35px] bg-blue-400 cursor-pointer text-white text-[14px] font-semibold rounded-lg'>Send message</button>


        </div>

</div>


    </div>
  )
}

export default Message