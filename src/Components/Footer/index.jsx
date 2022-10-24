import React from 'react'
import icons from '../../Constants/icons'
import IconButton from '../Navbar/NavComponets/IconButton'


import "./style.css"

const Footer = () => {
    const User = icons.UserCircleIcon ;
  return (
    <div className='footer__container'>
        <div className="footer__top__container">
            <div className="top__left__container">
                <h3>Stay in the loop</h3>
                <p>Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks for navigating OpenSea.</p>
                <form className='subscription__form'>
                    <input type="text" placeholder='Your eamil address' className='subscription__input' />
                    <button type="submit" className='subscription__button'>Sign Up</button>
                </form>
            </div>
            <div className="top__right__container">
                <h3>Join the community</h3>
                <div className='social__media__icons'>
                    <IconButton >
                        <User width={24} height={24} className='social__media__button'/>
                    </IconButton>
                    <IconButton >
                        <User width={24} height={24} className='social__media__button'/>
                    </IconButton>
                    <IconButton >
                        <User width={24} height={24} className='social__media__button'/>
                    </IconButton>
                    <IconButton >
                        <User width={24} height={24} className='social__media__button'/>
                    </IconButton>
                    <IconButton >
                        <User width={24} height={24} className='social__media__button'/>
                    </IconButton>
                    <IconButton >
                        <User width={24} height={24} className='social__media__button'/>
                    </IconButton>
                    
                </div>
            </div>
        </div>
        <br />
        <hr  style={{width:"80vw",borderTop :"0.5px solid #4B88C401"}}/>
        <br />
        <div className="footer__bottom__container">
            <div className="bottom__logo__container">
                <img src="/images/logo.png" alt="logo" width={40} height={40} />
                <h3>OpenSea</h3>
                <p>The world’s first and largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, sell, and discover exclusive digital items.</p>
            </div>
            <div className="bottom__links__wrapper">
            <div className="bottom__links__container">
                <h3>Marketplace</h3>
                {
                    ["All NFTs","Solana NFTs","Art","Collectibles","Domain Names","Music","Photography","Sports","Trading Cards","Utility","Virtual Worlds"]
                    .map((link,index)=>{
                        return(
                            <a href={`/${link}`} key={index}>{link}</a>
                        )
                    })
                }
            </div>
            <div className="bottom__links__container">
            <h3>My Account</h3>
                {
                    ["Profile","Favorites","Watchlist","My Collections","Settings","Stats",'Rankings','Activity']
                    .map((link,index)=>{
                        return (
                            <a href={`/${link}`} key={index}>{link}</a>
                        )
                    })
                }
            </div>
            <div className="bottom__links__container">
            <h3>Resources</h3>
                {
                    ["Learn","Help", "Center",'Platform', "Status",'Partners',"Taxes",'Blog','Docs','Newsletter']
                    .map((link,index)=>{
                        return (
                            <a href={`/${link}`} key={index}>{link}</a>
                        )
                    })

                }
            </div>
            <div className="bottom__links__container">
            <h3>Company</h3>
                {
                    ["About","Careers","Ventures",'Grants']
                    .map((link,index)=>{
                        return (
                            <a href={`/${link}`} key={index}>{link}</a>
                        )
                    })
                }
            </div>
            </div>
        </div>
        <br />
        <hr  style={{width:"80vw",borderTop :"0.5px solid #4B88C401"}}/>
        <br />
        <div className='copyright__container'>
            <p>&#169;2018 - 2022 Saddam Hussain Inc</p>
            <span>
                <a href="/privacypolicy">Privacy Policy</a>
                <a href="/termsofservice">Terms of Service</a>
            </span>
        </div>
    </div>
  )
}

export default Footer