import React,{useState} from "react";
import CategoryCard from "../../Components/Cards/CategoryCard";
import FeaturedCard from "../../Components/Cards/FeaturedCard";
import Navbar from "../../Components/Navbar"
import "./style.css"
import { FeaturedImages, TableImages } from "../../imagesData";
import { CategoryImages } from "../../imagesData";
import { NewImages } from "../../imagesData";
import { DreamersImages } from "../../imagesData";
// import { TableImages } from "../../imagesData";
import icons from "../../Constants/icons";
import { useEffect } from "react";
import SpotLightCard from "../../Components/Cards/SpotLightCard";
import Footer from "../../Components/Footer";

const Home = () => {
    const [slideNo, setSlideNo] = useState(0);
    const [trendingStyle, setTrendingStyle] = useState({color:"black",borderBottom:"3px solid black"});
    const [dropdown,setDropdown] = useState(false);
    const [selectValue, setSelectValue] = useState("24 H")
    const [topStyle, setTopStyle] = useState({});
    const [newSlideNo, setNewSlideNo] = useState(0);
    const [newSlideWidth, setNewSlideWidth] = useState(30);
    const [dreamSlideNo, setDreamSlideNo] = useState(0);
    const [dreamSlideWidth, setDreamSlideWidth] = useState(30);
    const [ featuredImgWidth, setFeaturedImgWidth] = useState(22.2);
    const [slideMargin, setSlideMargin] = useState(1.5);
    
    const [currentWindowSize, setCurrentWindowSize] = useState(document.documentElement.clientWidth);
    const Breakpoints = [
        1200,//hammenu change and footer change
        1020, //cart button only featured slider 3 image,table single column other slider two images and category single footer as it is 1200
        770, //navbar no change featured slider 2 images, all other slider one footer no change 
        599, //featured slider one image and navbar search icon only all other same

    ]
    // const vw = document.documentElement.clientWidth ;
    useEffect(()=>{
        window.addEventListener('onload',()=>{
            const size = document.documentElement.clientWidth ;

            if(size <1200 && size >1020){
                setFeaturedImgWidth(29.6);
                setDreamSlideWidth(48);
                setNewSlideWidth(48);
            }else if(size<1020 && size >770){
                setFeaturedImgWidth(44.4);
                
            }else{
                setFeaturedImgWidth(88.8);
                setDreamSlideWidth(96);
                setNewSlideWidth(96);
            }
            setCurrentWindowSize(document.documentElement.clientWidth);
        })
        window.addEventListener('resize',()=>{
            const size = document.documentElement.clientWidth ;
            if(size >1200){
                setFeaturedImgWidth(23.2);
                setDreamSlideWidth(32);
                setNewSlideWidth(32);
            }else

            if(size <1200 && size >1020){
                setFeaturedImgWidth(29.6);
                setDreamSlideWidth(48);
                setNewSlideWidth(48);
            }else if(size<1020 && size >770){
                setFeaturedImgWidth(44.4);
                
            }else{
                setFeaturedImgWidth(88.8);
                setDreamSlideWidth(96);
                setNewSlideWidth(96);
            }
            setCurrentWindowSize(size);
            
        })
    },[currentWindowSize]) 
    
    const handleArrow = (direction) => {
        console.log(slideNo);
        
        if (direction === "left") {
           if(currentWindowSize <1020 && currentWindowSize > 770){
                setSlideMargin(1);
                setSlideNo(slideNo !== 0 ? slideNo - 3 : 9);
                
            }else if(currentWindowSize <770 && currentWindowSize > 599){
                setSlideMargin(0.6);
                setSlideNo(slideNo !== 0 ? slideNo - 2 : 10);
            }else if((currentWindowSize <599 )){
                setSlideMargin(0.28)
                setSlideNo(slideNo !== 0 ? slideNo - 1 : 11);
            }else{
                setSlideNo(slideNo !== 0 ? slideNo - 4 : 8);
            }    
        }
        if (direction === "right") {
            if(currentWindowSize <1020 && currentWindowSize > 770){

                setSlideNo(slideNo !== 9 ? slideNo + 3 : 0);
            }else if(currentWindowSize <770 && currentWindowSize > 599){
                setSlideNo(slideNo !== 10 ? slideNo + 2 : 0);
            }else if(currentWindowSize <599){
                setSlideNo(slideNo !== 11 ? slideNo + 1 : 0);
            }else {
                setSlideNo(slideNo !== 8 ? slideNo + 4 : 0);
            }   
        }
    }
    const handleNewArrow = (direction) =>{
        if(direction === "left"){
            if(currentWindowSize < 1200 && currentWindowSize > 770){
                setNewSlideNo(newSlideNo !== 0 ? newSlideNo - 1 : 3);
            }else 
            if(currentWindowSize < 770 && currentWindowSize > 599){
                setNewSlideNo(newSlideNo !== 0 ? newSlideNo - 1 : 4);
            }else{
            setNewSlideNo(newSlideNo !== 0 ? newSlideNo - 1 : 2);
            }
        }
        if(direction === "right"){
            if(currentWindowSize < 1200 && currentWindowSize > 770){
                setNewSlideNo(newSlideNo !== 3 ? newSlideNo + 1 : 0);
            }else
            if(currentWindowSize < 770 && currentWindowSize > 599){
                setNewSlideNo(newSlideNo !== 4 ? newSlideNo + 1 : 0);
            }else{
            setNewSlideNo(newSlideNo !== 2 ? newSlideNo + 1 : 0);
            }
        }
    }
    const handleDreamArrow = (direction) =>{
        
        if(direction === "left"){
            if(currentWindowSize < 1200 && currentWindowSize > 770){
                setDreamSlideNo(dreamSlideNo !== 0 ? dreamSlideNo - 1 : 4);
            }else 
            if(currentWindowSize < 770 && currentWindowSize > 599){
                setDreamSlideNo(dreamSlideNo !== 0 ? dreamSlideNo - 1 : 5);
            }else{
            setDreamSlideNo(dreamSlideNo !== 0 ? dreamSlideNo - 1 : 3);
            }
        }
        if(direction === "right"){
            if(currentWindowSize < 1200 && currentWindowSize > 770){
                setDreamSlideNo(dreamSlideNo !== 4 ? dreamSlideNo + 1 : 0);
            }else
            if(currentWindowSize < 770 && currentWindowSize > 599){
                setDreamSlideNo(dreamSlideNo !== 5 ? dreamSlideNo + 1 : 0);
            }else{
            setDreamSlideNo(dreamSlideNo !== 3 ? dreamSlideNo + 1 : 0);
            }
        }
    }
    const handleNavStyle =(tag)=>{
       if(tag==="trending"){
            setTrendingStyle({color:"black",borderBottom:"3px solid black"});
            setTopStyle({});
        }
        else{
            setTrendingStyle({});
            setTopStyle({color:"black",borderBottom:"3px solid black"})
        }
       
        
    }

    const handleCustomSelect =(value)=>{
       setSelectValue(value);
       setDropdown(!dropdown);
    }

    const Left = icons.ChevronLeftIcon;
    const Right = icons.ChevronRightIcon;
    
    return (
        <>
        <div style={{ display:"flex",alignItems:"center", flexDirection:"column", justifyContent:"center"}}>
            <div className="hero__container">
                <Navbar windowSize={currentWindowSize} />
                <div style={{ textAlign: "center", }}>
                    <h1 style={{ fontSize: "2.5em", fontWeight: "800", color: "#000000" }}>Explore, collect, and sell NFTs</h1>
                </div>
                <div className="featured__slider__wrapper">
                    <div className="left__button">
                        <button onClick={()=>handleArrow("left")}>
                            <Left width={24} height={24} />
                        </button>
                    </div>
                    <div className="featured__slider__img__wrapper"  style={{ transform: `translateX(${- (featuredImgWidth + slideMargin) * slideNo}vw)`}} >
                        {
                            FeaturedImages.map((slide, index) => {
                                return (
                                    <FeaturedCard slide={slide} breakpoints={Breakpoints} vw={featuredImgWidth} key={index} />
                                )
                            })
                        }
                    </div>
                    <div className="right__button">
                        <button onClick={()=>handleArrow("right")} >
                            <Right width={24} height={24} />
                        </button>
                    </div>
                </div>

            </div>
                <div className="top__ranking__container">
                    <div className="ranking__nav__container">
                        <div className="short__options">
                            <h2 onClick={()=> handleNavStyle("trending") } style={trendingStyle}>Trending</h2>
                            <h2 onClick={()=> handleNavStyle("top")} style={topStyle}>Top</h2>
                        </div>
                        <div className="short__buttons">
                            <div className="custom__select">
                                <input type="text" value={selectValue}  onClick={()=>setDropdown(!dropdown)}/>
                                < div className="option__container" style={ dropdown ? {display:"block"} : {display:"none"}}>
                                    {
                                        ["1H","6 H", "24 H", "7 D", "30 D", "ALL"]
                                        .map((item, i)=>{
                                            return (
                                                <li key ={i} onClick={()=>handleCustomSelect(item)} >{item}</li>
                                            )
                                        })

                                    }
                                </div>
                            </div>
                            
                            <button>View All</button>
                        </div>
                    </div>
                    <div className  ="tables">
                    <div className="ranking__table__container">
                        <table>
                            <tr className="table__row__header" >
                                <td>COLLECTION</td>
                                <td>FLOOR PRICE</td>
                                <td>VOLUME</td>
                            </tr>
                            {
                                TableImages.slice(0,5).map((item,i)=>{
                                    return(
                                        <tr key={i} className="table__body__row">
                                            <td>
                                                <span className="table__first__col" >
                                                    {item.id}
                                                    <img src={item.src} alt={item.title} className="table__img"/>
                                                    {item.title}
                                                </span>
                                            </td>
                                            <td>{item.floorprice}</td>
                                            <td>{item.volume}</td>
                                        </tr>
                                    )
                                })
                            }
                        </table>
                        
                    </div>
                    <div className="ranking__table__container">
                        <table>
                            <tr className="table__row__header">
                                <td className="table__col">COLLECTION</td>
                                <td>FLOOR PRICE</td>
                                <td>VOLUME</td>
                            </tr>
                            {
                                TableImages.slice(5,10).map((item,i)=>{
                                    return(
                                        <tr key={i} className="table__body__row" >
                                            <td>
                                                <span className="table__first__col">
                                                    {item.id}
                                                    <img src={item.src} alt={item.title} className="table__img" />
                                                    {item.title}
                                                </span>
                                            </td>
                                            <td>{item.floorprice}</td>
                                            <td>{item.volume}</td>
                                        </tr>
                                    )
                                })
                            }
                        </table>
                        
                    </div>

                    </div>
                    
                </div>
                <div style={{ textAlign: "left",width:"100%",paddingLeft:"4.5em",fontSize:"1.5em" }} >
                    <h3>New and Notable</h3>
                </div>
                <div className="new__image__wrapper">
                    <div className="left__button">
                        <button onClick={()=>handleNewArrow("left")}>
                            <Left width={24} height={24} />
                        </button>
                    </div>
                    <div className="new__image__slider" style={{ transform: `translateX(${- (newSlideWidth +2) * newSlideNo}vw)`}} >
                        {
                            NewImages.map((slide,index)=>{
                                return(
                                    <SpotLightCard slide={slide} key={index} vw={newSlideWidth} />
                                )
                            })
                        }
                    </div>
                    <div className="right__button">
                        <button onClick={()=>handleNewArrow("right")} >
                            <Right width={24} height={24} />
                        </button>
                    </div>
                    
                </div>
                <div style={{ textAlign: "left",width:"100%",paddingLeft:"4.5em",fontSize:"1.5em" } }>
                    <h3>Dreamers spotlight</h3>
                </div>
                <div className="new__image__wrapper">
                    <div className="left__button">
                        <button onClick={()=>handleDreamArrow("left")}>
                            <Left width={24} height={24} />
                        </button>
                    </div>
                    <div className="new__image__slider" style={{ transform: `translateX(${- (dreamSlideWidth +2) * dreamSlideNo}vw)`}} >
                        {
                            DreamersImages.map((slide,index)=>{
                                return(
                                    <SpotLightCard slide={slide} key={index} vw={dreamSlideWidth} />
                                )
                            })
                        }
                    </div>
                    <div className="right__button">
                        <button onClick={()=>handleDreamArrow("right")} >
                            <Right width={24} height={24} />
                        </button>
                    </div>
                    
                </div>
           
            <div className="category__container">
                <div>
                    <h1>Browse by Category</h1>
                </div>
                <div className="category__card__wrapper">
                {
                    CategoryImages.map((slide,index)=>{
                        return (
                            <CategoryCard key={index} slide={slide}/>
                        )
                    })
                }
                </div>
                
            </div>
            <Footer/>
        </div>
            
        </>
    )
}

export default Home;