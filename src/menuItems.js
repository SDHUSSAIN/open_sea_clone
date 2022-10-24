import icons from "./Constants/icons"

const Instagram = icons.CameraIcon ;
const Youtube = icons.VideoCameraIcon ;
const Facebook = icons.ChatBubbleOvalLeftEllipsisIcon ;

export const menuItems = [
    {
        title:"Explore",
        url:"/explore",
        submenu:[
            {
                title:"AllNFTs",
                icon:"",
                url:"/allnfts"
            },
            {
                title:"SolanaNFTs",
                icon:"",
                url:"/Solananfts"
            },{
                title:"Art",
                icon:"",
                url:"/art"
            },{
                title:"Collectibles",
                icon:"",
                url:"/collectibles"
            },{
                title:"Domain Names",
                icon:"",
                url:"/domainnames"
            },{
                title:"Music",
                icon:"",
                url:"/Music"
            },
            {
                title:"Photography",
                icon:"",
                url:"/photography"
            },
            {
                title:"Sports",
                icon:"",
                url:"/sports"
            },
            {
                title:"Trading Cards",
                icon:"",
                url:"/tradingcards"
            },
            {
                title:"Utility",
                icon:"",
                url:"/utility"
            },
            {
                title:"Virtual Worlds",
                icon:"",
                url:"/virtualworlds"
            },

        ]
    },
    {
        title:"Stats",
        url:"/stats",
        submenu:[
            {
                title:"Rankings",
                icon:"",
                url:"/rankings"
            },
            {
                title:"Activity",
                icon:"",
                url:"/activity"
            }
        ]
    },
    {
        title:"Resources",
        url:"/resources",
        submenu:[
            {
                title:"Learn",
                url:"/learn"
            },
            {
                title:"Help Center",
                url:"/help"
            },
            {
                title:"Platform Status",
                url:"/platformstatus"
            },
            {
                title:"Partners",
                url:"/partners",
            },
            {
                title:"Taxes",
                url:"/taxes"
            },
            {
                title:"Blog",
                url:"/blog"
            },
            {
                title:"Docs",
                url:"/docs"
            },
            {
                title:"Newsletter",
                url:"/newsletter"
            },
            {
                title:<span><Instagram width={20} height={20}/> <Youtube width={20} height={20} /> <Facebook width={20} height={20} /></span>,
            },
            
        ]
    },
    {
        title:"Create",
        url:"/create"
    }
]