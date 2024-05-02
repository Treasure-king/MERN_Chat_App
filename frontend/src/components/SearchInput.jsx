import React, { useState } from 'react'
import {IoSearchSharp} from 'react-icons/io5'
import useConversation from '../zustand/useConversation'
import useGetConversation from '../hooks/useGetConversation'

const SearchInput = () => {

  const [search, setSearch] = useState()
  const {setSelectConversations} = useConversation()
  const {conversations} = useGetConversation()

  const handleSubmit = (e)=>{
    e.preventDefault()
    if(!search) return
    if(search.length < 3){
      return alert("Serach must be atleast 3 characters long!!!")
    }
    
    const conversation = conversations.find((c)=>c.fullName.toLowerCase().includes(search.toLowerCase()))

    if(conversation){
      setSelectConversations(conversation)
      setSearch('')
    }else{
      alert("the username doesn't exist")
    }
  }

  return (
    <form onSubmit={handleSubmit} className='flex items-center gap-2'>
        <input type="text" placeholder='Search' className='input input-bordered rounded-full' 
        value={search}
        onChange={(e)=>setSearch(e.target.value)}/>
        <button type='submit' className='btn btn-circle bg-sky-400 text-white'>
            <IoSearchSharp className='w-6 h-6 outline-none'/>
        </button>
    </form>
  )
}

export default SearchInput;