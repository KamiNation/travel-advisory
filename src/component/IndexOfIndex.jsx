import React from 'react'
import IndexBooks from './books/IndexBooks'
import IndexDestination from './destination/IndexDestination'
import IndexFooter from './footer/IndexFooter'
import IndexPackage from './package/IndexPackage'
import IndexSatisfaction from './satisfaction/IndexSatisfaction'
import IndexService from './services/IndexService'








const IndexOfIndex = () => {
  return (
    <>
    <IndexService/>
    <IndexSatisfaction/>
    <IndexDestination/>
    <IndexPackage/>
    <IndexBooks/>
    {/* <IndexFooter/> */}
    </>
  )
}

export default IndexOfIndex