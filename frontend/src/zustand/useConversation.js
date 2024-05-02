import {create} from 'zustand'


const useConversation = create((set)=>({
    selectConversations:null,
    setSelectConversations:(selectConversations)=>set({selectConversations}),
    messages:[],
    setMessages:(messages)=>set({messages}),
}))

export default useConversation;