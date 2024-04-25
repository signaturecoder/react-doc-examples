import React from 'react'

const Title = ({title}) => {
    console.log("Title Component Rendered ---");
  return (
    <h3>{title}</h3>
  )
}

export default React.memo(Title)