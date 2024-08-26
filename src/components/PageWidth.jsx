import React from 'react'

function PageWidth({children}) {
  return (
    <div className="w-[60%] md:w-[80%] ">
      {children}
    </div>
  )
}

export default PageWidth