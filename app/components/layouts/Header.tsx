import React from 'react'
import Image from 'next/images'
import {Button} from '@/components/ui/Elements.tsx'

const NavLinks=['About',  'What We Do', 'Jobs', 'Projects', 'TG Academy', 'Strategic Partners', 'Pricing', 'Book a Consultation']

export default function Header(){
  return(<header>
  <Image/>
  <button>hamburger</button>
  <section id="CTA">
    <Button TextContent='Account'/>
    <Button
    TextContent='Take Assessment'/>
  </section>
  <ul></ul>
  </header>)
}