import React from 'react'

function MainSection() {
  return (
    <section>
      <div className='font-regular text-grey-800 pb-4'>
        A product designer and maker in love with building and shipping products that provide value.
      </div>
      <div className='font-regular text-grey-800 pb-14'>
        Currently, I’m leading design practice at <span className='border-b-2 border-grey-300 hover:border-grey-800 font-medium'>Superbright</span>&#x2197; & <span className='border-b-2 border-grey-300 hover:border-grey-800 font-medium'>Vortic</span>&#x2197; focused on spatial & immersive experiences.
      </div>
      <div className='font-regular text-grey-800'>
        In my free time, 
        <span className='font-medium'> I support early stage founders in <span className='border-b-2 border-grey-300 hover:border-grey-800'>bringing their visions to life.</span></span>
        <span className='font-medium text-green-available'> 2 spots left</span>
      </div>
    </section>

  )
}

export default MainSection