import { useEffect, useState } from "react"
import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk";

export const useCallById = (id: string | string[]) => {
  const [isCallLoading, setIsCallLoading] = useState(true);
  const [call, setCall] = useState<Call>();
  const client = useStreamVideoClient()
  useEffect(() => {
    if (!client) return;

    const loadCall = async () => {
      const { calls } = await client.queryCalls({
        filter_conditions: {
          id
        }
      })
      console.log("calls[0]: ", calls[0])
      if (calls.length > 0) setCall(calls[0]);
      setIsCallLoading(false)
    }
    loadCall();
    console.log("I am in useEffect")



  }, [client, id])

  console.log("call value: ", call)

  return { call, isCallLoading };
}
