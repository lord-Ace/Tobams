'use client'

const Button = ({TextContent, ClassName=''}: {TextContent: string, ClassName?: string})=>{
  return(
    <button className={`rounded py-3 px-6 ${ClassName}`} >{TextContent}</button>
    )
}

export {Button}