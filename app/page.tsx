import Image from 'next/image'
import Header from '@/components/layouts/Header'
import BottomTick from '@/components/layouts/BottomTick'
import {Button} from '@/components/ui/Elements'
import heroImage from '@/assets/heroImage.jpg'
import introImg from '@/assets/introImg.jpg'
import managementProgramImg from '@/assets/managementProgram.jpg'
import transformationImg from '@/assets/transformation.jpg'
import {TestemonialCard} from '@/components/ui/Cards'
import {CardStyle1} from '@/components/ui/Cards'
import trainings from '@/utils/data/trainings.json'
import corporateTrainingImg from '@/assets/corporateTraining.jpg'
import personalizedTrainingImg from '@/assets/personalizedTraining.jpg'
import capacityDevelopmentImg from '@/assets/capacityDev.jpg'
import testimonials from '@/utils/data/testemonials.json'
import aishaImg from '@/assets/aisha.png'
import johnImg from '@/assets/john.png'
import chinonsoImg from '@/assets/chinonso.png'

const trainingImages: Record<string, string> = {
  'corporate-trainings': corporateTrainingImg.src,
  'personalised-individual-training': personalizedTrainingImg.src,
  'capacity-development': capacityDevelopmentImg.src,
}

const testimonialImages: Record<string, string> = {
  'aisha-yusuf': aishaImg.src,
  'john-davies': johnImg.src,
  'chinonso-nwankwo': chinonsoImg.src,
}

export default function Home() {
  return (<>
    <Header/>
    
    <section id="heroes" className='text-center relative bg-black/70 text-white'>
      <Image src={heroImage} alt='hero' width={1000} height={1000} className='absolute -z-1 top-0 left-0 w-full h-full object-cover'/>
      <span className='bg-white/10 rounded-full py-3 px-12'>WHAT WE DO</span>
      <h1>Training and Development</h1>
      <p>Our comprehensive range of programs and resources is designed to enhance skills, broaden knowledge, and propel careers forward in today&apos;s ever-evolving landscape.</p>
      <Button TextContent='Book a Consultation'
      ClassName='bg-primary'/>
    </section>
    
    <main>
    <section id="intro" className="bg-secondary-blush px-4 py-12 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-6xl items-center gap-8 md:grid-cols-[0.9fr_1.1fr] lg:gap-14">
        <Image
          src={introImg}
          alt="Tobams Group learning and development professionals"
          width={720}
          height={720}
          className="mx-auto aspect-square w-full max-w-md rounded-full object-cover"
        />
        <div>
          <h2 className="text-2xl font-bold text-primary sm:text-3xl">Learning Management System</h2>
          <div className="mt-5 rounded bg-primary-light/20 p-5 text-neutral-black sm:p-6">
            <p className="text-sm leading-6">
              TG Academy is a hub of knowledge and skill-building resources designed to empower tech talents on their learning journey. From technical courses covering the latest programming languages and development frameworks to soft skills training in leadership, effective communication and project management, TG Academy offers a wide range of courses to cater to diverse learning needs. With accessible and interactive learning materials, individuals can enhance their skills and stay ahead in today&apos;s competitive tech landscape.
            </p>
            <p className="mt-5 font-semibold text-primary">Some of our courses include:</p>
            <ul className="mt-3 grid gap-x-6 gap-y-2 text-sm sm:grid-cols-2 lg:grid-cols-3">
              <li>Business Analysis</li>
              <li>Design Thinking</li>
              <li>Effective Communication</li>
              <li>Entrepreneurship</li>
              <li>Career Development</li>
              <li>Business Model</li>
            </ul>
          </div>
          <Button TextContent='Learn More ↗'
            ClassName='mt-6 bg-primary text-white'/>
        </div>
      </div>
    </section>
    
    <section id="trainings" className="bg-neutral-offwhite px-4 py-12 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-3">
        {trainings.map((training) => (
          <CardStyle1
            key={training.id}
            Title={training.title}
            Description={training.description}
            Points={training.points}
            ImgPath={trainingImages[training.id]}
            ClassName="bg-white shadow-sm"
          />
        ))}
      </div>
    </section>

    <section id="management-development-program" className="bg-secondary-aubergine px-4 py-12 text-white sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-6xl overflow-hidden rounded-lg bg-secondary-plum md:grid-cols-[0.9fr_1.1fr]">
        <Image
          src={managementProgramImg}
          alt="Professionals collaborating during a management development program"
          width={1000}
          height={667}
          className="h-full min-h-64 w-full object-cover"
        />
        <div className="p-6 sm:p-8 lg:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary-blush">
            Management Development Program
          </p>
          <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
            Build confident, capable managers
          </h2>
          <p className="mt-4 text-sm leading-6 text-white/85">
            Our Management Development Program equips emerging and experienced
            managers with the practical skills to lead people, make better
            decisions, and drive meaningful results across their organisations.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              'Leadership development',
              'Effective communication',
              'Strategic thinking',
              'People and performance management',
            ].map((benefit) => (
              <div key={benefit} className="rounded border border-white/20 bg-secondary-aubergine/60 px-4 py-3 text-sm">
                {benefit}
              </div>
            ))}
          </div>
          <Button TextContent="Learn More ↗"
            ClassName="mt-7 bg-accent text-white"/>
        </div>
      </div>
    </section>

    <section id="transformation-hub" className="bg-accent-tint px-4 py-12 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl rounded-lg bg-accent-tint p-6 sm:p-8 lg:p-10">
        <p className="text-sm font-semibold italic text-link">Learning With Our CEO:</p>
        <h2 className="mt-2 text-2xl font-bold text-primary sm:text-3xl">
          Transformation Hub With Jite Newton
        </h2>
        <p className="mt-5 max-w-5xl text-sm leading-6 text-neutral-black">
          Transformation Hub with Jite Newton is a flagship webinar series curated by the CEO, Dr. Jite Newton. Designed to elevate career trajectories and leadership capabilities, this exclusive event offers invaluable insights and strategies for personal and professional growth. Whether you&apos;re seeking to advance your career or enhance your leadership skills, the Transformation Hub provides a transformative learning experience to unlock your full potential and drive success in your endeavours.
        </p>
        <div className="mt-6 grid gap-6 md:grid-cols-[1.05fr_1.2fr]">
          <Image
            src={transformationImg}
            alt="Professional learning during the Transformation Hub"
            width={1500}
            height={1000}
            className="h-full min-h-64 w-full rounded object-cover"
          />
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              'Strategic Career Guidance',
              'Leadership Development',
              'CV Development',
              'Sustainability Leadership',
              'Communication Skills',
              'Business Model',
            ].map((feature) => (
              <div key={feature} className="flex items-center gap-3 rounded bg-white/80 px-4 py-3 text-sm text-neutral-black">
                <span aria-hidden="true" className="text-lg font-bold text-primary">ϟ</span>
                <span>{feature}</span>
              </div>
            ))}
            <Button TextContent="Learn More ↗"
              ClassName="mt-1 w-fit bg-primary text-white"/>
          </div>
        </div>
      </div>
    </section>
    
    <section id='book-a-consultation' className='bg-primary text-white text-center'>
      <p>Want to accelerate professional growth and development at your organisation? See how we can help.</p>
      <Button TextContent='Book a Consultation'
      ClassName='bg-white text-primary'/>
    </section>
    
    <section id="testemonials" className="bg-white px-4 py-12 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-2xl font-bold text-primary sm:text-3xl">Testimonials</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestemonialCard
              key={testimonial.id}
              Comment={testimonial.comment}
              CommenterName={testimonial.commenterName}
              CommenterTitle={testimonial.commenterTitle}
              ImgPath={testimonialImages[testimonial.id]}
              ClassName="m-0 h-full shadow-sm"
            />
          ))}
        </div>
      </div>
    </section>
    </main>
    <BottomTick/>
    </>);
}
