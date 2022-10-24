
const IconButton = ({children,style,onClick}) => {    
  return (
    <div className='nav__icon__container' style={{...style}} onClick={()=>onClick()}>
        <button className="nav__icon__button">
            {children}
        </button>
    </div>
  )
}

export default IconButton