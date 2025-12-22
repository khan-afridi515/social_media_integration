import React from 'react'

const View = () => {
  return (
    <div className='px-4 pt-8 pb-12 w-full'>
      <div className='flex flex-col gap-6 w-full'>
      <div>
        <p>Content / <span className='font-bold'>Preview</span></p>
      </div>
      <div>
        <h2 className='text-xl font-bold'>Preview</h2>
      </div>
      <div className='flex flex-col gap-5 sm:w-[70%] w-[100%]'>
        <div className='flex flex-col gap-4 w-full'>
            <p className='text-sm font-bold'>Facebook</p>
            <div className='flex gap-3 w-full'>
                <div className='sm:w-[40%] w-[50%]'>
                    <img src="preview/Facebook.png" className="w-full h-45" alt="" />
                </div>
                <div className='lg:w-[40%] md:w-[50%] sm:w-[60%] w-[50%] mt-3'>
                    <p className='text-gray-500'>Facebook</p>
                    <p className='font-bold'>Excited to share our latest project! Check out the link bio for more details. #innovation #tech #newrelease</p>
                    <p className='text-gray-500'>123 likes 45 comments</p>
                </div>

            </div>
        </div>

        <div className='flex flex-col gap-4 w-full'>
            <p className='text-sm font-bold'>Instagram</p>
            <div className='flex gap-2 w-full'>
                <div className='sm:w-[40%] w-[50%]'>
                    <img src="preview/Instagram.png" className="w-full h-45" alt="" />
                </div>
                <div className='lg:w-[40%] md:w-[50%] sm:w-[60%] w-[50%] mt-3'>
                    <p className='text-gray-500'>Instagram</p>
                    <p className='font-bold'>Excited to share our latest project! Check out the link bio for more details. #innovation #tech #newrelease</p>
                    <p className='text-gray-500'>150 likes 40 comments</p>
                </div>

            </div>
        </div>


        <div className='flex flex-col gap-4 w-full'>
            <p className='text-sm font-bold'>LinkedIn</p>
            <div className='flex gap-2 w-full'>
                <div className='sm:w-[40%] w-[50%]'>
                    <img src="preview/linkedIn.png" className="w-full h-45" alt="" />
                </div>
                <div className='lg:w-[40%] md:w-[50%] sm:w-[60%] w-[50%] mt-3'>
                    <p className='text-gray-500'>LinkedIn</p>
                    <p className='font-bold'>Excited to share our latest project! Check out the link bio for more details. #innovation #tech #newrelease</p>
                    <p className='text-gray-500'>110 likes 60 comments</p>
                </div>

            </div>
        </div>

        <div className='flex flex-col gap-4 w-full'>
            <p className='text-sm font-bold'>Youtube</p>
            <div className='flex gap-2 w-full'>
                <div className='sm:w-[40%] w-[50%]'>
                    <img src="preview/youtube.png" className="w-full h-45" alt="" />
                </div>
                <div className='lg:w-[40%] md:w-[50%] sm:w-[60%] w-[50%] mt-3'>
                    <p className='text-gray-500'>Youtube</p>
                    <p className='font-bold'>Excited to share our latest project! Check out the link bio for more details. #innovation #tech #newrelease</p>
                    <p className='text-gray-500'>223 likes 70 comments</p>
                </div>

            </div>
        </div>
      </div>
      </div>
      
    </div>
  )
}

export default View
