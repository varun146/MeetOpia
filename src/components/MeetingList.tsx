"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Card from '@/components/Card'
import { useRouter } from 'next/navigation'

const MeetingList = () => {
  const router = useRouter()
  const [meetingState, setMeetingState] = useState<"isJoiningMeeting" | "isSchedulingMeeting" | "isInstantMeeting" | undefined>();
  return (
    <section className='grid grid-cols-1 gap-3  md:grid-cols-2 xl:grid-cols-4'>
      <Card
        title='New Meeting'
        icon="/icons/add-meeting.svg"
        description='Start an instant meeting'
        className="bg-orange-600"
        handleClick={() => setMeetingState("isInstantMeeting")}
      />
      <Card
        title='Join Meeting'
        icon="/icons/join-meeting.svg"
        description='via invitation link'
        className='bg-purple-600'
        handleClick={() => setMeetingState("isJoiningMeeting")}
      />
      <Card
        title='Schedule Meeting'
        icon="/icons/schedule.svg"
        description='Plan your meeting'
        className='bg-green-600'
        handleClick={() => setMeetingState("isSchedulingMeeting")}
      />
      <Card
        title='Recordings'
        icon="/icons/recordings.svg"
        description='Start an instant meeting'
        className='bg-gray-500'
        handleClick={() => router.push("/recordings")}
      />

    </section>
  )
}

export default MeetingList
