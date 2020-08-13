import React from 'react';
import './Sidebar.css';
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import SidebarOption from '../sidebarOption/SidebarOption.js';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';

function Sidebar() {
    return (
        <div className="sidebar">
            {/* twitter icon */}
            <TwitterIcon />

            {/* sidebar Option */}
            <SidebarOption Icon={HomeIcon} text="Home" />   
            <SidebarOption Icon={SearchIcon} text="Explore" />   
            <SidebarOption Icon={NotificationsNoneIcon} text="Notifications" />   
            <SidebarOption />   
            <SidebarOption />   

        </div>
    );
}

export default Sidebar;
