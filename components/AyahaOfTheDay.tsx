import Link from 'next/link';
import React from 'react'
import { BsArrowRightShort, BsCheckAll } from "react-icons/bs";


const AyahaOfTheDay = () => {
  return (
    <div className="container w-full flex flex-col justify-items-center mx-auto   mt-20 p-4 bg-primary rounded-md">
							<div>
								<h3 className="text-sm text-center text-white text-opacity-50 font-semibold uppercase">
									Ayah of the day
								</h3>
								<p className="line-clamp-[8] mt-4 text-center text-white text-2xl sm:text-4xl">
                                قَالُوا۟ لَا تَوْجَلْ إِنَّا نُبَشِّرُكَ بِغُلَامٍ عَلِيمٍۢ
								</p>
							</div>
							<div className="w-full block text-sm text-primary-gray-3">
								<hr className="my-3" />
								<Link
									href='/read/surah'
									className="inline-flex items-center text-white [&:hover>svg]:ml-1"
								>
									Read Now <BsArrowRightShort size={20} />
								</Link>
							</div>
						</div>
  )
}

export default AyahaOfTheDay