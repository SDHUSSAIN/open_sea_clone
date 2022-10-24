import React from 'react'

const CategoryCard = ({slide}) => {
  return (
    <div className='category__card__container'>
        <div className='category__image__container'>
            <img src={slide.ulr} alt={slide.title} />
        </div>
        <div className="category__text__container">
            <a href={`/${slide.title}`} style={{textDecoration:"none", color:"black"}} >{slide.title}</a>
        </div>
    </div>
  )
}

export default CategoryCard ;
