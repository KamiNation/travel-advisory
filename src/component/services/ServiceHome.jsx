import React from 'react'
import ServiceMap from './ServiceMap'
import Servicestyle from './Service.module.css'

const ServiceHome = () => {
    return (
        <section className={Servicestyle.servicesContainer} id={Servicestyle.section} >
            <h1>Our Services</h1>
            <div className={Servicestyle.services}>
                <ServiceMap/>
            </div>
        </section>
    )
}

export default ServiceHome