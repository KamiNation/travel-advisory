import React from 'react'
import Servicestyle from './Service.module.css'

const ServiceCard = (props) => {
    const { image, title, description,href } = props
    return (
        <div className={Servicestyle.service}>
            <div className={Servicestyle.serviceDiv}>
            <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
            <a target='child' href={href} >Explore</a>
        </div>
    )
}

export default ServiceCard