import React from 'react'
import cn from 'classnames'

const MDBBtn = ({ className, children, onSelect, selected, modal, ...rest}) => {
  return (
    <div className={cn()}>
      <button className={cn()} {...rest}>
        {
          children
        }
      </button>
    </div>
  )
}

export default MDBBtn