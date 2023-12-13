import React from 'react'

const SendPost = () => {
  return (
   

      <div className="w-[568px] h-[305px] relative bg-black border border-white">
        <div className='flex flex-col p-5'>
          <div className='flex'>
        <img className="relative right-3 bottom-2 w-auto h-[1rem] overflow-hidden object-cover" alt="" src="https://cdn.discordapp.com/attachments/1177493315898314792/1184480958360076439/image.png?ex=658c20db&is=6579abdb&hm=c246e426d10817641944ad7b6a197d1f2f68d8b0c82aced7a97222e7e40e0f5e&" />

        <div className='flex mx-4 gap-2'>
        <img className="relative w-auto h-[1.25rem] overflow-hidden object-cover" alt="" src="https://cdn.discordapp.com/attachments/1177493315898314792/1184481130406228049/image.png?ex=658c2104&is=6579ac04&hm=e7da38a681b91ddcaf6fec69ffad38fe4bfe2bc5e7bb2735375fc069291ed0ff&" />
        <div className="relative text-[1.13rem] font-medium font-inter text-cornflowerblue text-left">Public Post</div>
        </div>

        <div className='flex gap-2'>
        <img className="relative w-auto h-[1.45rem] overflow-hidden object-cover" alt="" src="https://cdn.discordapp.com/attachments/1177493315898314792/1184481202229485588/image.png?ex=658c2115&is=6579ac15&hm=96f2b83803098efc8b550054e17ac6b244c78e30218c7e0101ead45dca7af191&" />
        <div className="relative text-[1.13rem] font-medium font-inter text-cornflowerblue text-left">Private Post</div>
        </div>
        </div>

        <div className='flex mt-5 ml-3 gap-4 h-[200px] border-b-2 border-gray-100 border-solid'>
          <div>
            <img className='relative rounded-full w-auto h-[2.29rem] object-cover' src="https://cdn.discordapp.com/attachments/1177492390949441610/1184455231728255027/image_32.png?ex=658c08e5&is=657993e5&hm=2515c1925ba753fa5f16fa244df6dc3b9a01cbb1b5531b473b25d6c7c188c622&" alt="" />
          </div>

          <div className='w-[70%]'>
            <textarea style={{'height': 'calc(100% - 1rem)','scrollbar-width': 'none','-ms-overflow-style': 'none'}}  className='overflow-hidden resize-none appearance-none  leading-tight focus:outline-none focus:shadow-outline bg-transparent outline-none text-white h-[200pxpx]  w-full' type="text" placeholder="What is happening?"/>
          </div>

        </div>
        
        </div>
        

      </div>
    
  )
}

export default SendPost
