import '../css/index.css'

// SVG Image Paths
const dmBtnIcon = "/static/dm_btn_icon.svg" 
const groupBtnIcon = "/static/group_btn_icon.svg" 
const settingsBtnIcon = "/static/settings_btn_icon.svg" 

function Navbar() {
    return (
        <>
            <div style={{ width: '70px' }} className='flex flex-col items-center bg-navbar-color min-h-screen pt-5 pb-5'>
                <button className='bg-navbar-btn-color w-12 h-12 border-none rounded-lg outline-none cursor-pointer !p-0 mb-3' id='dm-btn'>
                    <img style={{ width: '27px', height: '48px', marginLeft: '10px', marginRight: '10px' }} id='dm-btn-icon' src={dmBtnIcon}></img>
                </button>

                <div style={{ height: '616px' }} className='flex flex-col items-center space-y-3 w-full mb-3 px-2 border-y-2 border-solid border-y-navbar-btn-color overflow-x-hidden overflow-y-auto scrollbar-hide'>
                    <button className='flex-shrink-0 bg-navbar-btn-color w-12 h-12 border-none rounded-lg outline-none cursor-pointer !mt-3'></button>
                    <button className='flex-shrink-0 bg-navbar-btn-color w-12 h-12 border-none rounded-lg outline-none cursor-pointer'></button>
                    <button className='flex-shrink-0 bg-navbar-btn-color w-12 h-12 border-none rounded-lg outline-none cursor-pointer'></button>
                    <button className='flex-shrink-0 bg-navbar-btn-color w-12 h-12 border-none rounded-lg outline-none cursor-pointer'></button>
                    <button className='flex-shrink-0 bg-navbar-btn-color w-12 h-12 border-none rounded-lg outline-none cursor-pointer !mb-3'></button>
                </div>

                <button className='bg-navbar-btn-color w-12 h-12 border-none rounded-lg outline-none cursor-pointer !p-0' id='settings-btn'>
                    <img style={{ width: '27px', height: '48px', marginLeft: '10px', marginRight: '10px' }} id='settings-btn-icon' src={settingsBtnIcon}></img>
                </button>
            </div>
        </>
    )   
}

export default Navbar