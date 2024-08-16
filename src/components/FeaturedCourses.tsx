'use client'
import courseData from '@/data/music_courses.json'
import { BackgroundGradient } from './ui/background-gradient'
import Link from 'next/link'
interface Course{
    id: number,
    title:string,
    description: string,
    isFeatured:boolean,
}
const FeaturedCourses = () => {
    const featuredCourses= courseData.courses.filter((course:Course)=> course.isFeatured)
  return (
    <div className='py-12 bg-gray-900'>
        <div>
            <div className="text-center">
                <h2 className='text-base text-teal-600 font-semibold tracking-wide uppercase'>FEATURED COURSES</h2>
                <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl'>Learn with the best!</p>
            </div>
        </div>
        <div className='mt-10'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center'>
                {featuredCourses.map((course:Course)=>(
                    <div key={course.id} className='flex justify-center'>
                        <BackgroundGradient className='flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm'>
                            <div className='p-4 sm:p-6 flex flex-col items-center text-center flex-grow'>
                            <p className='text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200'>{course.title}</p>
                            <p className='text-sm text-neutral-600 dark:text-neutral-400 flex-grow'>{course.description}</p>
                            </div>
                            <Link href={`/courses/$[id]}`} className='justify-center items-center text-center'>Learn More</Link>
                        </BackgroundGradient>
                     </div>
                ))}
            </div>
        </div>
        <div className='mt-20 text-center border-2 border-silver-400 rounded-lg p-4 max-w-max mx-auto'>
        <Link href={"/courses"}>
        View all courses
        </Link>
        </div>
    </div>
  )
}

export default FeaturedCourses
