import React, { ReactNode } from 'react'
import Image from 'next/image'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"


interface ModalProps {
  isOpen: boolean,
  onClose: () => void,
  className?: string,
  children?: ReactNode,
  handleClick?: () => void,
  title: string,
  btnText?: string,
  img?: string,
  buttonIcon?: string
}


const MeetingModal = ({ isOpen, onClose, className, title, btnText, handleClick, img, children, buttonIcon }: ModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className='flex w-full max-w-[520px] flex-col gap-6 border-none bg-dark-1 text-white px-6 py-9'>
        <div className='flex flex-col gap-6'>
          {img && (
            <div className='flex items-center'>
              <Image
                src={img}
                alt="add-meeting"
              />
            </div>
          )}
          <h1 className='text-2xl font-bold'>{title}</h1>
          <button onClick={handleClick} className='bg-blue-500 w-full rounded-[10px] px-2 py-1 border-none focus:outline-none text-center'>Create a meeting</button>
        </div>
      </DialogContent>
    </Dialog>

  )
}

export default MeetingModal
