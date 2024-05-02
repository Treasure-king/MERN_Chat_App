import React from 'react'
import useConversation from '../../zustand/useConversation.js'
import { useAuthContext } from '../../context/AuthContext.jsx'
import { extractTime } from '../../utils/extractTime.js'

const Message = ({message}) => {

  const {authUser} = useAuthContext()
  const {selectConversations} = useConversation()
  const fromMe = message.senderId === authUser._id
  const formattedTime = extractTime(message.createdAt)
  const chatClass = fromMe ? "chat-end":"chat-start"
  const profilePic =  fromMe ? authUser.profilePic : selectConversations?.profilePic
  const bubbleBgColor = fromMe ? "bg-blue-500":""
  return (
    <div className={`chat ${chatClass}`}>
        <div className='chat-image avatar'>
            <div className='w-10 rounded-full'>
                <img src={profilePic} alt="" />
            </div>
        </div>
        <div className={`chat-bubble text-white ${bubbleBgColor}`}>{message.message}</div>
        <div className='chat-footer opacity-50 text-xs flex-1 gap-1 items-center text-white pb-4'>{formattedTime}</div>
    </div>
  )
}

export default Message