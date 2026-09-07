import {Button} from '@/components/ui/Elements'
import {FooterCard} from '@/components/ui/Cards'
type SectionProps={
  Title: string,
  Contents: string[] | string,
  ClassName?: string
}

const FooterSections ={
  'What we do': ['Sustainability Services', 'Strategy Planning and Implementation', 'Tech Talent Solutions', 'Training and Development', 'IT Consulting Services', 'Social Impact', 'Talent Recruitment'],
  'Company': ['About', 'Jobs', 'Projects', 'Our Founder', 'Business Model', 'The Team', 'Contact Us', 'Blog', 'FAQs', 'Testimonials'],
  'Solution': ['Tobams Group Academy', 'Help a Tech Talent', 'Campus Ambassadors Program', 'Join Our Platform', 'Pricing', 'Book a Consultation', 'Join Our Slack Community'],
}

const Section =({Title, Contents, ClassName=''}:SectionProps)=>{
  return(<section className={ClassName}>
  <h3 className="capitalize text-lg font-bold text-white">{Title}</h3>
    {Array.isArray(Contents) ? (
      <ul className="mt-4 space-y-2">{Contents.map(eachContent=>(
        <li key={eachContent} className="content capitalize text-sm text-neutral-gray transition-colors hover:text-white">
        {eachContent}
        </li>))}</ul>
    ): (<p className="mt-4 max-w-sm text-sm leading-6 text-neutral-gray">{Contents}</p>)}
  </section>)
}

const GetInTouch =()=>{
  return(<section id="getintouch" className='bg-secondary-deep px-4 py-10 text-white sm:px-8 lg:px-12'>
    <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-secondary-blush">Ready to be a part of something extraordinary?</p>
        <h2 className="mt-3 max-w-2xl text-2xl font-bold leading-tight sm:text-3xl">Let’s work together to create a difference</h2>
      </div>
      <Button TextContent='Get in Touch'
        ClassName='self-start bg-accent text-white md:self-center'/>
    </div>
  </section>)}

const Footer = ()=>{
  return(<footer className='mt-px bg-secondary-black text-white'>
    <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:grid-cols-2 sm:px-8 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1.1fr] lg:px-12">
      <Section Title='Tobams Group' Contents='Tobams Group is an innovative consultancy firm reshaping the future of tech talent development in Africa, specializing in talent acquisition, internships, and skill development with a global perspective.'/>
      <Section Title='what we do' Contents={FooterSections['What we do']}/>
      <Section Title='company' Contents={FooterSections['Company']}/>
      <Section Title='solution' Contents={FooterSections['Solution']}/>
      <section id="contact" className="rounded bg-white/5 p-5">
        <FooterCard Title='Contact' Heading='Get in Touch' Contents={['Contact Information']} />
      </section>
    </div>
    <section id="copyrightInfo" className='mx-auto flex max-w-6xl flex-col gap-4 border-t border-secondary-blush/10 px-4 py-5 text-sm text-neutral-gray sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:px-8 lg:px-12'>
      <p className="text-center sm:text-left">Copyright &copy; Tobams Group 2024. All rights reserved.</p>
      <div className='flex flex-wrap justify-center gap-x-5 gap-y-2 sm:justify-end'>
        <a className="transition-colors hover:text-white">Terms and Conditions</a>
        <a className="transition-colors hover:text-white">Privacy Policy</a>
        <a className="transition-colors hover:text-white">Cookie Policy</a>
      </div>
    </section>
  </footer>)
}

export default function BottonTick(){
  return(<>
    <GetInTouch/>
    <Footer/>
  </>)
}