"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Card from '@/components/Card'
import { useRouter } from 'next/navigation'
import MeetingModal from './MeetingModal'
import { useUser } from '@clerk/nextjs'
import { Call, useStreamVideoClient } from '@stream-io/video-react-sdk'
import { useToast } from "@/components/ui/use-toast"

const MeetingList = () => {
  const router = useRouter()
  const { toast } = useToast();
  const [meetingState, setMeetingState] = useState<"isJoiningMeeting" | "isSchedulingMeeting" | "isInstantMeeting" | undefined>();
  const [values, setValues] = useState({
    dateTime: new Date(),
    description: '',
    link: '',
  })
  const [callDetails, setCallDetails] = useState<Call>()

  const user = useUser();
  const client = useStreamVideoClient()
  const createMeeting = async () => {
    console.log("hola")
    if (!user || !client) { return }
    try {
      if (!values.dateTime) {
        toast({
          title: "Please select a date and time"
        })
        return
      }
      const id = crypto.randomUUID();
      const call = client.call('default', id);
      if (!call) { throw new Error('Failed to create the call') }

      const startsAt = values.dateTime.toISOString()
      const description = values.description || "Instant Meeting";
      await call.getOrCreate({
        data: {
          starts_at: startsAt,
          custom: {
            description: description
          }

        }
      })
      setCallDetails(call)
      if (!values.description) {
        router.push(`/meeting/${call.id}`)
      }
      toast({ title: "Meeting created" })

    } catch (error) {
      console.log(error)
      toast({
        variant: "destructive",
        title: "Failed to create meeting"
      })

    }
  }

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

      <MeetingModal
        isOpen={meetingState === 'isInstantMeeting'}
        onClose={() => setMeetingState(undefined)}
        className="text-center"
        title="Start an instant meetings"
        btnText="Create a meeting"
        handleClick={createMeeting}
      />
    </section>
  )
}

export default MeetingList
