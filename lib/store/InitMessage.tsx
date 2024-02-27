"use client"

import { User } from '@supabase/supabase-js'
import React, { useEffect, useRef } from 'react'
import { useUser } from './user'
import { Imessage, useMessage } from './messages'

export default function InitMessage({messages}:{messages:Imessage[]}) {

  const initState = useRef(false)

  useEffect(()=>{
    if(!initState.current){
      useMessage.setState({messages})
    }
    initState.current = true;

  },[])

  return (
    <>
    
    </>
  )
}
