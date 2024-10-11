import React from 'react'
import Booksstyle from './Books.module.css'




const BooksCard = (props) => {
  const { img, title, desc } = props
  return (
    <div className={Booksstyle.bookCard}>
      <div className={Booksstyle.firstPart}>
        <img id={Booksstyle.icon} src={img} alt={title} />
      </div>
      <div className={Booksstyle.h4p}>
        <h4>{title}</h4>
        <p>{desc}</p>
      </div>

    </div>
  )
}

export default BooksCard