import Image from 'next/image'
import React from 'react'

export default function AboutSection() {
  return (
    <div className='bg-[rgb(19,46,67)] h-screen flex flex-col justify-start items-center px-24 py-4'>
        <div className='py-8 text-4xl font-semibold '>
            <h1 className='text-white'>About <span className='text-blue-500'>Me</span></h1>
        </div>
        <div className='border-[rgb(74,149,210)] border-l-2 border-r-2 p-2 rounded-full mt-4'>               
            <Image src='/images/profile logo.png' alt='profile logo' height={24} width={100} className='border border-[rgb(74,149,210)] rounded-full bg-[rgb(8,28,41)] h-48 w-48'/>
        </div>
        <h1 className='text-white text-2xl font-semibold py-6 '>Frontend Development!</h1>
        <p className='text-white w-[70%]'>As i am on a journey to expand my skills and knowledge in this ever-evolving field.I am eager to mastering the art of web development.I am now combining my passion for psychology with web development skills to craft innovative digital experiences.Through my projects and continuous learning I'm very excited to incorporating psycholoigy to create inuitive and engaging designs that plays a crucial role in building based on user behaviour and preferences by having insighs into how users think and interact with websites. I enjoy to sprinkle magic into concepts in making designs that won't just sit pretty, they will respond, adopt and dance across screen, and colors them from sooting pastels to bold gradient and my endeavors in web development are guided by a pursuit of achieving a harmonious integration of form and function, recognizing the interconnected relationship between design aesthetics and user experience.Join me on this transformative journey as I navigate the complexities of web development, seeking to cultivate a mindful balance of creativity and innovation in every coding endeavor.  </p>
        <button className='  bg-[rgb(8,28,41)] text-blue-500 py-2 px-7 border-blue-500 border-2 rounded hover:text-[rgb(8,28,41)] hover:bg-blue-500 mt-4'>Read More</button>
    </div>
  )
}
