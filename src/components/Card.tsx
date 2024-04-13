import React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

type CardProps = {
  className?: string,
  title: string,
  icon: string,
  description: string,
  handleClick?: () => void
}
const Card = ({ title, icon, description, className, handleClick }: CardProps) => {
  return (
    <div className={cn('px-4 py-6 flex flex-col justify-between w-full xl:max-w-[320px] min-h-[260px] rounded-[14px] cursor-pointer', className)} onClick={handleClick}>
      <div className='flex-center size-12 rounded-[10px] bg-white/10'>
        <Image
          src={icon}
          alt="icon"
          width={27}
          height={27}
        />
      </div>
      <div className='flex flex-col gap-2'>
        <h1 className='text-2xl font-bold'>{title}</h1>
        <p className='text-lg font-normal'>{description}</p>
      </div>
    </div>
  )
}

export default Card
