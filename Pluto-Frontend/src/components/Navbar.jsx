import '../css/navbar.css'

// SVG Image Paths
const dmBtnIcon = "/static/dm_btn_icon.svg" 
const groupBtnIcon = "/static/group_btn_icon.svg" 
const settingsBtnIcon = "/static/settings_btn_icon.svg" 

function Navbar() {
    return (
        <>
            <div className='navbar-div'>
                <button className='nav-btn' id='dm-btn'>
                    <img id='dm-btn-icon' src={dmBtnIcon}></img>
                </button>

                <button className='nav-btn' id='group-btn'>
                    <img id='group-btn-icon' src={groupBtnIcon}></img>
                </button>

                <button className='nav-btn' id='settings-btn'>
                    <img id='settings-btn-icon' src={settingsBtnIcon}></img>
                </button>
            </div>
        </>
    )   
}

export default Navbar