"use client"
import { useUser } from '@clerk/nextjs'
import { StreamCall, StreamTheme } from '@stream-io/video-react-sdk'
import { useCallById } from '@/app/hooks/useCallById'
import Loader from '@/components/Loader'
import React, { useCallback, useState } from 'react'
import MeetingSetup from '@/components/MeetingSetup'

const Meeting = ({ params }: { params: { id: string } }) => {
  const { isLoaded, user } = useUser()
  const [isSetupComplete, setisSetupComplete] = useState(false)
  const { call, isCallLoading } = useCallById(params.id)
  console.log("Here is call value in meeting/[id]/page.tsx", call)

  if (!isLoaded) return <Loader />
  return (
    <main className='h-screen w-full'>
      <StreamCall call={call}>
        <StreamTheme>
          {!isSetupComplete ? (<MeetingSetup />) : ('Meeting Room')}
        </StreamTheme>
      </StreamCall>

    </main>
  )
}

export default Meeting
