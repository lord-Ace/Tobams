import Image from 'next/image'

const CardStyle1 = ({Title, Description, Points, ImgPath, ClassName=''}: {Title: string, Description: string, Points: string[], ImgPath: string, ClassName?: string})=>{
  return(<div className={`flex flex-col justify-between p-4 rounded bg-white/10 ${ClassName}`}>
    <h3 className='text-lg font-bold'>{Title}</h3>
    <Image src={ImgPath} alt={Title} width={1000} height={1000} />
    <p className='text-sm'>{Description}</p>
    <ul>
        {Points.map (eachopoint=>(<li key={eachopoint} className='text-sm'>{eachopoint}</li>))}
    </ul>
  </div>)
}

const TestemonialCard =({Comment='heli', CommenterName='John Doe', CommenterTitle='CEO', ImgPath='/path/to/default/image.jpg', ClassName=''}: {Comment: string, CommenterName: string, CommenterTitle: string, ImgPath: string, ClassName?: string})=>{
  return(<div className={`relative bg-white rounded-2xl py-5 px-6 m-10 ${ClassName}`}>
    <div className='absolute rounded-[inherit] -z-1 top-0 -left-0.5 w-full h-full bg-accent'></div>
    <div id="top">
        <Image src={ImgPath} alt={CommenterName} width={1000} height={1000} className='rounded-full w-11 h-11'/>
        <h4 id="commenter-name">{CommenterName}</h4>
        <p id="commenter-title">{CommenterTitle}</p>
    </div>
    <p>{Comment}</p>
    </div>)}

const FooterCard =({Title, Heading, Contents, ClassName=''}: {Title: string, Heading: string, Contents: string[] | string, ClassName?: string})=>{
  return(<div className={`${ClassName} relative`}>
  <div className='absolute rounded-[inherit] -z-1 top-0 -left-0.5 w-full h-full bg-accent'></div>
  
    <h3>{Title}</h3>
    <h4>{Heading}</h4>
    {Array.isArray(Contents) ? (
      <ul>{Contents.map(eachContent=>(
        <li key={eachContent} className="content capitalize font-400">
        {eachContent}
        </li>))}</ul>
    ): (<p>{Contents}</p>)}
  </div>)
}


export {CardStyle1, TestemonialCard, FooterCard}