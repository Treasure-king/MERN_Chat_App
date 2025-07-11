import React from 'react'
import useConversation from '../zustand/useConversation'
import { useSocketContext } from '../context/SocketContext'

const Conversation = ({conversation,lastIdx,emoji}) => {

    const {selectConversations,setSelectConversations} = useConversation()
    const {onlineUsers} = useSocketContext()
    const isOnline = onlineUsers.includes(conversation._id)

    const isSelected = selectConversations?._id === conversation._id 
    
    return (
        <>
            <div className={` flex gap-2 items-center hover:bg-sky-500 p-2 py-1 rounded cursor-pointer ${isSelected ? "bg-sky-500":""} `}
            onClick={()=>setSelectConversations(conversation)}  >
                <div className={`avatar ${isOnline ? "online": ""}`}>
                    <div className='w-12 rounded-full'>
                        <img src={conversation.profilePic} alt="user avtar" />
                    </div>
                </div>

                <div className='flex flex-col flex-1'>
                    <div className='flex gap-3 justify-between'>
                        <p className='font-bold text-gray-400'>{conversation.fullName}</p>
                        <span className='text-xl'>{emoji}</span>
                    </div>
                </div>
            </div>
            {!lastIdx && <div className='divider my-0 py-0 h-1' />}
        </>
    )
}

export default Conversation