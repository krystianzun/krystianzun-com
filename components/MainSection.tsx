import React from "react";

function MainSection() {
  return (
    <section>
      <p className="font-regular text-grey-800 pb-4">
        A product designer and maker in love with building and shipping products
        that provide value.
      </p>
      <p className="font-regular text-grey-800">
        Currently, ...
        {/* Currently, i'm leading design practice at */}
        {/* <span className='group'> */}
        {/*   <span>&nbsp;</span> */}
        {/*   <span className='border-b-2 border-grey-300 hover:border-grey-800 font-medium'> */}
        {/*     <a href="https://www.superbright.me/" target="_blank" rel="noopener noreferrer">Superbright</a> */}
        {/*   </span> */}
        {/*   <span className='text-grey-400 group-hover:text-grey-800 font-medium'>&#x2197;</span> */}
        {/* </span> & <span className='hidden md:inline-block'><br/></span> */}
        {/* <span className='group'> */}
        {/*   <span className='border-b-2 border-grey-300 hover:border-grey-800 font-medium'> */}
        {/*     <a href="https://vortic.art/discover" target="_blank" rel="noopener noreferrer">Vortic</a> */}
        {/*   </span> */}
        {/*   <span className='text-grey-400 group-hover:text-grey-800 font-medium'>&#x2197;</span> */}
        {/* </span> focused on spatial & immersive experiences. */}
      </p>
      <hr className="w-full h-px bg-gray-300 border-0 my-14"></hr>
    </section>
  );
}

export default MainSection;
