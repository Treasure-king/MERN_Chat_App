import React, { useEffect, useState } from 'react'
import useConversation from '../zustand/useConversation.js'

const useGetMessages = () => {

    const [loading,setLoading] = useState(false)
    const {messages,setMessages,selectConversations} = useConversation()

    useEffect(()=>{
        const getmessages = async()=>{

            setLoading(true)
            try {
                const res = await fetch(`/api/messages/${selectConversations._id}`)
                
                const data = await res.json()
    
                if(data.error){
                    console.log("error")
                    throw new Error(data.error)
                }

                setMessages(data)
    
            } catch (error) {
                console.log("error:- ",error.message)
            }
            finally{
                setLoading(false)
            }
        }
    
        if(selectConversations?._id) getmessages()
    },[selectConversations?._id,setMessages])

    return {loading,messages}
}

export default useGetMessages