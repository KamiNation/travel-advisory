import React, { useContext } from 'react'
import { Carr } from './PackageCollection'
import Packagestyle from './Package.module.css'
import { PackageContext } from './PackageContext'





const ButtonCard = () => {

  const { updateSetSelectedItem } = useContext(PackageContext)


  const handleClick = (item) => {
    updateSetSelectedItem(item);
  }


  return (
    <div className={Packagestyle.buDis}>
      {Carr.map((item, index) => (
        <p key={index} id={Packagestyle.itemBut} onClick={() =>{ handleClick(item)}}>{item}</p>
      ))}
    </div>
  )
}

export default ButtonCard