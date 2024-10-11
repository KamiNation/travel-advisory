import React from 'react'
import Satisfactionstyle from './Satisfaction.module.css'

const SatisfactionCard = (props) => {
    const { img, title, desc } = props
    return (
        <div className={Satisfactionstyle.satisfaction}>
            <div className={Satisfactionstyle.satisfactionDiv}>
                <img src={img} alt={title} />
            </div>
            <h3>{title}</h3>
            <p>{desc}</p>
        </div>
    )
}

export default SatisfactionCard