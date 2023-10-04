import React from 'react'
import Button from './UI/Button'

const Community = () => {
  return (
    <div className='flex flex-col'>
    <h1 className=" mt-20 text-center sm:text-4xl text-2xl font-bold font-CinzelDecorative text-primary">
        Stay with us and <br />
         join our community
        </h1>
        <div className='flex items-center mt-10 mx-auto'>
        <Button
					text="Sign in"
					customStyles="bg-Secondary !text-white   shadow-sm"
					
				/>
        <Button
					text="Sign up"
					customStyles="border border-2 border-Secondary mx-5  shadow-sm"
					
				/>
        </div>
        </div>
  )
}

export default Community