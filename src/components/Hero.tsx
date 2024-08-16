import React from 'react'
import Link from 'next/link'

const HeroSection = () => {
  return (
    <div className='h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0'>
        <div className='p-4 relative z-10 w-full text-center'>
            <h1 className ="text-5xl md:text-7xl font-extrabold text-gray-900 bg-gradient-to-r from-white via-white to-white bg-clip-text text-transparent text-center mb-6 leading-tight">MASTER THE ART OF MUSIC</h1>
            <p className='flex flex-col items-center justify-center text-center p-6 rounded-lg shadow-lg max-w-4xl mx-auto'>Welcome to Melody Mastery, your ultimate destination for learning music online! Whether you're a budding musician or an experienced artist, our courses offer expert guidance and interactive lessons to help you master your craft. Explore a diverse range of topics, from music theory to instrument techniques, and transform your passion into proficiency. Join our community and start your musical journey today!</p>
            <div className="mt-4">
                <Link href={"/courses"}>
                Explore Courses
                </Link>
            </div>
        </div>
    </div>
  )
}

export default HeroSection
