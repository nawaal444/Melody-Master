"use client";
import React from 'react'
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
const content = [
    {
      title: "Live Music Classes",
      description:
        "Participate in live music classes with experienced instructors. Whether you're learning guitar, piano, or any other instrument, our interactive sessions provide real-time feedback and personalized guidance. Enhance your musical skills and gain confidence through live practice.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--blue-500),var(--purple-500))] flex items-center justify-center text-white">
          Live Music Classes
        </div>
      ),
    },
    {
      title: "Interactive Workshops",
      description:
        "Join interactive workshops to dive deeper into music theory, composition, and performance techniques. Our workshops offer hands-on experience and group activities that foster creativity and collaboration. Perfect for both beginners and advanced musicians.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--green-500),var(--yellow-500))] flex items-center justify-center text-white">
          Interactive Workshops
        </div>
      ),
    },
    {
      title: "Personalized Lessons",
      description:
        "Receive one-on-one lessons tailored to your musical goals. Our instructors create customized lesson plans to suit your skill level and interests, helping you progress faster and achieve your musical aspirations. Ideal for focused and accelerated learning.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--red-500),var(--orange-500))] flex items-center justify-center text-white">
          Personalized Lessons
        </div>
      ),
    },
    {
      title: "Music Theory Mastery",
      description:
        "Master the fundamentals of music theory with our comprehensive courses. Learn about scales, chords, rhythm, and harmony in a structured environment. Our expert instructors break down complex concepts into easily digestible lessons to build a solid theoretical foundation.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--purple-500),var(--blue-500))] flex items-center justify-center text-white">
          Music Theory Mastery
        </div>
      ),
    },
  ];
  
const WhyChooseUs = () => {
  return (
    <div>
        <StickyScroll content={content}/>
    </div>
  )
}

export default WhyChooseUs
