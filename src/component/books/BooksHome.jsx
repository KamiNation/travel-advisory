import React from 'react'
import BooksMap from './BooksMap'
import Booksstyle from './Books.module.css'
import rightImage from '/src/assets/Image.png'

const BooksHome = () => {
  return (
    <section className={Booksstyle.booksContainer} id={Booksstyle.section}>

      <h2>Book Your Next Trip in 3 Easy Steps</h2>
      <p>Easy and Fast</p>

      <div className={Booksstyle.bookMapRight}>
        <div className={Booksstyle.bookMap}>
          <BooksMap />
        </div>
      </div>


    </section>
  )
}

export default BooksHome