import React,{useState} from 'react'

const SendPost = () => {
  const [activeDiv, setActiveDiv] = useState('1'); // State to track active div

  const handleDivToggle = (id) => {
    setActiveDiv(id); // Update active div based on clicked div
  };
  return (
   

      <div className="w-[568px] h-auto relative bg-black border border-white">
        <div className='flex flex-col p-5'>
          <div className='flex'>
        <img className="relative right-3 bottom-2 w-auto h-[1rem] overflow-hidden object-cover" alt="" src="https://cdn.discordapp.com/attachments/1177493315898314792/1184480958360076439/image.png?ex=658c20db&is=6579abdb&hm=c246e426d10817641944ad7b6a197d1f2f68d8b0c82aced7a97222e7e40e0f5e&" />

        <div id='1'
            className={`flex gap-2 ml-3 ${activeDiv === '1' ? 'border-b-2 border-cornflowerblue border-solid' : ''}`}
            onClick={() => handleDivToggle('1')} // Toggle function for div 1
          >
        <img className="relative w-auto h-[1.25rem] overflow-hidden object-cover" alt="" src="https://cdn.discordapp.com/attachments/1177493315898314792/1184481130406228049/image.png?ex=658c2104&is=6579ac04&hm=e7da38a681b91ddcaf6fec69ffad38fe4bfe2bc5e7bb2735375fc069291ed0ff&" />
        <div className="relative text-[1.13rem] font-medium font-inter text-cornflowerblue text-left">Public Post</div>
        </div>

        <div  id='2'
            className={`flex gap-2 ml-5 ${activeDiv === '2' ? 'border-b-2 border-cornflowerblue border-solid' : ''}`}
            onClick={() => handleDivToggle('2')} // Toggle function for div 2
         >
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
        <div className="relative rounded bg-darkslategray-200 box-border w-full h-[5.56rem] overflow-hidden text-left text-[0.88rem] text-gray font-inter border-[1px] border-solid border-[#374151]">
<input className="absolute bg-transparent outline-none text-white top-[0.81rem] left-[0.75rem]" placeholder='#dscoial #deso'/>
</div>
        <div className='flex w-full mt-4'>
          <div className='flex justify-start'>
            <img className='relative w-auto h-[1.63rem] overflow-hidden object-cover" alt="" src="ion:image-outline.png' src="https://cdn.discordapp.com/attachments/1177493315898314792/1184481280616828947/image.png?ex=658c2127&is=6579ac27&hm=addae38478352496e554b7490d7c8e7d720f7e167f9e9b91d9a9e39001d5550d&" alt="" />
          </div>
          <div className='flex-grow'></div> 
          <div className="relative flex justify-end rounded-[97px] bg-cornflowerblue box-border w-[81px] h-[2.06rem] overflow-hidden text-left text-[1.13rem] text-white font-inter border-t-[1px] border-solid border-lightskyblue border-r-[1px] border-l-[1px]">
<div className="absolute top-[0.38rem] left-[1.31rem] font-semibold">Post</div>
</div>

        </div>
        
        </div>
        

      </div>
    
  )
}

export default SendPost
