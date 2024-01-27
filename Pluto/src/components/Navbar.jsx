import '../css/index.css'


// SVG Image Paths
const dmBtnIcon = "../assets/dm_btn_icon.svg" 
const settingsBtnIcon = "../assets/settings_btn_icon.svg" 



function Navbar() {
    return (
        <>
            <div className='flex flex-col items-center bg-navbar-color min-h-screen w-[70px] pt-5 pb-5'>
                <button className='bg-navbar-btn-color w-12 h-12 border-none rounded-lg outline-none cursor-pointer !p-0 mb-3' id='dm-btn'>
                    <img className='w-[27px] h-[48px] ml-[10px] mr-[10px]' id='dm-btn-icon' src={dmBtnIcon}></img>
                </button>

                <div className='flex flex-col items-center space-y-3 w-full h-[616px] mb-3 px-2 border-y-2 border-solid border-y-navbar-btn-color overflow-x-hidden overflow-y-auto scrollbar-hide'>
                    
                    {data.allHubsOfUser.map((item, index) => {
                        if (index === 0) {
                            return <img key={index} src={item.hubIcon} alt={item.name} className='flex-shrink-0 bg-navbar-btn-color w-12 h-12 border-none rounded-lg outline-none cursor-pointer !mt-3 hover:opacity-90'></img>
                        }

                        if ((index + 1) === data.allHubsOfUser.length) {
                            return <img key={index} src={item.hubIcon} alt={item.name} className='flex-shrink-0 bg-navbar-btn-color w-12 h-12 border-none rounded-lg outline-none cursor-pointer !mb-3 hover:opacity-90'></img>
                        }

                        else {
                            return <img key={index} src={item.hubIcon} alt={item.name} className='flex-shrink-0 bg-navbar-btn-color w-12 h-12 border-none rounded-lg outline-none cursor-pointer hover:opacity-90'></img>
                        }
                    })}
                </div>

                <button className='bg-navbar-btn-color w-12 h-12 border-none rounded-lg outline-none cursor-pointer !p-0' id='settings-btn'>
                    <img className='w-[27px] h-[48px] ml-[10px] mr-[10px]' id='settings-btn-icon' src={settingsBtnIcon}></img>
                </button>
            </div>
        </>
    )   
}

export default Navbar