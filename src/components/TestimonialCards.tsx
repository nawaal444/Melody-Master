'use client'
import React from 'react'
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
const MusicSchoolTestimonials = [
  {
    quote: "The best decision I've made for my musical journey was joining Melody Master. The instructors are truly passionate and helped me master the guitar in just a few months!",
    name: "Emily Summers",
    title: "Guitar Enthusiast",
  },
  {
    quote: "Melody Master has transformed the way I approach piano. The personalized lessons and supportive environment made learning fun and engaging.",
    name: "Michael Foster",
    title: "Aspiring Pianist",
  },
  {
    quote: "As a vocalist, finding the right training was crucial for me. The vocal coaches here are top-notch and have helped me expand my range and improve my technique.",
    name: "Sophia Grant",
    title: "Vocal Performer",
  },
  {
    quote: "I was always hesitant about learning music theory, but Melody Master made it easy and enjoyable. Now, I can compose my own songs with confidence!",
    name: "Liam Hunter",
    title: "Budding Composer",
  },
  {
    quote: "Melody Master is the perfect place for anyone looking to dive deep into the world of drums. The hands-on lessons are both challenging and rewarding.",
    name: "Ethan Black",
    title: "Drumming Aficionado",
  },
  {
    quote: "The online courses at Melody Master are fantastic! I learned to play the violin from the comfort of my home, with top-tier instruction.",
    name: "Olivia Rose",
    title: "Online Violin Student",
  },
  {
    quote: "Joining Melody Master has been a game-changer for my music production skills. The teachers are knowledgeable, and the resources are excellent.",
    name: "Noah Reed",
    title: "Music Producer",
  },
  {
    quote: "From jazz to classical, Melody Master covers it all. The diverse range of courses allowed me to explore different styles and find my true passion.",
    name: "Ava Morgan",
    title: "Multi-Genre Musician",
  },
  {
    quote: "The community at Melody Master is amazing! It's more than just a music school—it's a place where you can connect with other musicians and grow together.",
    name: "Jackson Lee",
    title: "Band Member",
  },
  {
    quote: "Melody Master provided me with the tools and confidence to perform live. The performance workshops are a must for anyone serious about their music career.",
    name: "Ella Brooks",
    title: "Live Performer",
  },
];

const TestimonialCards = () => {
  return (
    <div className='h-[40rem] w-full dark:bg-black dark:bg-grid-white'>
       <h2 className='text-3xl font-bold text-center mb-8 z-10'>Hear Our Harmony: Voices of Success</h2>
       <div className='flex justify-center w-full overflowhidden px-4 sm:px-6 lg:px-8'>
        <div className='w-full max-w-6xl'>
        <InfiniteMovingCards
        items={MusicSchoolTestimonials}
        direction="right"
        speed="slow"
      />
        </div>
       </div>
    </div>
  )
}

export default TestimonialCards
