import React, { useEffect } from 'react'

const UseTitle = (title) => {

    useEffect(()=>{
        document.title =`${title} | Shopping Cart`
    },[title])

  return (
    <div>
      
    </div>
  )
}

export default UseTitle
