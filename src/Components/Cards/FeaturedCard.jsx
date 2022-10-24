import React from 'react'
import icons from '../../Constants/icons'
import "./style.css"

const FeaturedCard = ({slide,breakpoints,vw}) => {

  const CheckBadge = icons.CheckBadgeIcon ;

  return (
    <div className='featured__card__container' style={{width:`${vw}vw`,height:"44vh"}} >
        <picture className='featured__img'>
            {
                slide.srcs.map((src,index)=>{
                    return(
                        <source key={index} media={`(min-width: ${breakpoints[index]})`} srcSet={`${src}`} />
                    )
                })
            }
            <img src={`${slide.srcs[3]}`} alt="featuredCard" style={{width:"100%",height:"100%"}}/>
            
        </picture>
        
        <div className="text__container">
            <span>
                {slide.title}
                <CheckBadge color='blue' width={15} height={15}/>
            </span>
            <span style={{fontSize:"13px"}}>Floor:{slide.floorprice}</span>
            
        </div>
    </div>
  )
}

export default React.memo(FeaturedCard);