import React from 'react'
import { SatisfactionCollection } from './SatisfactionCollection'
import SatisfactionCard from './SatisfactionCard'
import Satisfactionstyle from './Satisfaction.module.css'


const SatisfactionMap = () => {
  return (
    <>
    <div className={Satisfactionstyle.satis}>
      {SatisfactionCollection.map((satisfaction) => (
        <SatisfactionCard
          key={satisfaction.index}
          title={satisfaction.title}
          desc={satisfaction.description}
          img={satisfaction.image}
        />
      ))}
      </div>
    </>
  )
}

export default SatisfactionMap