import React from 'react'
import '../styles/Details.css';
function Details({children,Mode}) {
  return (
    <div className={`details text-center text-md-start mb-5 ${Mode ==='dark' ? 'dark' : 'light'}`}>
       {children}
    </div>
  )
}

export default Details
