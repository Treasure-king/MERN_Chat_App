import React from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import { TiMessages } from 'react-icons/ti'
import useConversation from '../../zustand/useConversation'
import { useAuthContext } from '../../context/AuthContext'
import { IoArrowBackSharp } from 'react-icons/io5'

const MessageContainer = () => {
  const { selectConversations, setSelectConversations } = useConversation()

  if (!selectConversations) {
    return (
      <div className="hidden md:flex flex-1">
        <NoChatSelected />
      </div>
    )
  }

  return (
    <div className="flex flex-col flex-1 md:w-[450px]">
      {/* Back button on mobile */}
      <div className="flex items-center gap-2 bg-slate-500 px-4 py-2 mb-2 md:hidden">
        <button onClick={() => setSelectConversations(null)} className="text-white">
          <IoArrowBackSharp size={24} />
        </button>
        <span className="label-text text-white">To:</span>{" "}
        <span className="text-gray-900 font-bold">{selectConversations.fullName}</span>
      </div>

      {/* Top bar on desktop */}
      <div className="bg-slate-500 px-4 py-2 mb-2 hidden md:block">
        <span className="label-text text-white">To:</span>{" "}
        <span className="text-gray-900 font-bold">{selectConversations.fullName}</span>
      </div>

      <Messages />
      <MessageInput />
    </div>
  )
}

export default MessageContainer

const NoChatSelected = () => {
  const { authUser } = useAuthContext()
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome 😊 {authUser.fullName} ❄️</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  )
}
