import React from 'react'

const Section =({Title, Contents})=>{
  return(<section>
  <h3 className="capitalize text-lg font-bold">{Title}</h3>
    {Array.isArray(Contents) ? (
      <ul>{Contents.map(eachContent=>(
        <li className="content capitalize" 
        value={eachContent}>
        {eachContent}
        </li>))}</ul>
    ): (<button>{Contents}</button>)}
  </section>)
}

export default function Footer (){
  return(<footer className="flex bg-bg2 gap-4 flex-wrap items-center  justify-between">
  <section className="special">
    <h2 className="font-bold text-xl">SKATECH</h2>
    <p>your trusted source for news, insights, and analysis on business, innovation, and entertainment in Africa and beyond</p>
  </section>
  <Section Title=''
  Contents=''/>
  <Section Title=''
  Contents=''/>
  <Section Title=''
  Contents=''/>
  </footer>)
}