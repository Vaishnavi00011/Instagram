import React from 'react'
import Sidebar from '../Components/Sidebar'

function Editprofile() {
  return (
    <div className='flex '>
        <Sidebar></Sidebar>

        
        <div className='h-[150vh] w-[26%]  bg-white border-r-2 flex flex-col gap-5 px-6 pt-10 overflow-scroll   '>
            <h1 className='text-[20px] font-bold px-4'>Settings</h1>

            <div className='shadow flex flex-col w-[100%] h-[vh] bg-white hover:bg-gray-300 rounded-xl gap-1 px-4 pt-2 pb-4'>
                <div className='flex gap-1 items-center '>
                <i class="fa fa-skyatlas text-[blue] font-semibold" aria-hidden="true"></i>
                <h1 className='text-[18px] font-semibold'> Meta</h1>
               </div>

                <label className='text-[16px] font-bold'>Account Center</label>
                <p className='text-[12px] text-gray-500 w-[110%]'>Manage your connected experience and account setting across meta technologies.</p>

                <div className='flex flex-col gap-[10px] pt-2'>
                <div className='flex gap-[15px] items-center text-gray-500'>
                <i class="fa fa-user-o text-[15px]" aria-hidden="true"></i>
                <label className='text-[12px]'>Personal details </label>
                </div>
                  

                <div className='flex gap-[15px] items-center text-gray-500'>
                <i class="fa fa-unlock-alt text-[15px]" aria-hidden="true"></i>
                <label className='text-[12px] pl-1'>Password and security</label>
                </div>

                <div className='flex gap-[15px] items-center text-gray-500'>
                <i class="fa fa-newspaper-o text-[15px]" aria-hidden="true"></i>
                 <label className='text-[12px] '>Ad prefrences </label>
                </div>
                </div>
                <label className='text-[12px] text-blue-500 pt-2 font-semibold'>See more in Accounts Center</label>
            </div>

            <div className='w-[100%] h-[30vh] flex flex-col gap-2 pt-2 cursor-pointer  px-2'>
                <h1 className='text-[13px] text-gray-400 '>How you use Instagram</h1>
                <div className='w-[100%]'>
                <div className='w-[100%] h-[8vh] bg-gray-300 rounded-lg cursor-pointer hover:bg-gray-400 flex items-center pl-2 gap-2'>
                <i class="fa fa-user-circle-o text-[22px]" aria-hidden="true"></i>
                <label className='text-[14px] text-gray-600'>Edit profile</label>

                </div>
                <div className='w-[100%] h-[8vh] rounded-lg cursor-pointer hover:bg-gray-300 pl-2 flex items-center gap-2'>
                <i class="fa fa-bell-o text-[22px]" aria-hidden="true"></i>
                <label className='text-[14px]'>Notifiactions</label>

                </div>
                </div>

            </div>

            <div className='w-[100%] h-[30vh]   flex flex-col gap-4 pb-4 cursor-pointer  px-2'>
                <h1 className='text-[13px] text-gray-400 '>What you see</h1>
                <div className='w-[100%]'>
                <div className='w-[100%] h-[8vh] rounded-lg cursor-pointer hover:bg-gray-400 flex items-center pl-2 gap-2'>
                <i class="fa fa-bell-slash-o text-[22px]" aria-hidden="true"></i>
               <label className='text-[14px] text-gray-600'>Muted Accounts</label> 
                </div>
                <div className='w-[100%] h-[8vh] rounded-lg  cursor-pointer hover:bg-gray-300 pl-2 flex items-center gap-2'>
                <i class="fa fa-heart-o text-[22px]" aria-hidden="true"></i>
                <label className='text-[14px]  text-gray-600'>Like and share counts </label>
               </div>
            </div>

            </div>

            <div className='w-[100%] h-[40vh] flex flex-col gap-4  bg-[] cursor-pointer  px-2'>
                <h1 className='text-[13px] text-gray-400 '>Who can see your content</h1>
                <div className='w-[100%]'>
                <div className='w-[100%] h-[8vh] rounded-lg cursor-pointer hover:bg-gray-400 flex items-center pl-2 gap-2'>
                <i class="fa fa-lock text-[22px]" aria-hidden="true"></i>
               <label className='text-[14px] text-gray-600'>Account privacy</label> 
               </div>

                <div className='w-[100%] h-[8vh] rounded-lg  cursor-pointer hover:bg-gray-300 pl-2 flex items-center gap-2'>
                <i class="fa fa-star text-[22px]" aria-hidden="true"></i>
                <label className='text-[14px]  text-gray-600'>Close friends </label>
                </div>

                <div className='w-[100%] h-[8vh] rounded-lg  cursor-pointer hover:bg-gray-300 pl-2 flex items-center gap-2'>
                <i class="fa fa-ban text-[22px]" aria-hidden="true"></i>
               <label className='text-[14px]  text-gray-600'>blocked </label>
               </div>
               
                <div className='w-[100%] h-[8vh] rounded-lg  cursor-pointer hover:bg-gray-300 pl-2 flex items-center gap-2'>
                <i class="fa fa-ban text-[22px]" aria-hidden="true"></i>
                <label className='text-[14px]  text-gray-600'>Hide story and live</label>
                </div>
               

                </div>

            </div>

            <div className='w-[100%] h-[70vh]  flex flex-col gap-4  cursor-pointer   px-2'>
                <h1 className='text-[13px] text-gray-400 '>How others can intrect with you</h1>
                <div className='w-[100%]'>
                <div className='w-[100%] h-[8vh] rounded-lg cursor-pointer hover:bg-gray-400 flex items-center pl-2 gap-2'>
                <i class="fa fa-commenting-o text-[22px]" aria-hidden="true"></i>
               <label className='text-[14px] text-gray-600'>Message and story replies</label> 
               </div>

                <div className='w-[100%] h-[8vh] rounded-lg  cursor-pointer hover:bg-gray-300 pl-2 flex items-center gap-2'>
                <i class="fa fa-adn text-[22px]" aria-hidden="true"></i>
                <label className='text-[14px]  text-gray-600'>Tags and menstions </label>
                </div>

                <div className='w-[100%] h-[8vh] rounded-lg  cursor-pointer hover:bg-gray-300 pl-2 flex items-center gap-2'>
                <i class="fa fa-comment-o text-[22px]" aria-hidden="true"></i>
               <label className='text-[14px]  text-gray-600'>comments </label>
               </div>
               
                <div className='w-[100%] h-[8vh] rounded-lg  cursor-pointer hover:bg-gray-300 pl-2 flex items-center gap-2'>
                <i class="fa fa-share-square-o text-[22px]" aria-hidden="true"></i>
                <label className='text-[14px]  text-gray-600'>Sharing and remixes</label>
                </div>

                <div className='w-[100%] h-[8vh] rounded-lg  cursor-pointer hover:bg-gray-300 pl-2 flex items-center gap-2'>
                <i class="fa fa-user-times" aria-hidden="true"></i>
                <label className='text-[14px]  text-gray-600'>Restricted accounts</label>
                </div>

                <div className='w-[100%] h-[8vh] rounded-lg  cursor-pointer hover:bg-gray-300 pl-2 flex items-center gap-2'>
                <i class="fa fa-ban text-[22px]" aria-hidden="true"></i>
                <label className='text-[14px]  text-gray-600'>Hidden Words</label>
                </div>
               

                </div>

            </div>

            <div className='w-[100%] h-[70vh]  flex flex-col gap-4  cursor-pointer   px-2'>
                <h1 className='text-[13px] text-gray-400 '>You app and media </h1>
                <div className='w-[100%]'>
                <div className='w-[100%] h-[8vh] rounded-lg cursor-pointer hover:bg-gray-400 flex items-center pl-2 gap-2'>
                <i class="fa fa-download text-[22px]" aria-hidden="true"></i>
                <label className='text-[14px] text-gray-600'>Archiving and downloading</label> 
               </div>

                <div className='w-[100%] h-[8vh] rounded-lg  cursor-pointer hover:bg-gray-300 pl-2 flex items-center gap-2'>
                <i class="fa fa-language text-[22px]" aria-hidden="true"></i>
                <label className='text-[14px]  text-gray-600'> Language </label>
                </div>

                <div className='w-[100%] h-[8vh] rounded-lg  cursor-pointer hover:bg-gray-300 pl-2 flex items-center gap-2'>
                <i class="fa fa-desktop text-[22px]" aria-hidden="true"></i>
               <label className='text-[14px]  text-gray-600'>Website permissions </label>
               </div>
               </div>

            </div> 

             <div className='w-[100%] h-[70vh]  flex flex-col gap-4  cursor-pointer   px-2'>
                <h1 className='text-[13px] text-gray-400 '>For families</h1>
                <div className='w-[100%]'>
                <div className='w-[100%] h-[8vh] rounded-lg cursor-pointer hover:bg-gray-400 flex items-center pl-2 gap-2'>
                <i class="fa fa-users text-[22px]" aria-hidden="true"></i>

               <label className='text-[14px] text-gray-600'>Supervision</label> 
               </div>

               

                
                </div>

            </div>

             <div className='w-[100%] h-[70vh]  flex flex-col gap-4  cursor-pointer   px-2'>
                <h1 className='text-[13px] text-gray-400 '>For professional</h1>
                <div className='w-[100%]'>
                <div className='w-[100%] h-[8vh] rounded-lg cursor-pointer hover:bg-gray-400 flex items-center pl-2 gap-2'>
              <i class="fa fa-bar-chart text-[22px]" aria-hidden="true"></i>
               <label className='text-[14px] text-gray-600'>Account type and tools</label> 
               </div>

               

                
                </div>

            </div>
              
              <div className='w-[100%] h-[70vh]  flex flex-col gap-4  cursor-pointer   px-2'>
                <h1 className='text-[13px] text-gray-400 '>More info and support</h1>
                <div className='w-[100%]'>
                <div className='w-[100%] h-[8vh] rounded-lg cursor-pointer hover:bg-gray-400 flex items-center pl-2 gap-2'>
             <i class="fa fa-life-ring text-[22px]" aria-hidden="true"></i>

               <label className='text-[14px] text-gray-600'>Help</label> 
               </div>

               <div className='w-[100%] h-[8vh] rounded-lg cursor-pointer hover:bg-gray-400 flex items-center pl-2 gap-2'>
               <i class="fa fa-user-o text-[22px]" aria-hidden="true"></i>
               <label className='text-[14px] text-gray-600'>Account Status</label> 
               </div>
            </div>

            </div>
 



        </div>
        
    </div>
  )
}

export default Editprofile