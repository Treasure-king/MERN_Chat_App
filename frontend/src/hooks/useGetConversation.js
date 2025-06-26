import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const useGetConversation = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false)
    const [conversations, setConversations] = useState([])

    useEffect(() => {
        const getConversations = async () => {
            setLoading(true)
            try {
                const res = await fetch('/api/users', {
                    method: 'GET',
                    credentials: 'include', // 🔥 This tells browser to send cookies (like jwt)
                });

                const data = await res.json()

                if (data.error) {
                    throw new Error(data.error)
                }
                setConversations(data)

            } catch (error) {
                console.log("error:- ", error.message)
            }
            finally {
                setLoading(false)
            }
        }

        getConversations();
    }, [])

    return { loading, conversations }
}

export default useGetConversation