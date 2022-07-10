import React from 'react';
import Icon from '../IconComponent/Icon';
import SidebarCss from './Sidebar.module.css';
import dashBoardIcon from '../../assets/dashBoardIcon.svg';
import performIcon from '../../assets/chartIcon.svg';
import skillsIcon from '../../assets/skillsIcon.svg';
import logOutSquareIcon from '../../assets/logOutSquareIcon.svg';
// import { useState } from 'react';

const Sidebar = () => {
  return (
    <div className={SidebarCss.body}>
      <div>
        <Icon name='Dashboard' image={dashBoardIcon} link='/dashboard/overview' className={SidebarCss.icons} />
        <Icon name='Performance Report' image={performIcon} link='' className={SidebarCss.icons} />
        <Icon name='Skill Evaluation' image={skillsIcon} link='/dashboard/testpage' className={SidebarCss.icons} />
      </div>
      <Icon name='Logout' image={logOutSquareIcon} link='' className={SidebarCss.logOut} />
    </div>
  );
};

export default Sidebar;
