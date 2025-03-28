import axios from 'axios'
import React from 'react'

function UnFollow({selfData, userData}) {
    const unFollowFn=()=>{
        const selfObj = {
            following: selfData.following.filter((i)=> i != userData.username)
        }
        axios.put("http://localhost:5001/api/userdetail/" + selfData._id, selfObj)
        const userObj = {
            follower: userData.follower.filter((i)=>i != selfData.username)
        }
        axios.put("http://localhost:5001/api/userdetail/" + userData._id, userObj).then(()=>window.location.reload())

    }
  return (
    <div onClick={()=>unFollowFn()}>UnFollow</div>
  )
}

export default UnFollow