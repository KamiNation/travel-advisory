import React from 'react'
import { BooksCollection } from './BooksCollection'
import BooksCard from './BooksCard'

const BooksMap = () => {
  return (
    <>
    {
        BooksCollection.map((books)=>(
            <BooksCard
            key={books.index}
            img={books.image}
            title={books.title}
            desc={books.description}
            />
        ))
    }
    </>
  )
}

export default BooksMap