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

                <button className='bg-navbar-btn-color w-12 h-12 border-none rounded-lg outline-none cursor-pointer !p-0' id='group-btn'>
                    <img style={{ width: '27px', height: '48px', marginLeft: '10px', marginRight: '10px' }} id='group-btn-icon' src={groupBtnIcon}></img>
                </button>

                <button className='bg-navbar-btn-color w-12 h-12 border-none rounded-lg outline-none cursor-pointer !p-0 mt-auto' id='settings-btn'>
                    <img style={{ width: '27px', height: '48px', marginLeft: '10px', marginRight: '10px' }} id='settings-btn-icon' src={settingsBtnIcon}></img>
                </button>
            </div>
        </>
    )   
}

export default Navbar