import React from 'react'

const SpotLightCard = ({slide,vw}) => {
  return (
    <div className='spotlight__card__container' style={{minWidth:`${vw}vw`}}>
        <div className="spotlight__img__container">
            <img src={slide.src} alt={slide.title} />
        </div>
        <div className="spotlight__text__container">
            <div className='short__img__container'>
                <img src={slide.shortUrl} alt={slide.shortUrl} />
            </div>
            <p style={{marginTop:"40px"}}>{slide.title}</p>
        </div>
    </div>
  )
}

export default SpotLightCard