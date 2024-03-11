import React from 'react'

const HelperFunction = (props) => {
  return (
    <div className="">
        <h3>{props.regions}</h3>
        <ol>
            <li>{props.districts}</li>
        </ol>
    </div>
  )
}

export default HelperFunction