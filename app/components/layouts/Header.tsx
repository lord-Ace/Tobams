'use client'
import Image from 'next/image'
import {Button} from '@/components/ui/Elements'
import {HamburgerIcon} from '@/components/ui/IconLibrary'

const NavLinks=['About',  'What We Do', 'Jobs', 'Projects', 'TG Academy', 'Strategic Partners', 'Pricing', 'Book a Consultation']

const Nav = ({NavText, className}:{NavText: string[] | string, className?: string})=>{
  return(<nav id="primary-navigation" aria-label="Primary navigation" className={`${className ?? ''}`}>
    {Array.isArray(NavText) ? (
      <ul className="flex flex-wrap items-center gap-x-5 gap-y-3 md:justify-center lg:gap-x-7">
        {NavText.map(text=>(
          <li key={text} className="cursor-pointer text-sm text-neutral-black transition-colors hover:text-primary hover:underline">
            {text}
          </li>))}
      </ul>
    ): (<p>{NavText}</p>)}
  </nav>)
}

export default function Header(){
  return(<header className="flex flex-wrap items-center justify-between gap-x-8 gap-y-4 border-b border-secondary-blush/30 bg-white px-4 py-3 text-neutral-black md:flex-nowrap md:px-8 lg:px-12">
    <div className="flex w-full items-center justify-between md:w-auto md:shrink-0">
      <Image src="/logo.png" alt="tobams group logo" width={100} height={100} className="h-auto w-24 md:w-28"/>
      <button
        type="button"
        aria-label="Toggle navigation"
        aria-controls="primary-navigation"
        className="rounded p-2 hover:bg-black hover:text-white md:hidden"
        onClick={() => {
          document.querySelectorAll('.hide').forEach(element=>{element.classList.toggle('hidden')})
        }}
      >
        <HamburgerIcon/>
      </button>
    </div>
    <Nav NavText={NavLinks}
      className="hide order-3 hidden w-full md:order-none md:block md:w-auto md:flex-1"/>
    <section id="CTA" className="order-2 flex w-full items-center justify-end gap-2 md:order-none md:w-auto">
      <Button TextContent={'Account'}
        ClassName='border border-primary bg-white text-primary'/>
      <Button TextContent='Take Assessment'
        ClassName='bg-accent text-white'/>
    </section>
  </header>)
}