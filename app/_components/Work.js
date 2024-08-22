import React from 'react'
import { ImageIcon } from './icons/ImageIcon'
import Link from 'next/link'

function Work() {

  const data = [
    {text: 'Get your lifetime health plan for <span className="text-black font-semibold">Rs.999/month</span> or <span className="text-black font-semibold">Rs.9999/year</span>'},
    {text: 'Complete your health assessment and book your blood test'},
    {text: 'Get your health evaluation and personalised diet, supplements and lifestyle plan in 3-days'},
  ]

  return (
    <div className="bg-white py-10">
        <h3 className="mx-auto text-primary text-xl text-center max-w-xl font-semibold mb-8">Join the <span className="text-black font-extrabold">20,000+ people</span> who successfully reversed diseases by finding them in their early stages.</h3>
        <div className="px-5 md:px-8 lg:px-14">
          <div className="bg-secondary rounded-3xl p-6">
            <h5 className="text-primary text-sm uppercase mb-2">What Happens Next?</h5>
            <h3 className="text-black text-3xl font-bold mb-6">How eGenome Works?</h3>

            <div className="grid grid-cols-4">
              <div className="col-span-3 flex gap-4 mb-8">
                {/* {data?.map((item, index) => ( */}
                  <div className="px-4 py-2 bg-white">
                    <div className="bg-secondary h-20 w-20"></div>
                    <p className="text-black py-4 text-sm">Get your lifetime health plan for <span className="font-bold">Rs.999/month</span> or <span className="font-bold">Rs.9999/year</span></p>
                    <Link href='#' className="font-semibold underline">Get started here</Link>
                  </div>

                  <div className="px-4 py-2 bg-white">
                    <div className="bg-secondary h-20 w-20"></div>
                    <p className="text-black py-4 text-sm">Complete your health assessment and book your blood test</p>
                  </div>

                  <div className="px-4 py-2 bg-white">
                    <div className="bg-secondary h-20 w-20"></div>
                    <p className="py-4 text-sm">Get your health evaluation and personalised diet, supplements and lifestyle plan in <span className="font-bold">3-days</span></p>
                  </div>
                {/* ))} */}
              </div>
              <div className="col-span-1 flex justify-center">
                <ImageIcon/>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Work