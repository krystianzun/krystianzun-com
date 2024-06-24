import React from 'react'
import Link from 'next/link'
import CopyText from './CopyText'

const links = [
  { name: "Resume",
    link: "https://read.cv/krystianzun",
  },
  { name: "LinkedIn",
    link: "https://www.linkedin.com/in/krystianzun/",
  },
  { name: "Twitter",
    link: "https://x.com/krystianzun",
  },
  { name: "Instagram",
    link: "https://www.instagram.com/krystianzun/",
  },
  { name: "Newsletter",
    link: "https://krystianzun.substack.com/",
  },
]

function Footer() {
  return (
    <footer>
        <hr className='w-full h-px bg-gray-300 border-0 my-14'></hr>
        <h3 className='pb-4 text-grey-800 font-medium'>Links</h3>
        <div className='space-y-1'>
          {links.map((item, idx) => {
            return (
              <div key={idx}>
                <Link href={item.link} target="_blank">
                  <p className='text-grey-500 hover:text-grey-800'>{item.name}</p>
                </Link>
              </div>
            )
          })}
        </div>
        <div className='text-grey-500 hover:text-grey-800 cursor-pointer inline-block mt-1'>
          <CopyText 
            text="krystian.zun@gmail.com"
            displayText='krystian.zun@gmail.com'
            hoverMessage='Click to copy'
          />
        </div>
        <div className='text-grey-500 mt-14'>©2024 Krystian Zun, London & New York </div>
    </footer>
  )
}

export default Footer