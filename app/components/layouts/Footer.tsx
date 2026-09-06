import {Button} from '@/components/ui/Elements'
import {FooterCard} from '@/components/ui/Cards'
type SectionProps={
  Title: string,
  Contents: string[] | string
}

const FooterSections ={
  'What we do': ['Sustainability Services', 'Strategy Planning and Implementation', 'Tech Talent Solutions', 'Training and Development', 'IT Consulting Services', 'Social Impact', 'Talent Recruitment'],
  'Company': ['About', 'Jobs', 'Projects', 'Our Founder', 'Business Model', 'The Team', 'Contact Us', 'Blog', 'FAQs', 'Testimonials'],
  'Solution': ['Tobams Group Academy', 'Help a Tech Talent', 'Campus Ambassadors Program', 'Join Our Platform', 'Pricing', 'Book a Consultation', 'Join Our Slack Community'],
}

const Section =({Title, Contents}: SectionProps)=>{
  return(<section>
  <h3 className="capitalize text-lg font-bold">{Title}</h3>
    {Array.isArray(Contents) ? (
      <ul>{Contents.map(eachContent=>(
        <li key={eachContent} className="content capitalize font-400">
        {eachContent}
        </li>))}</ul>
    ): (<p>{Contents}</p>)}
  </section>)
}

const GetInTouch =()=>{
  return(<section id="getintouch" className='flex justify-between bg-secondary-deep text-white p-4'>
    <div>
    <p>Ready to be a part of something extraordinary?</p>
    <h2>Let’s work together to create a difference</h2>
    </div>
    <Button TextContent='Get in Touch'
    ClassName='bg-primary'/>
  </section>)}

const Footer = ()=>{
  return(<footer className='flex flex-wrap bg-secondary-black text-white p-4 justify-between mt-px'>
    <Section Title='Image' Contents='Tobams Group is an innovative consultancy firm reshaping the future of tech talent development in Africa, specializing in talent acquisition, internships, and skill development with a global perspective.'/>
    <Section Title='what we do' Contents={FooterSections['What we do']}/>
    <Section Title='company' Contents={FooterSections['Company']}/>
    <Section Title='solution' Contents={FooterSections['Solution']}/>
    <section id="contact" className="flex flex-wrap bg-white/6">
      <FooterCard Title='Contact' Heading='Get in Touch' Contents={['Contact Information']} />
    </section>
    <section id="copyrightInfo" className='flex flex-wrap-reverse justify-between border-t-secondary-blush/10 border-t'>
    <p className='text-center'>Copyright &copy; Tobams Group 2024. All rights reserved.</p>
    <div className='text-center'>
    <a>Terms and Conditions</a>
    <a>Privacy Policy</a>
    <a>Cookie Policy</a>
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