

const Dropdown = ({submenus, style}) => {
    
  return (
    <div className="submenu__container" >
            {
                submenus.map((submenu,index)=>{
                   return( <li key={index} className="submenu__items">
                        <a href={submenu.url}  >{submenu.title}</a>
                    </li>
                   )
                })
            }
    </div>
    
  )
}

export default Dropdown