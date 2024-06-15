import React from 'react'

function MainSection() {
  return (
    <section>
      <p className='font-regular text-grey-800 pb-4'>
        A product designer and maker in love with building and shipping products that provide value.
      </p>
      <p className='font-regular text-grey-800 pb-14'>
        Currently, I’m leading design practice at
        <span className='group'>
          <span>&nbsp;</span>
          <span className='border-b-2 border-grey-300 hover:border-grey-800 font-medium'>Superbright</span>
          <span className='text-grey-400 group-hover:text-grey-800 font-medium'>&#x2197;</span>
        </span> & <span className='hidden md:inline-block'><br/></span>
        <span className='group'>
          <span>&nbsp;</span>
          <span className='border-b-2 border-grey-300 hover:border-grey-800 font-medium'>Vortic</span>
          <span className='text-grey-400 group-hover:text-grey-800 font-medium'>&#x2197;</span>
        </span> focused on spatial & immersive experiences.
      </p>
      <p className='font-regular text-grey-800'>
        In my free time, 
        <span className='font-medium'> I support early stage founders in <span className='border-b-2 border-grey-300 hover:border-grey-800'>bringing their visions to life.</span></span>
        <span className="relative inline-flex h-3 w-3 mx-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-available opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-available"></span>
          </span>
        <span className='font-medium text-green-available'>2 spots left</span>
      </p>
      <div className="border-t bg-gray-300 w-full my-14"></div>
    </section>
  )
}

export default MainSection