"use client"
import { useMessage } from '@/lib/store/messages'
import { useUser } from '@/lib/store/user'
import React from 'react'
import Message from './Message'
import { DeleteAlert, EditAlert } from './MessageAction'

export default function ListMessages() {

    const messages = useMessage((state)=>state.messages)

  return (
    <div className="flex-1 flex flex-col p-5 h-full overflow-y-auto">
    <div className="flex-1"></div>
    <div className="space-y-7">
    {
      messages && messages.map((item,i)=>(
        <Message key={i} message={item} />
      ))
    }
    </div>
    <DeleteAlert />
    <EditAlert />
    
  </div>
  )
}
