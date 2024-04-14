import { useEffect, useState } from "react"
import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk";

export const getCallById = (id: string | string[]) => {
  const [isCallLoading, setIsCallLoading] = useState(true);
  const [call, setCall] = useState<Call>();
  const client = useStreamVideoClient()
  console.log(client)
  useEffect(() => {

    if (!client) return;
    const loadCall = async () => {
      const { calls } = await client.queryCalls({
        filter_conditions: {
          id
        }
      })
      if (calls.length > 0) setCall(calls[0]);
      setIsCallLoading(false);
    }
    loadCall();
    console.log("I am in useEffect in hook")
  }, [client, id])

  return { call, isCallLoading };
}
