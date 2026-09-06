import React from 'react'
'Use Client'

export const Button = ({TextContent='me', ClassName=''})=>{
  return(
    <button className={`${ClassName}`} onClick={() => {}}>{TextContent}</button>
    )
}