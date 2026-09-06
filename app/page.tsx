import Header from '@/components/layouts/Header'
import BottomTick from '@/components/layouts/Footer'
import {Button} from '@/components/ui/Elements'
import Image from 'next/image'
import heroImage from '@/assets/heroImage.jpg'
import {TestemonialCard} from '@/components/ui/Cards'

export default function Home() {
  return (<>
    <Header/>
    <section id="heroes" className='text-center relative bg-black/70 text-white'>
      <Image src={heroImage} alt='hero' width={1000} height={1000} className='absolute -z-1 top-0 left-0 w-full h-full object-cover'/>
      <span className='bg-white/10 rounded-full py-3 px-12'>WHAT WE DO</span>
      <h1>Training and Development</h1>
      <p>Our comprehensive range of programs and resources is designed to enhance skills, broaden knowledge, and propel careers forward in today's ever-evolving landscape.</p>
      <Button TextContent='Book a Consultation'
      ClassName='bg-primary'/>
    </section>
    <main>
    <section id='book-a-consultation' className='bg-primary text-white text-center'>
      <p>Want to accelerate professional growth and development at your organisation? See how we can help.</p>
      <Button TextContent='Book a Consultation'
      ClassName='bg-white text-primary'/>
    </section>
    <section id="testemonials" className='flex'>
      <h2 className="text-center">Testimonials</h2>
      <TestemonialCard Comment='Tobams Group has been instrumental in shaping the future of tech talent development in Africa. Their innovative approach to talent acquisition, internships, and skill development has empowered countless individuals to thrive in the global tech landscape.' CommenterName='Jane Doe' CommenterTitle='CTO' ImgPath='/path/to/image1.jpg'/>
      <TestemonialCard Comment='The team at Tobams Group is dedicated to fostering a culture of continuous learning and growth. Their commitment to providing top-notch training and development opportunities has made a significant impact on the tech community in Africa.' CommenterName='John Smith' CommenterTitle='CEO' ImgPath='/path/to/image2.jpg'/>
    </section>
    </main>
    <BottomTick/>
    </>);
}


