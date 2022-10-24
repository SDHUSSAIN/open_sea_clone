
import Dropdown from "../Dropdown"


const MenuItem = ({item}) => {

   
  
  return (
    <>
        <li className="menu__item"  >
            {
                item.submenu !== undefined ? (
                    <div className="submenu__box">
                        <a role="button" href={item.title} style={{textDecoration:"none",color:"#000000"}}>{item.title}</a>
                        <Dropdown submenus = {item.submenu}  />
                        
                    </div>
                ) : (
                    <>
                       <a role="button" href={item.title} style={{textDecoration:"none",color:"#000000"}} >{item.title}</a>
                    </>
                )
            }
        </li>
    </>
  )
}

export default MenuItem

