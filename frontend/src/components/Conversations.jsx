import React, { useEffect, useState } from 'react'
import Conversation from './Conversation'
import useGetConversation from '../hooks/useGetConversation'
import { getRandomEmoji } from '../utils/emojis'

const Conversations = () => {
  const { loading, conversations } = useGetConversation()
  const [emojiMap, setEmojiMap] = useState({})

  useEffect(() => {
    const map = {}
    conversations.forEach((c) => {
      if (!emojiMap[c._id]) {
        map[c._id] = getRandomEmoji()
      } else {
        map[c._id] = emojiMap[c._id]
      }
    })
    setEmojiMap(map)
  }, [conversations])

  return (
    <div className='flex flex-col py-2 overflow-auto'>
      {conversations.map((conversation, idx) => (
        <Conversation
          key={conversation._id}
          conversation={conversation}
          emoji={emojiMap[conversation._id]}
          lastIdx={idx === conversations.length - 1}
        />
      ))}
      {loading && <span className='loading loading-spinner'></span>}
    </div>
  )
}

export default Conversations
