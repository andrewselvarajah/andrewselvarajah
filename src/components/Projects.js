import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function Projects(props){
  return(
     <div className = 'Projects'>
       <div className = "text-project">
         <div style= {{top: "0px"}}>
         
          <h1 className = "col-title">{props.title}</h1>
          <p className = "sub">{props.subject}</p>
       </div>
       



       </div>
       <form action={props.link } target = "_blank" className = "form">
          <button type="submit" className = "pro-github" target="_blank"><i className="fab fa-github-square fa-3x" /></button>
        </form>

     </div>

  )}
export default Projects 