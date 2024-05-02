import React, { useState } from 'react'
import useConversation from '../zustand/useConversation'

const useSendMessages = () => {

    const [loading,setLoading] = useState(false)
    const {messages,setMessages,selectConversations} = useConversation()

    const sendMessages = async(message)=>{
        setLoading(true)
        try {
            const res = await fetch(`/api/messages/send/${selectConversations._id}`,{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify({message})
            })

            const data = await res.json()

            if(data.error){
                throw new Error(data.error)
            }
            
            setMessages([...messages,data])

        } catch (error) {
            console.log("error:- ",error.message)
        }
        finally{
            setLoading(null)
        }
    }

    return {sendMessages,loading}

}

export default useSendMessages