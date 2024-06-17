import React from 'react'

function NowSection() {
  return (
    <section>
        <h1 className='pb-4 text-grey-800 font-medium'>Now,</h1>
        <p className='pb-4'>If not I’m not designing, I like moving heavy weights, running and travelling (a lot, over 180 days last year).</p>
        <p className='pb-4'>Listening to
             <span className='group text-grey-800'>
                <span>&nbsp;</span>
                <span className='border-b-2 border-grey-300 hover:border-grey-800'>Magnetic - ILLIT (아일릿)</span>
                <span className='text-grey-400 group-hover:text-grey-800 font-medium'>&#x2197;</span>
            </span> on repeat
        </p>
        <p className='pb-4 text-grey-500'>Reading
            <span className='group text-grey-800'>
                <span>&nbsp;</span>
                <span className='border-b-2 border-grey-300 hover:border-grey-800'>The Millionaire Fastlane by MJ DeMarco</span>
                <span className='text-grey-400 group-hover:text-grey-800 font-medium'>&#x2197;</span>
            </span>
        </p>
        <p className='pb-4 text-grey-500'>Preparing for a <span className='text-grey-800'>road trip around Croatia, Bosnia and Herzegovina, and Montenegro</span></p>
    </section>
  )
}

export default NowSection