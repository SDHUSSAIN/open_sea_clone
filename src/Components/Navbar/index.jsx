import "./style.css"
import IconButton from './NavComponets/IconButton'
import icons from "../../Constants/icons"
import MenuItem from './NavComponets/MenuItem'
import { menuItems } from '../../menuItems'
import { useState } from "react"
import { useEffect } from "react"



const Navbar = ({windowSize}) => {
    // console.log(windowSize);
    const [hamMenuDisplay, sethamMenuDisplay] = useState({display:"none"});
    const [bigMenuDisplay, setbigMenuDisplay] = useState({});
    const [searchDisplay, setSearchDisplay] = useState({})
    const [smallMenuDisplay, setSmallMenuDisplay] = useState({display:"none"})
   
    
    const Wallet = icons.WalletIcon;
    const User = icons.UserCircleIcon;
    const Cart = icons.ShoppingCartIcon;
    const HamMenu = icons.Bars3Icon;
    const Search = icons.MagnifyingGlassIcon;
    const handleMenu = () =>{
        if(smallMenuDisplay.display ==="none"){
            setSmallMenuDisplay({
                display:"block"
            })
        }else{
            setSmallMenuDisplay({
                display:"none"
            })
        }
        
    }
    useEffect(()=>{
        const handleMenus = () =>{
            if(windowSize <= 1200){
                sethamMenuDisplay({display:"block"});
                setbigMenuDisplay({display:"none"})
            }else{
                sethamMenuDisplay({display:"none"});
                setbigMenuDisplay({});
            }
            if(windowSize <=1020){
                setSearchDisplay({
                    display:"none"
                })
            }else{
                setSearchDisplay({
                    display:"block"
                });
                sethamMenuDisplay({display:"none"});
                setSmallMenuDisplay({display:"none"})
            }
        }
        handleMenus();
    },[windowSize]);
    
    
    
    return (
        <>
            <div className="nav__container">
                <div className="logo__container">
                    <a href="/" className="logo__button">
                        <div>
                            <img src="/images/logo.png" height="40px" width="40px" alt="logo" />
                        </div>
                        <h2>OpenSea</h2>
                    </a>
                </div>
                <div className="search__container">
                    <div className="search__box">
                        <div className="search__icon__box">
                            <Search height={20} width={20} color="grey" />
                        </div>
                        <div className="search__input__box" style={{...searchDisplay}}>
                            <input type="text" placeholder='Search items, collections, and accounts' />
                        </div>
                    </div>
                </div>
                <div className="menu__item__container" style={{...bigMenuDisplay}}>
                    <ul >
                        {
                            menuItems.map((menu, index)=>{
                                return(
                                    <MenuItem item={menu} key={index} />
                                )
                            })
                        }
                    </ul>

                </div>
                <div className="ham__menu__container" style={{...smallMenuDisplay}}>
                    <ul>{
                        
                        menuItems.map((menu,index)=>{
                            return(
                                <li key={index} className="ham__nav__item">
                                    <div>
                                        <span> {menu.title}</span>
                                        <ul className="ham__sub__nav">
                                            {
                                                menu.submenu?.map((item,i)=>{
                                                    return(
                                                        <li key={i}  >{item.title}</li>
                                                    )
                                                })
                                            }
                                            
                                        </ul>
                                        
                                    </div>
                                    
                                </li>
                            )
                        })
                    }
                    </ul>
                </div>
                <div className="menu__icon__button__contaiener">
                    <ul>
                        <IconButton  >
                            <User height={34} width={34} />
                        </IconButton>
                        <IconButton>
                            <Wallet height={34} width={34} />
                        </IconButton>
                        <IconButton>
                            <Cart height={34} width={34} />
                        </IconButton>
                        <IconButton style={hamMenuDisplay} onClick={handleMenu}> 
                            <HamMenu height={34} width={34} />
                        </IconButton>

                    </ul>

                </div>

            </div>
        </>
    )
}

export default Navbar
