'use client'

import { Button, Divider } from '@nextui-org/react'
import Link from 'next/link'
import React from 'react'
import {StarIcon} from "./icons/StarIcon";
import {ImageIcon} from "./icons/ImageIcon";


function Hero() {
  return (
    <div className="container">
        <div className="grid grid-cols-2 justify-center h-[400px] my-14">
            <div className="col-span-1 flex items-center justify-center">
                <div className="max-w-64">
                    <h3 className="text-black text-left text-3xl leading-10 font-semibold mb-1">One Health Plan For Life</h3>
                    <div className="flex items-center justify-center gap-1 mb-5">
                        <span className="flex">
                            <StarIcon/>
                            <StarIcon/>
                            <StarIcon/>
                            <StarIcon/>
                            <StarIcon/>
                        </span>
                        <p className="text-xs text-primary whitespace-nowrap">20K+ people in NCR Delhi trust us</p>
                    </div>
                    <div className="flex flex-col gap-2 w-fit">
                        <Button as={Link} href="#" variant="flat" className="bg-primary text-white rounded-3xl px-6">
                            Join Waitlist
                        </Button>
                        <Button as={Link} color="primary" href="#" variant="bordered" className="rounded-3xl px-6">
                            See A Sample Report
                        </Button>
                    </div>
                </div>
            </div>
            <div className="col-span-1 flex items-center justify-center">
                <ImageIcon />
            </div>
        </div>
        <div className="flex gap-2 w-fit mx-auto mb-4">
            <hr className="border-t-2 border-gray-400 w-10 my-4" />
            <hr className="border-t-2 border-primary w-10 my-4" />
        </div>
    </div>
  )
}

export default Hero