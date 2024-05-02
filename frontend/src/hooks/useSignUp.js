import React,{useState} from 'react'
import { useAuthContext } from '../context/AuthContext'


const useSignUp = () => {
    const [loading, setLoading] = useState(false)
    const {setAuthUser}=useAuthContext()

    const signup = async({fullName,username,password,confirmPassword,gender})=>{
        const success = handleInputErrors({fullName,username,password,confirmPassword,gender})

        if(!success){
            return;
        }

        setLoading(true)


        try {
            const res=await fetch("/api/auth/signup",{
                method:"POST",
                headers:{ "Content-Type":" application/json"},
                body:JSON.stringify({fullName,username,password,confirmPassword,gender})
            })

            const data = await res.json()
            if(data.error){
                throw new Error(data.error)
            }

            localStorage.setItem("chat-user",JSON.stringify(data))
            setAuthUser(data)

        } catch (error) {
            console.log('error: ',error.message)
        }finally{
            setLoading(false)
        }
    }
    return{loading,signup}
}

export default useSignUp

function handleInputErrors({fullName,username,password,confirmPassword,gender}){
    if(!fullName || !username || !password || !confirmPassword || !gender){
        alert('please fill in all fields')
        return false
    } 

    if(password !== confirmPassword){
        alert('password not match')
        return false
    }
    if(password.length<6){
        alert('password should be 6 characters long')
        return false
    }

    return true
}