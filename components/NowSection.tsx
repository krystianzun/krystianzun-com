import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import illitMagnetic from '@/public/images/illit-magnetic.jpg';

function NowSection() {
  return (
    <section>
        <h3 className='pb-4 text-grey-800 font-medium'>Now,</h3>
        <p className='pb-4'>If not I&apos;m not designing, I like moving heavy weights, running and travelling (a lot, over 180 days last year).</p>
        <p className='pb-4 flex'>Listening to
            <Image src={illitMagnetic} alt="" width={24} height={24} className='mx-2 rounded'/>
             <span className='group text-grey-800'>
                <span className='border-b-2 border-grey-300 hover:border-grey-800'>
                    <a href="https://www.youtube.com/watch?v=Vk5-c_v4gMU" target="_blank" rel="noopener noreferrer">Magnetic - ILLIT</a>
                </span>
                <span className='text-grey-400 group-hover:text-grey-800 font-medium'>&#x2197;</span>
            </span> on repeat
        </p>
        <p className='pb-4 text-grey-500'>Reading
            <span className='group text-grey-800'>
                <span>&nbsp;</span>
                <span className='border-b-2 border-grey-300 hover:border-grey-800'>
                    <a href="https://www.goodreads.com/book/show/56447987-the-millionaire-fast-lane" target="_blank" rel="noopener noreferrer">The Millionaire Fastlane by MJ DeMarco</a>
                </span>
                <span className='text-grey-400 group-hover:text-grey-800 font-medium'>&#x2197;</span>
            </span>
        </p>
        <p className='pb-4 text-grey-500'>Preparing for a <span className='text-grey-800'>road trip around Croatia, Bosnia, and Montenegro</span></p>
    </section>
  )
}

export default NowSection