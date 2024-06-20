import React from 'react'
import '../styles/Button.css';
// const StyledButton = {
//     width: "175px",
//     height: "44px",
//     borderRadius: "12px",
//     padding: "12px 32px",
//     backgroundColor: "#6de754" ,
// }

function Button({children,className="",type,onClick}) {
  return (
    <button onClick={onClick} className={`${className} ${type}`}>{children}</button>
  )
}

export default Button
