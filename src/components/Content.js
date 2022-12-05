import React from 'react'

function Content({content, title}) {
  return (
    <div>
        <div className='content'>
            <h1>{title}</h1>
            <p>{content}</p>
        </div>
    </div>
  )
}

export default Content