"use client"
import { StreamVideo, StreamVideoClient } from '@stream-io/video-react-sdk';
import { ReactNode, useEffect, useState } from 'react';
import { useUser } from '@clerk/nextjs';
import tokenProvider from '@/actions/stream.actions';
import Loader from '@/components/Loader';

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;

const StreamVideoProvider = ({ children }: { children: ReactNode }) => {
  const [videoClient, setVideoClient] = useState<StreamVideoClient>();
  const [loading, setLoading] = useState(true);
  const { user, isLoaded } = useUser();
  useEffect(() => {
    if (isLoaded && user) {
      if (!apiKey) {
        throw new Error("Stream API key missing!!");
      }

      const client = new StreamVideoClient({
        apiKey,
        user: {
          id: user?.id,
          name: user?.firstName || user?.id,
          image: user?.imageUrl,
        },
        tokenProvider,
      });

      setVideoClient(client);
      setLoading(false);
    }
  }, [isLoaded, user]);

  //
  // if (loading) {
  //   return <Loader />;
  // }
  //
  if (!videoClient) {
    return <Loader />;
  }

  return (
    <>
      {loading && <Loader />}
      {!loading && user && <StreamVideo client={videoClient}>{children}</StreamVideo>}
    </>
  );
};

export default StreamVideoProvider;
