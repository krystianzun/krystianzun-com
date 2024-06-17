import React from 'react'

function ProjectsSection() {
  return (
    <section>
         <h1 className='pb-4 text-grey-800 font-medium'>Recently,</h1>
        <div className='pb-8'>
            <h1 className='group text-grey-800'>
                <span className='border-b-2 border-grey-300 hover:border-grey-800 font-medium'>
                    <a href="https://krystianzun.gumroad.com/l/xrdesignroadmap" target="_blank" rel="noopener noreferrer">XR Design Learning Roadmap</a>
                </span>
                <span className='text-grey-400 group-hover:text-grey-800 font-medium'>&#x2197;</span>
            </h1>
            <p className='text-grey-500'>Step-by-step, comprehensive guide to all essential skills to design extended realities.</p>    
        </div>  
        <div className='pb-8'>
            <h1 className='group text-grey-800'>
                <span className='border-b-2 border-grey-300 hover:border-grey-800 font-medium'>
                    <a href="https://discord.com/invite/eUKt8mFqnb" target="_blank" rel="noopener noreferrer">Design Futures</a>
                </span>
                <span className='text-grey-400 group-hover:text-grey-800 font-medium'>&#x2197;</span>
            </h1>
            <p className='text-grey-500'>Community for all into XR, Design, 3D, AI and generally emerging and creative tech with weekly hang outs, world hopping sessions and themed discussions.</p>    
        </div> 
        <div className='pb-8'>
            <h1 className='group text-grey-800'>
                <span className='border-b-2 border-grey-300 hover:border-grey-800 font-medium'>
                    <a href="https://lu.ma/touchsomegrass" target="_blank" rel="noopener noreferrer">Touch Some Grass*</a>
                </span>
                <span className='text-grey-400 group-hover:text-grey-800 font-medium'>&#x2197;</span>
            </h1>
            <p className='text-grey-500'>Fun, informal meet-up where we chat about XR and creative tech in the great outdoors, immersed in the best reality (nature) ٩( ✩’ω`✩ )و</p>    
        </div> 
        <div className='pb-8 text-grey-800'>
            <p className='pb-4'>and 
                <span className='group text-grey-800'>
                    <span>&nbsp;</span>
                    <span className='border-b-2 border-grey-300 hover:border-grey-800 font-medium'>
                        <a href="https://krystianzun.substack.com/" target="_blank" rel="noopener noreferrer">subscribe to my newsletter</a>
                    </span>
                    <span className='text-grey-400 group-hover:text-grey-800 font-medium'>&#x2197;</span>
                </span> where I share my learnings, ideas and links to anything I've found interesting
            </p>
            <div>
                {/* 
                    place for input and button to subscribe 
                */} 
            </div>
        </div>
        <p className='text-grey-800'>I love meeting new people, feel free to drop me a line at
            <span className='group text-grey-800'>
                <span>&nbsp;</span>
                <span className='border-b-2 border-grey-300 hover:border-grey-800 font-medium'>krystian.zun@gmail.com</span>
                <span className='text-grey-400 group-hover:text-grey-800 font-medium'>&#x2197;</span>
            </span> *:･ﾟ
        </p>
        <div className="border-t bg-gray-300 w-full my-14"></div>
    </section>
  )
}

export default ProjectsSection