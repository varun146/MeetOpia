"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { SidebarLinks } from '../../constants'
import { cn } from '@/lib/utils'

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { usePathname } from 'next/navigation'


const MobileNav = () => {
  const pathname = usePathname()
  return (
    <section className='w-full max-w-[264px]'>
      <Sheet>
        <SheetTrigger>
          <Image
            src="/icons/hamburger.svg"
            width={35}
            height={35}
            alt="menu"
            className='cursor-pointer sm:hidden'
          />
        </SheetTrigger>
        <SheetContent side="left" className='bg-dark-1 border-none '>
          <Link href="/" className="flex items-center gap-1 ">
            <Image
              src="/icons/logo.svg"
              width={32}
              height={32}
              alt='logo'
              className='max-sm:size-10'
            />
            <p className='text-white text-[26px] font-extrabold '>MeetOpia</p>
          </Link>
          <div className='flex h-[100vh-72px] flex-col  overflow-y-auto'>
            <section className='flex h-full flex-col gap-4 pt-16 text-white'>
              {SidebarLinks.map((link) => {
                const isActive = pathname === link.route
                return (
                  <SheetClose asChild>
                    <Link href={link.route} key={link.label} className={cn("flex gap-4 items-center p-4 rounded-lg", {
                      "bg-blue-1": isActive,
                    })}>
                      <Image
                        src={link.imageUrl}
                        alt={link.label}
                        width={24}
                        height={24}
                      />
                      <p className='font-semibold'>{link.label}</p>
                    </Link>
                  </SheetClose>
                )
              })}
            </section>
          </div>
        </SheetContent>
      </Sheet>

    </section>
  )
}

export default MobileNav
