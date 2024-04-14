import { VideoPreview } from '@stream-io/video-react-sdk'
import { useCall } from '@stream-io/video-react-sdk';
import React, { useEffect, useState } from 'react'

const MeetingSetup = () => {
  const [isMicAndCamToggleOn, setIsMicAndCamToggleOn] = useState(false);
  const call = useCall();
  if (!call) {
    throw new Error("useCall must only be called within StreamCall")
  }

  useEffect(() => {
    if (isMicAndCamToggleOn) {
      call?.camera.disable();
      call?.microphone.disable();
    } else {
      call?.camera.enable();
      call?.microphone.enable();
    }
  }, [call, call?.camera, call?.microphone])

  return (
    <div className='flex h-screen w-ful flex-col justify-center items-center gap-3 text-white'>
      <h1 className='text-2xl font-bold'>Setup</h1>
      <VideoPreview />
      <div className='flex h-16 items-center justify-center gap-3'></div>

    </div>
  )
}

export default MeetingSetup
