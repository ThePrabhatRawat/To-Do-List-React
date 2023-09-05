import React from 'react'

export default function List( props) {

    
  return (
    <>
    <div className='to-do-style'>
        <i className="fa fa-times" aria-hidden="true" onClick={()=>{
            props.onSelect(props.id)
        }
        }></i>
    <li>{props.text}</li>
    </div>
    
    </>
    
  )
}


