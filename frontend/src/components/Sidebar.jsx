import React from 'react'
import SearchInput from './SearchInput'
import Conversations from './Conversations'
import LogoutButton from './LogoutButton'
import useConversation from '../zustand/useConversation'

const Sidebar = () => {
  const { selectConversations } = useConversation()

  return (
    <div
      className={`border-r border-slate-500 p-4 flex flex-col 
      ${selectConversations ? 'hidden' : 'flex'} 
      md:flex md:[450px]`}
    >
      <SearchInput />
      <div className='divider px-3'></div>
      <Conversations />
      <LogoutButton />
    </div>
  )
}

export default Sidebar
